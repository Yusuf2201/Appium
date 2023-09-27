const { remote } = require('webdriverio')
const path = require('path')
const { expect } = require('chai');

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
    
    describe("Test Positif Login", () => {
    it('coba login dengan username dan password yang benar ', async function () {
		const driver = await remote(options)
        await driver.pause(4000)
	    await driver.$('~Login').click()
        await driver.pause(4000)
		await loginPage.loginProcess('yusuf@gmail.com', '12345678')
        await driver.pause(8000)
		const Succes = await driver.$('id=android:id/button1').getText()
		expect(Succes).to.be.equal('Succes')
        await driver.pause(8000)
	    await driver.deleteSession()
	})
   
  
    })
//     describe("Test Negatif Login", () => {
// 	it('coba login dengan username yang benar dan password salah', async function () {
		
// 	})
//     it('coba login dengan username yang salah dan password benar', async function () {
	
// 	})
     
//     it('coba login dengan username yang salah dan password salah' , async function () {
		
// 	})
//    it('coba login dengan username yang kosong dan password benar', async function () {

// 	})
//     it('coba login dengan username yang benar dan password kosong', async function () {

//     })
//   it('coba login dengan username yang kosong dan password kosong', async function () {
	
//     })
// })

    