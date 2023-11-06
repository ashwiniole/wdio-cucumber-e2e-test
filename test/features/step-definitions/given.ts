import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Login to the inventory web application$/, async function () {
  /**1. Launch the browser */
  await browser.url("https://www.saucedemo.com/v1");
  await browser.pause(6000);
  await browser.maximizeWindow();

  /**2. Enter the credentials and login to inventory app */
  await (await $(`#user-name`)).setValue("standard_user");
  await (await $(`#password`)).setValue("secret_sauce");
  await (await $(`#login-button`)).click();
});
