const { expect } = require('chai')
const { remote } = require('webdriverio');
const setupDriver = require('../utils/setupDriver')
const InventoryPage = require('../pageobjects/InventoryPage')
const CartPage = require('../pageobjects/CartPage')

describe.only('Inventory Page Test describe', function () {
	/** @type {WebdriverIO.Browser} */ let driver
    /** @type {InventoryPage} */ let inventoryPage
	/** @type {CartPage} */ let cartPage

	before(async function () {
		driver = await setupDriver()
        inventoryPage = new InventoryPage(driver)
		cartPage = new CartPage(driver)
		await driver.pause(5000)
	})

	 it('check add to cart', async function () {
		await inventoryPage.toDescrib()
		await inventoryPage.scroll()
		await inventoryPage.Addcart()
		await cartPage.tocart()
		await driver.pause(2000)
		const Name = await cartPage.Label()
		expect(Name).to.include('Sauce Labs Backpack')
	})
	it('check botton + ', async function () {
		await cartPage.Buttonplus()
		const Plus = await cartPage.Amounts()
		expect(Plus).to.be.include('2')
	})
	it('check botton - ', async function () {
		await cartPage.Buttonmin()
		const Min = await cartPage.Amounts()
		expect(Min).to.be.include('1')
	})

	it('check gRemove', async function () {
		await cartPage.Remove()
		const Result = await cartPage.ResultRem()
		expect(Result).to.be.include('Oh no! Your cart is empty.')
	})

	after(async function () {
		await driver.pause(2000)
		await driver.deleteSession()
	})

	
})