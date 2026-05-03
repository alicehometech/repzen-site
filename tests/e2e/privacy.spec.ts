import { test, expect } from '@playwright/test';

const privacyRoutes = [
  { lang: 'en', path: '/privacy', heading: 'Privacy Policy', noNotice: true },
  { lang: 'zh', path: '/zh/privacy', heading: '隐私政策' },
  { lang: 'ja', path: '/ja/privacy', heading: 'プライバシーポリシー' },
  { lang: 'ko', path: '/ko/privacy', heading: '개인정보 처리방침' },
  { lang: 'es', path: '/es/privacy', heading: 'Política de privacidad' },
  { lang: 'de', path: '/de/privacy', heading: 'Datenschutzerklärung' },
] as const;

for (const route of privacyRoutes) {
  test.describe(`@all privacy ${route.lang}`, () => {
    test('renders heading', async ({ page }) => {
      const resp = await page.goto(route.path);
      expect(resp?.ok()).toBeTruthy();
      await expect(page.getByRole('heading', { name: route.heading, level: 1 })).toBeVisible();
    });

    test('shows the data-collection table', async ({ page }) => {
      await page.goto(route.path);
      const article = page.getByTestId('privacy-article');
      await expect(article.locator('table')).toBeVisible();
      await expect(article.locator('table tbody tr')).toHaveCount(6);
    });

    test('mentions the developer email', async ({ page }) => {
      await page.goto(route.path);
      await expect(page.getByRole('link', { name: 'lasmarthome18@gmail.com' })).toBeVisible();
    });

    if (!route.noNotice) {
      test('shows the "English is authoritative" notice', async ({ page }) => {
        await page.goto(route.path);
        await expect(page.getByTestId('privacy-article')).toContainText(/English|英文|英語|영문|inglés|englische/i);
      });
    }
  });
}
