const { expect } = require('chai')
const { remote } = require('webdriverio');
const setupDriver = require('../utils/setupDriver')
const InventoryPageClass = require('../pageobjects/InventoryPage')


describe('Inventory Page Test', function () {
	/** @type {WebdriverIO.Browser} */ let driver
    /** @type {InventoryPageClass} */ let inventoryPage

	before(async function () {
		driver = await setupDriver()
        inventoryPage = new InventoryPageClass(driver)
		await driver.pause(5000)
	})

	it('sort by price ascending', async function () {
		
		await inventoryPage.ascendingPrice()

		const Price1 = await inventoryPage.getprice1()
        const Price2 = await inventoryPage.getprice2()
		// console.log('test', Price1 ,Price2)
		expect(Price1).to.satisfy(num => num < Price2)
	})

    it('sort by price Descending', async function () {
		
		await inventoryPage.descendingPrice()

		const Price1 = await inventoryPage.getprice1()
        const Price2 = await inventoryPage.getprice2()
		expect(Price1).to.satisfy(num => num > Price2)
	})

    it('sort by name ascending', async function () {
		
		await inventoryPage.ascendingName()
		

        const Name1 = await inventoryPage.getname1()
        const Name2 = await inventoryPage.getname2()
		expect(Name1).to.satisfy(x => x < Name2)
		await driver.pause(2000)
	})

	it('sort by name Descending', async function () {
		
		await inventoryPage.descendingName()
	
        const Name1 = await inventoryPage.getname1()
        const Name2 = await inventoryPage.getname2()
		expect(Name1).to.satisfy(x => x > Name2)
	})

	after(async function () {
		await driver.pause(2000)
		await driver.deleteSession()
	})
})