const { remote } = require('webdriverio');

//Define the configuration for the webdriver test
const config = {
  hostname: 'hub.screener.io',
  port: 443,
  protocol: 'https',
  path: '/wd/hub',
  capabilities: {
    browserName: 'chrome',
    browserVersion: '87.0',
    'sauce:options': {
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
    },
    'sauce:visual': {
      apiKey: process.env.SCREENER_API_KEY,
      projectName: 'sauce-demos/swag-labs',
      viewportSize: '1280x1024',
    },
  },
};

async function simpleTest() {
  const browser = await remote(config);

  //Navigate to the test site
  await browser.url('http://saucedemo.com');

  //Initialize the visual test
  await browser.execute('/*@visual.init*/', 'Swag Labs');

  await browser.execute('/*@visual.snapshot*/', 'Login');

  //Log in
  const usernameInput = await browser.$('#user-name');
  const passwordInput = await browser.$('#password');
  const loginBtn = await browser.$('#login-button');
  await usernameInput.setValue('standard_user');
  await passwordInput.setValue('secret_sauce');
  await loginBtn.click();
  const inventoryElm = await browser.$('#inventory_container');
  await inventoryElm.waitForDisplayed();
  await browser.execute('/*@visual.snapshot*/', 'Products');

  //End visual test and get result
  const result = await browser.execute('/*@visual.end*/');

  await browser.deleteSession();

  //Check if tests passed
  if (!result.passed) {
    throw new Error(result.message);
  }

  return 'Test Successful';
}

simpleTest()
  .then((result) => console.log(result))
  .catch((e) => console.error(e));
