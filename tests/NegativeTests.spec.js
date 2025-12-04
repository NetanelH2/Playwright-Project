import {test} from '@playwright/test'
import {loginAndAssertError} from '../helpers/NegativeLoginHelper.js'
import {
  LOCKED_OUT_CASE,
  OTHER_NEGATIVE_CASES,
} from '../data/NegativeLoginData.js'


test('Negative login - locked_out_user only', async ({ page }) => {
  await loginAndAssertError(
    page,
    LOCKED_OUT_CASE.username,
    LOCKED_OUT_CASE.password,
    LOCKED_OUT_CASE.expectedError
  )
})


test.describe('Negative login - additional scenarios', () => {
  for (const scenario of OTHER_NEGATIVE_CASES) {
    test(scenario.name, async ({ page }) => {
      await loginAndAssertError(
        page,
        scenario.username,
        scenario.password,
        scenario.expectedError
      )
    })
  }
})
