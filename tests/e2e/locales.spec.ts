import { test, expect } from '@playwright/test';

const locales = [
  { code: 'en', path: '/', html: 'en', heroTitle: 'Counts your reps.', exercisesHeading: 'What it counts', cta: 'Join TestFlight beta' },
  { code: 'zh', path: '/zh', html: 'zh-Hans', heroTitle: '自动数次数。', exercisesHeading: '它能数什么', cta: '加入 TestFlight 测试' },
  { code: 'ja', path: '/ja', html: 'ja', heroTitle: 'レップを数える。', exercisesHeading: '数えられるもの', cta: 'TestFlight ベータに参加' },
  { code: 'ko', path: '/ko', html: 'ko', heroTitle: '횟수를 셉니다.', exercisesHeading: '셀 수 있는 것', cta: 'TestFlight 베타 참여' },
  { code: 'es', path: '/es', html: 'es', heroTitle: 'Cuenta tus repeticiones.', exercisesHeading: 'Lo que cuenta', cta: 'Unirse a la beta de TestFlight' },
  { code: 'de', path: '/de', html: 'de', heroTitle: 'Zählt deine Wiederholungen.', exercisesHeading: 'Was es zählt', cta: 'TestFlight-Beta beitreten' },
] as const;

for (const loc of locales) {
  test.describe(`@all locale=${loc.code}`, () => {
    test('renders correct lang attribute', async ({ page }) => {
      await page.goto(loc.path);
      const lang = await page.locator('html').getAttribute('lang');
      expect(lang).toBe(loc.html);
    });

    test('hero title is translated', async ({ page }) => {
      await page.goto(loc.path);
      await expect(page.locator('h1')).toContainText(loc.heroTitle);
    });

    test('exercises heading is translated', async ({ page }) => {
      await page.goto(loc.path);
      await expect(page.getByRole('heading', { name: loc.exercisesHeading })).toBeVisible();
    });

    test('TestFlight CTA points to the right URL', async ({ page }) => {
      await page.goto(loc.path);
      const cta = page.getByTestId('cta-testflight');
      await expect(cta).toBeVisible();
      await expect(cta).toHaveAttribute('href', 'https://testflight.apple.com/join/T4ygaWD7');
      await expect(cta).toHaveAttribute('target', '_blank');
    });

    test('GitHub CTA points to the right URL', async ({ page }) => {
      await page.goto(loc.path);
      const cta = page.getByTestId('cta-github');
      await expect(cta).toHaveAttribute('href', 'https://github.com/alicehometech/repzen');
    });

    test('all 10 exercise icons render', async ({ page }) => {
      await page.goto(loc.path);
      const grid = page.getByTestId('exercise-grid');
      await expect(grid).toBeVisible();
      await expect(grid.locator('li')).toHaveCount(10);
    });

    test('hreflang alternates link to all 6 locales + x-default', async ({ page }) => {
      await page.goto(loc.path);
      const alts = await page.locator('link[rel="alternate"][hreflang]').count();
      expect(alts).toBe(7);
    });

    test('canonical points to this locale URL', async ({ page }) => {
      await page.goto(loc.path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toContain(loc.path === '/' ? 'repzen.app/' : `repzen.app${loc.path}`);
    });

    test('privacy page reachable from this locale', async ({ page }) => {
      await page.goto(loc.path);
      const link = page.getByTestId('cta-privacy-full');
      await expect(link).toBeVisible();
      const href = await link.getAttribute('href');
      const expected = loc.code === 'en' ? '/privacy' : `/${loc.code}/privacy`;
      expect(href).toBe(expected);
    });

    test('language switcher contains 6 options and current is selected', async ({ page }) => {
      await page.goto(loc.path);
      const select = page.locator('#lang-select');
      await expect(select.locator('option')).toHaveCount(6);
      const selected = await select.evaluate((el: HTMLSelectElement) => el.value);
      const expected = loc.code === 'en' ? '/' : `/${loc.code}`;
      expect(selected).toBe(expected);
    });
  });
}
