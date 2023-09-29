const { remote } = require("webdriverio")

class CartPage {
	// initialization
	constructor (driver) {
		/** @type {WebdriverIO.Browser} */
		this.driver = driver
	}

	// element locators
	get cart()  { return this.driver.$('~cart badge') }
    get label() {return this.driver.$('~product label')}
	get butplus()  { return this.driver.$('~counter plus button') }
	get butmin()  { return this.driver.$('~counter minus button') }
	get amount()  { return this.driver.$('//android.view.ViewGroup[@content-desc="counter amount"]/android.widget.TextView') }
	get Remov()  { return this.driver.$('~remove item') }
	get Res()	{ return this.driver.$('//android.widget.ScrollView[@content-desc="cart screen"]/android.view.ViewGroup/android.widget.TextView') }
    
    // page actions
	async tocart () {
        await this.cart.click()
	}
    async Label () {
        return await this.label.getText()
	}

	async Buttonplus () {
        await this.butplus.click()
		await this.driver.pause(2000)
	}
	async Buttonmin () {
        await this.butmin.click()
		await this.driver.pause(2000)
	}
	async Amounts () {
        return await this.amount.getText()
    }
	async Remove () {
        await this.Remov.click()
		await this.driver.pause(2000)
	}
	async ResultRem () {
        return await this.Res.getText()
    }
}

module.exports = CartPage
