import {expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js'
import {INVENTORY_URL, INVENTORY_TITLE} from '../data/LoginData.js'

export async function loginAndVerify(page, username, password) {
  const loginPage = new LoginPage(page)

  // פתיחת העמוד וביצוע לוגין
  await loginPage.openLoginPage()
  await loginPage.login(username, password)

  // אימות URL וכותרת
  await expect(page).toHaveURL(INVENTORY_URL)
  await expect(page.locator('[data-test="title"]')).toHaveText(INVENTORY_TITLE)
}
