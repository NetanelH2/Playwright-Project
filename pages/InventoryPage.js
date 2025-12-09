// pages/InventoryPage.js
import {expect} from '@playwright/test'
import { 
  INVENTORY_URL, 
  CART_URL, 
  CHECKOUT_1_URL, 
  CHECKOUT_2_URL,
  COMPLETE_URL,
  INVENTORY_TITLE,
  CART_TITLE,
  CHECKOUT_1_TITLE,
  CHECKOUT_2_TITLE,
  COMPLETE_TITLE
} from '../data/SanityData.js'

export class InventoryPage {
  // Locators
  title = '[data-test="title"]'
  addBackpackButton = '[data-test="add-to-cart-sauce-labs-backpack"]'
  addBikeLightButton = '[data-test="add-to-cart-sauce-labs-bike-light"]'
  cartLink = '.shopping_cart_link'
  cartBadge = '.shopping_cart_badge'
  checkoutButton = '[data-test="checkout"]'
  firstNameField = '[data-test="firstName"]'
  lastNameField = '[data-test="lastName"]'
  postalCodeField = '[data-test="postalCode"]'
  continueButton = '[data-test="continue"]'
  finishButton = '[data-test="finish"]'
  completeHeader = '[data-test="complete-header"]'

  constructor(page) {
    this.page = page
  }

  // Actions & Methods
  async assertInventoryPage() {
    await expect(this.page).toHaveURL(INVENTORY_URL)
    await expect(this.page.locator(this.title)).toHaveText(INVENTORY_TITLE)
  }

  async addTwoProducts() {
    await this.page.locator(this.addBackpackButton).click()
    await this.page.locator(this.addBikeLightButton).click()
    await expect(this.page.locator(this.cartBadge)).toHaveText('2')
  }

  async goToCart() {
    await this.page.locator(this.cartLink).click()
    await expect(this.page).toHaveURL(CART_URL)
    await expect(this.page.locator(this.title)).toHaveText(CART_TITLE)
    await expect(this.page.locator(this.cartBadge)).toHaveText('2')
  }

  async checkoutStepOne() {
    await this.page.locator(this.checkoutButton).click()
    await expect(this.page).toHaveURL(CHECKOUT_1_URL)
    await expect(this.page.locator(this.title)).toHaveText(CHECKOUT_1_TITLE)
    await this.page.locator(this.firstNameField).fill('Lemlem Noy')
    await this.page.locator(this.lastNameField).fill('Yitzhak')
    await this.page.locator(this.postalCodeField).fill('12345')
    await this.page.locator(this.continueButton).click()
  }

  async checkoutStepTwo() {
    await expect(this.page).toHaveURL(CHECKOUT_2_URL)
    await expect(this.page.locator(this.title)).toHaveText(CHECKOUT_2_TITLE)
    await this.page.locator(this.finishButton).click()
  }

  async assertCheckoutComplete() {
    await expect(this.page).toHaveURL(COMPLETE_URL)
    await expect(this.page.locator(this.title)).toHaveText(COMPLETE_TITLE)
    await expect(this.page.locator(this.completeHeader))
      .toHaveText('Thank you for your order!')
  }
}
