import { test, expect } from '@playwright/test';

test.describe('@all SEO + meta', () => {
  test('home has title, description, canonical, og:image, twitter:card', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/RepZen/);
    const desc = await page.locator('meta[name="description"]').getAttribute('content');
    expect(desc?.length).toBeGreaterThan(60);
    expect(desc?.length).toBeLessThan(200);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /^https:\/\/repzen\.app/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /og-image\.png/);
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
  });

  test('JSON-LD SoftwareApplication present and well-formed', async ({ page }) => {
    await page.goto('/');
    const jsonText = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(jsonText).toBeTruthy();
    const data = JSON.parse(jsonText!);
    expect(data['@type']).toBe('SoftwareApplication');
    expect(data.name).toBe('RepZen');
    expect(data.applicationCategory).toBe('HealthApplication');
  });

  test('robots.txt and sitemap.xml are reachable', async ({ request }) => {
    const robots = await request.get('/robots.txt');
    expect(robots.status()).toBe(200);
    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.status()).toBe(200);
    const xml = await sitemap.text();
    expect(xml).toContain('<urlset');
    expect(xml).toContain('https://repzen.app/zh');
    expect(xml).toContain('hreflang="zh-Hans"');
    expect(xml).toContain('hreflang="x-default"');
  });

  test('404 page returns 404 status and shows the not-found heading', async ({ page }) => {
    const resp = await page.goto('/this-page-does-not-exist');
    expect(resp?.status()).toBe(404);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('not found');
  });

  test('icons are reachable', async ({ request }) => {
    for (const slug of ['repzen-icon-1024', 'exercise_push_up', 'exercise_sit_up', 'exercise_squat']) {
      const r = await request.get(`/icons/${slug}.png`);
      expect(r.status(), `/icons/${slug}.png`).toBe(200);
    }
  });

  test('zero JS shipped on the home page (only the lang-switcher inline handler)', async ({ page }) => {
    const scriptResources: string[] = [];
    page.on('response', (resp) => {
      const url = resp.url();
      const ct = resp.headers()['content-type'] ?? '';
      if (ct.includes('javascript')) scriptResources.push(url);
    });
    await page.goto('/');
    expect(scriptResources).toEqual([]);
  });
});
