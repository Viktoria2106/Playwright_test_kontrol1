const { test, expect } = require('@playwright/test')

test('Тестирование поиска и навигации в Википедии', async ({ page }) => {
  await page.goto('https://ru.wikipedia.org')
  await expect(page.getByText('Добро пожаловать в Википедию')).toBeVisible()

  const searchInput = page.locator('input[name="search"]').first()
  await searchInput.fill('JavaScript')
  await page.keyboard.press('Enter')

  const heading = page.locator('#firstHeading')
  await expect(heading).toBeVisible()
  await expect(heading).toContainText('JavaScript')

  const linkInArticle = page.locator('#mw-content-text p a').first()
  await linkInArticle.click();

  await expect(page.locator('#firstHeading')).toBeVisible()
})