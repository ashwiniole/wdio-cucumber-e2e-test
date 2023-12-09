import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Login to the inventory web application$/, async function () {
  /**1. Launch the browser */
  await browser.url("https://www.saucedemo.com/");
  await browser.pause(2000);
  await browser.maximizeWindow();

  /**2. Enter the credentials and login to inventory app */
  try {
    await (await $(`#uer-name`)).setValue("standard_user");
    await (await $(`#password`)).setValue("secret_sauce");
    await (await $(`#login-button`)).click();
  } catch (err) {
    console.log(`Error in the first login. Retrying.....`);
    await browser.refresh()
    await browser.pause()
    await (await $(`#user-name`)).setValue("standard_user");
    await (await $(`#password`)).setValue("secret_sauce");
    await (await $(`#login-button`)).click();
  }

  //Login with another user
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
});
