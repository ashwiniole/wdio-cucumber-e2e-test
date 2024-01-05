import { Given } from "@wdio/cucumber-framework";
import logger from "../../helper/logger.js"
//import chai from "chai";

Given(/^As (a|an) (.*) user I login to the inventory web application$/, async function (prefixTxt, userType, dataTable) {
  logger.info(`${this.testid}: Started to login to sauce demo app ....`)
  console.log(`testid: ${this.testid}`);
  let dt = dataTable.hashes();
  console.log(`The type of dt: ${typeof dt}`);
  console.log(`The type of dt: ${dt.constructor}`);
  console.log(`The value of dt: ${JSON.stringify(dt)}`);
  console.log(`The userType: ${userType}`);
  /**1. Launch the browser */
  //@ts-ignore
  //await browser.url(browser.options.sauceDemoURL);
  await browser.url("https://www.saucedemo.com")
  await browser.pause(2000);
  await browser.maximizeWindow();

  /**2. Enter the credentials and login to inventory app */
  try {
    //await (await $(`#uer-name`)).setValue("standard_user");
    //await (await $(`#password`)).setValue("secret_sauce");
    //await (await $(`#uer-name`)).setValue(process.env.TEST_STD_USERNAME);
    await (await $(`#user-name`)).setValue(dt[0].Username)
    await (await $(`#password`)).setValue(process.env.TEST_STD_PASSWORD);
    await (await $(`#login-button`)).click();
  } catch (err) {
    console.log(`Error in the first login. Retrying.....`);
    await browser.refresh()
    await browser.pause()
    //await (await $(`#user-name`)).setValue("standard_user");
    //await (await $(`#password`)).setValue("secret_sauce");
    await (await $(`#user-name`)).setValue(dt[0].Username)
    await (await $(`#password`)).setValue(process.env.TEST_STD_PASSWORD);
    await (await $(`#login-button`)).click();
  }
  this.appid = "ABC123"
  //Login with another user
  /*
  await browser.pause(2000)
  await browser.reloadSession()
  await browser.url("https://www.saucedemo.com/")
  await (await $(`#user-name`)).setValue(`problem_user`)
  await (await $(`#password`)).setValue(`secret_sauce`)
  await (await $(`#login-button`)).click();

  await browser.back()
  await browser.pause(2000)
  await browser.forward()
  //await browser.debug()
  */
});
