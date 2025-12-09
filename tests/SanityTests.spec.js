import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js'
import {InventoryPage} from '../pages/InventoryPage.js'
import {STANDARD_USER, VALID_PASSWORD} from '../data/LoginData.js'

test.describe('Sanity- Purchasing products', () => {
  test('Full purchase flow with standard_user', async ({page}) => {
  const loginPage = new LoginPage(page)
  const inventory = new InventoryPage(page)

    //  התחברות עם המשתמש standard_user
  await loginPage.open()
  await loginPage.login(STANDARD_USER, VALID_PASSWORD)

    //  אימות URL וכותרת של inventory
  await inventory.assertInventoryPage()

    //  הוספת 2 מוצרים ואימות שהעגלה מציגה 2
  await inventory.addTwoProducts()

    //  מעבר לעגלת הקניות ואימות (URL, כותרת, כמות פריטים)
  await inventory.goToCart()

    //  Checkout Step One – מילוי פרטים ומעבר לעמוד הבא
  await inventory.checkoutStepOne()

    //  Checkout Step Two – אימות כותרת והשלמת ההזמנה
  await inventory.checkoutStepTwo()

    //  Checkout Complete – אימות סיום ותודה
  await inventory.assertCheckoutComplete()
  })

})
