const { remote } = require('webdriverio')
const path = require('path')
const { expect } = require('chai');

const options = {
	hostname: '0.0.0.0',
	port: 4723,
	logLevel: 'error',
	capabilities: {
		'platformName': 'Android',
		'appium:automationName': 'UIAutomator2',
		'appium:deviceName': 'emulator-5554',
		'appium:app': path.join(process.cwd(), 'apk/dummy.apk'),
		'appium:appActivity': '.MainActivity'
	}
}
    
    describe.skip("Test Positif Login", () => {
    it('coba login dengan username dan password yang benar ', async function () {
		const driver = await remote(options)
        await driver.pause(4000)
	    await driver.$('~Login').click()
        await driver.pause(4000)
		await driver.$('~input-email').setValue('yusuf@gmail.com')
        await driver.$('~input-password').setValue('123456789')
        await driver.$('//*[@content-desc="button-LOGIN"]').click()
        await driver.pause(8000)
		const Succes = await driver.$('id=android:id/button1').getText()
		expect(Succes).to.be.equal('OK')
        await driver.pause(8000)
	    await driver.deleteSession()
	});
});

    