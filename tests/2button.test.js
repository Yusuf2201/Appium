const { expect } = require('chai')
const { remote } = require('webdriverio');
const setupDriver = require('../utils/setupDriver')
const InventoryPage = require('../pageobjects/InventoryPage')


describe('Inventory Page Test describe', function () {
	/** @type {WebdriverIO.Browser} */ let driver
    /** @type {InventoryPage} */ let inventoryPage

	before(async function () {
		driver = await setupDriver()
        inventoryPage = new InventoryPage(driver)
		await driver.pause(5000)
	})

	 it('check describe', async function () {
		await inventoryPage.toDescrib()
		await inventoryPage.scroll()
		await driver.pause(2000)
		const Describ = await inventoryPage.getDescription()
		expect(Describ).to.include('carry.allTheThings()')
	})

	it('check botton + ', async function () {
		await inventoryPage.getplus()
		const Plus = await inventoryPage.Amounts()
		expect(Plus).to.be.include('2')
	})
	it('check botton - ', async function () {
		await inventoryPage.getmin()
		const Plus = await inventoryPage.Amounts()
		expect(Plus).to.be.include('1')
	})

	it('check give rating', async function () {
		await driver.pause(2000)
		await inventoryPage.rating()
		await driver.pause(2000)
		const Desrating = await inventoryPage.getDesrat()
		expect(Desrating).to.be.include('Thank you for submitting your review!')
	})

	after(async function () {
		await driver.pause(2000)
		await driver.deleteSession()
	})

	
})