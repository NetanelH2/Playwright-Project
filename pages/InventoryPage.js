import {expect} from '@playwright/test'
import {INVENTORY_URL, CART_URL, CHECKOUT_1, CHECKOUT_2, COMPLETE_URL} from '../data/SanityData'

export class InventoryPage {
  constructor(page) {
    this.page = page
  }

  async assertInventoryPage() {
    await expect(this.page).toHaveURL(INVENTORY_URL)
  }

  async addTwoProducts() {
    await this.page.click('[data-test="add-to-cart-sauce-labs-backpack"]')
    await this.page.click('[data-test="add-to-cart-sauce-labs-bike-light"]')
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link')
    await expect(this.page).toHaveURL(CART_URL)
  }

  async checkoutStepOne() {
    await this.page.click('[data-test="checkout"]')
    await expect(this.page).toHaveURL(CHECKOUT_1)
    await this.page.fill('[data-test="firstName"]', 'Lemlem Noy')
    await this.page.fill('[data-test="lastName"]', 'Yitzhak');
    await this.page.fill('[data-test="postalCode"]', '12345');
    await this.page.click('[data-test="continue"]');
  }

  async checkoutStepTwo() {
    await expect(this.page).toHaveURL(CHECKOUT_2)
    await this.page.click('[data-test="finish"]')
  }

  async assertCheckoutComplete() {
    await expect(this.page).toHaveURL(COMPLETE_URL)
  }
}
