import {expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'

export async function loginAndAssertError(page, username, password, expectedError) {
  const loginPage = new LoginPage(page)

  await loginPage.openLoginPage()
  await loginPage.login(username, password)

  const errorLocator = page.locator('[data-test="error"]')

  await expect(errorLocator).toBeVisible()
  await expect(errorLocator).toHaveText(expectedError)
}
