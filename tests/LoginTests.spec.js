// test login of first user
import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js'
import { POSITIVE_USERS, VALID_PASSWORD } from '../data/LoginData.js'


test.describe('Login first user only', () => {
  test('login with standard_user', async ({ page }) => {
    const loginPage = new LoginPage(page)
 
    await loginPage.openLoginPage()
    await loginPage.login('standard_user', 'secret_sauce')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page.locator('[data-test="title"]')).toHaveText('Products')
  })
})

// test login of all users
test.describe('Login all users', () => {
  for (const user of POSITIVE_USERS) {
    test(`login with: ${user}`, async ({ page }) => {
      const loginPage = new LoginPage(page)

      await loginPage.openLoginPage()
      await loginPage.login(user, VALID_PASSWORD)
      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
      await expect(page.locator('[data-test="title"]')).toHaveText('Products')
    })
  }
}) 