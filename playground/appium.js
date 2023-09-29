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
	await driver.$('~Login').click()
    await driver.pause(4000)
   
}
async function loginProcess (username, password) {
    await driver.$('~input-email').setValue(username)
    await driver.$('~input-password').setValue(password)
    await driver.$('//*[@content-desc="button-LOGIN"]').click()
    }
async function close () {
	await driver.pause(8000)
	await driver.deleteSession()
}

run()
loginProcess()
close ()

// module.exports = appium;