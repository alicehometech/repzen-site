import type { APIRoute } from 'astro';
import { locales, hreflang, localePath } from '~/i18n';

export const GET: APIRoute = ({ site }) => {
  const origin = (site?.toString() ?? 'https://repzen.app').replace(/\/$/, '');
  const pages: ('' | 'privacy')[] = ['', 'privacy'];

  const urls = pages.flatMap((page) =>
    locales.map((loc) => {
      const path = localePath(loc, page);
      const loc_url = origin + (path === '/' ? '/' : path);
      const alternates = locales
        .map((alt) => {
          const altPath = localePath(alt, page);
          const altUrl = origin + (altPath === '/' ? '/' : altPath);
          return `    <xhtml:link rel="alternate" hreflang="${hreflang[alt]}" href="${altUrl}"/>`;
        })
        .join('\n');
      const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${origin + (localePath('en', page) === '/' ? '/' : localePath('en', page))}"/>`;
      const priority = page === '' ? '1.0' : '0.5';
      const changefreq = page === '' ? 'weekly' : 'monthly';
      return `  <url>
    <loc>${loc_url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternates}
${xDefault}
  </url>`;
    }),
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
