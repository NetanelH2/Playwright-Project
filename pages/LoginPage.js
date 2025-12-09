import {expect} from "@playwright/test"

export class LoginPage {
    // Locators
    userNameField = '[data-test="username"]'
    userPasswordField = '[data-test="password"]'
    loginButton = '[data-test="login-button"]'
    errorMessage = '[data-test="error"]'

    constructor(page) {
        this.page = page
    }

    // Actions & Methods
    async open(){
        await this.page.goto('https://www.saucedemo.com/')
        await expect(this.page.locator('[class="login_logo"]')).toHaveText( 'Swag Labs')
    }

    async login(username, password) {
        await this.page.locator(this.userNameField).fill(username)
        await this.page.locator(this.userPasswordField).fill(password)
        await this.page.locator(this.loginButton).click()
    }
    
    async expectError(message) {       
    await expect(this.page.locator(this.errorMessage)).toHaveText(message)
  }
}


