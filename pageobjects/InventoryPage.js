const { remote } = require("webdriverio")

class InventoryPage {
	// initialization
	constructor (driver) {
		/** @type {WebdriverIO.Browser} */
		this.driver = driver
	}

	// element locators
	get sort()  { return this.driver.$('~sort button') }
	get AscPri() { return this.driver.$('//android.view.ViewGroup[@content-desc="priceAsc"]') }
    get DescPri() { return this.driver.$('//android.view.ViewGroup[@content-desc="priceDesc"]') }
    get AscName() { return this.driver.$('//android.view.ViewGroup[@content-desc="nameAsc"]') }
    get DescName() { return this.driver.$('//android.view.ViewGroup[@content-desc="nameDesc"]') }
    get Prc1() { return this.driver.$('(//android.widget.TextView[@content-desc="store item price"])[1]') }
    get Prc2() { return this.driver.$('(//android.widget.TextView[@content-desc="store item price"])[2]')}
    get Nm1() { return this.driver.$('(//android.widget.TextView[@content-desc="store item text"])[1]') }
    get Nm2() { return this.driver.$('(//android.widget.TextView[@content-desc="store item text"])[2]') }
    get Disk() {return this.driver.$('(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]') }
    get Description()  { return this.driver.$('~product description')}
    get rating2 () { return this.driver.$('~review star 2') }
    get desrating () { return this.driver.$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView') }
	get min()  { return this.driver.$('~counter minus button') }
    get plus()  { return this.driver.$('~counter plus button') }
    get amount()  { return this.driver.$('//android.view.ViewGroup[@content-desc="counter amount"]/android.widget.TextView') }
    get add()  { return this.driver.$('~Add To Cart button') }
    

    // page actions
	async sortbutton () {
        await this.sort.click()
	}
	async ascendingPrice () {
      await this.sortbutton()
      await this.driver.pause(2000)
      await this.AscPri.click()
      await this.driver.pause(2000)
	}
  
    async descendingPrice () {
        await this.sortbutton()
        await this.driver.pause(2000)
        await this.DescPri.click()  
        await this.driver.pause(2000)  
    }
    async ascendingName () {
        await this.sortbutton()
        await this.driver.pause(2000)
        await this.AscName.click()
        await this.driver.pause(2000)
    }
    
    async descendingName () {
        await this.sortbutton()
        await this.driver.pause(2000)
        await this.DescName.click() 
        await this.driver.pause(2000)
    }
    async getprice1 () {
        return await this.Prc1.getText()
    }
    async getprice2 () {
        return await this.Prc2.getText()
    }
    async getname1 () {
        return await this.Nm1.getText()
    }
    async getname2 () {
        return await this.Nm2.getText()
    }
    async toDescrib () {   
        await this.Disk.click()
        await this.driver.pause(2000)
    }
    async scroll () {
    await this.driver.touchPerform([
        { action: "press", options: { x: 329, y: 869 } },
        { action: "wait", options: { ms: 500 } },
        { action: "moveTo", options: { x: 344, y: 204 } },
        { action: "release" },
      ]);
    await this.driver.pause(2000)
    }
    async getDescription () {
        return await this.Description.getText()
    }
    async rating () {
        await this.rating2.click()
        await this.driver.pause(4000)
    }
    async getDesrat () {
        return await this.desrating.getText()
    }
    async Amounts () {
        return await this.amount.getText()
    }
    async getmin () {
        await this.min.click()
        await this.driver.pause(2000)
    }
    async getplus () {
        await this.plus.click()
        await this.driver.pause(2000)
    }
    async Addcart () {
        await this.add.click()
        await this.driver.pause(2000)
    }
}

module.exports = InventoryPage
