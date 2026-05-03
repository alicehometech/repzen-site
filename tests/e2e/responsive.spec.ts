import { test, expect } from '@playwright/test';

test.describe('@mobile responsive', () => {
  test('hero CTA is visible above the fold on iPhone 14', async ({ page }) => {
    await page.goto('/');
    const cta = page.getByTestId('cta-testflight');
    await expect(cta).toBeVisible();
    const box = await cta.boundingBox();
    const viewport = page.viewportSize();
    expect(box).not.toBeNull();
    expect(viewport).not.toBeNull();
    expect(box!.y).toBeLessThan(viewport!.height);
  });

  test('mobile nav (#exercises etc.) is hidden, lang switcher is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header nav a[href$="#exercises"]')).toBeHidden();
    await expect(page.locator('#lang-select')).toBeVisible();
  });

  test('no horizontal overflow at 390px (iPhone 14 width)', async ({ page }) => {
    await page.goto('/');
    const overflow = await page.evaluate(() => ({
      doc: document.documentElement.scrollWidth,
      win: window.innerWidth,
    }));
    expect(overflow.doc).toBeLessThanOrEqual(overflow.win + 1);
  });
});

test.describe('@tablet responsive', () => {
  test('exercises grid switches to 3 columns on iPad', async ({ page }) => {
    await page.goto('/');
    const cols = await page
      .getByTestId('exercise-grid')
      .evaluate((el) => getComputedStyle(el).gridTemplateColumns.split(' ').length);
    expect(cols).toBeGreaterThanOrEqual(3);
  });
});

test.describe('@desktop responsive', () => {
  test('header nav links are visible at 1280px', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header nav a[href$="#exercises"]')).toBeVisible();
    await expect(page.locator('header nav a[href$="#how"]')).toBeVisible();
    await expect(page.locator('header nav a[href$="#privacy"]')).toBeVisible();
    await expect(page.locator('header nav a[href$="#faq"]')).toBeVisible();
  });

  test('hero is laid out as 2 columns at desktop width', async ({ page }) => {
    await page.goto('/');
    const heroH1Box = await page.locator('h1').boundingBox();
    expect(heroH1Box).not.toBeNull();
    expect(heroH1Box!.width).toBeLessThan(900);
  });
});

test.describe('@dark dark mode', () => {
  test('respects prefers-color-scheme: dark', async ({ page }) => {
    await page.goto('/');
    const bg = await page.evaluate(() =>
      getComputedStyle(document.body).backgroundColor,
    );
    expect(bg).toBe('rgb(11, 15, 25)');
  });

  test('theme-color meta still resolves', async ({ page }) => {
    await page.goto('/');
    const themeColor = await page.locator('meta[name="theme-color"]').first().getAttribute('content');
    expect(themeColor).toBe('#0A84FF');
  });
});
