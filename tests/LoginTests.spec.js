// test login of first user
import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js'
import {loginValid, loginInvalid} from '../helpers/LoginHelper.js'
import {STANDARD_USER, VALID_PASSWORD, VALID_USERS, INVALID_USERS} from '../data/LoginData.js'

test.describe('Login Suite', () => {
  test('Login with a valid user', async ({page}) => {
  const loginPage = new LoginPage(page)
  await loginPage.open()
  await loginPage.login(STANDARD_USER, VALID_PASSWORD)
  await expect(page.locator('[data-test="title"]')).toHaveText('Products')
    })
})


// test login of valid users
test.describe('Login Suite - Valid Users', () => {
VALID_USERS.forEach(user => {
  test(`Login of valid users: ${user}`, async ({page}) => {
  const loginPage = new LoginPage(page)
  await loginValid(loginPage, user, VALID_PASSWORD)
  await expect(page.locator('[data-test="title"]')).toHaveText('Products')
        })
    })
})


// test login of invalid users
test.describe('Login Suite - Invalid logins', () => {
INVALID_USERS.forEach(({scenario, username, password, expectedError}) => {
  test(`Login of invalid users: ${scenario}`, async ({page}) => {
  const loginPage = new LoginPage(page)
  await loginInvalid(loginPage, username, password, expectedError)
    })
  })
})