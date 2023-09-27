const { remote } = require('webdriverio')
const path = require('path')

const options = {
	hostname: '0.0.0.0',
	port: 4723,
	logLevel: 'debug',
	capabilities: {
		'platformName': 'Android',
		'appium:automationName': 'UIAutomator2',
		'appium:deviceName': 'emulator-5554',
		'appium:app': path.join(process.cwd(), 'apk/dummy.apk'),
		'appium:appActivity': '.MainActivity'
	}
}

async function run () {
	const driver = await remote(options)
    await driver.pause(4000)
    // const Login = await $('~Login')
    // await Login.waitForDisplayed({timeout: 5000}) 
	await driver.$('~Login').click()
    await driver.pause(4000)
    await driver.$('~input-email').setValue('yusuf@getMail.com')
    await driver.$('~input-password').setValue('12345678')
    await driver.$('//*[@content-desc="button-LOGIN"]').click()
    
	
// // element locators
// usernameEl = By.css('#user-name')
// passwordEl = By.css('#password')
// submitEl = By.css('#login-button')
// errorEl = By.css('h3[data-test="error"]')

// // page action
// async openPage () {
//     await this.openUrl('/')
// }
// /**
//  * fungsi ini digunakan untuk melakukan login
//  * @param {string} username
//  * @param {string} password
//  */

    // async loginProcess (username, password) {
	// 	await this.driver.findElement(this.usernameEl).sendKeys(username)
	// 	await this.driver.findElement(this.passwordEl).sendKeys(password)
	// 	await this.driver.findElement(this.submitEl).click()
    // }
	// await driver.touchPerform([
	// 	{ action: 'press', options: { x: 317, y: 643 } },
	// 	{ action: 'wait', options: { ms: 500 } },
	// 	{ action: 'moveTo', options: { x: 317, y: 127 } },
	// 	{ action: 'release' },
	// ])

	await driver.pause(8000)
	await driver.deleteSession()
}
run()

// module.exports = appium;