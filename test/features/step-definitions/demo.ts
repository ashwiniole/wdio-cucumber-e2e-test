import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google browser is launched$/, async function () {
  console.log("Before launching the browser");
  await browser.url("https://www.google.com");
  await browser.pause(6000);
  console.log("After launching the browser");
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`>> searchItem: ${searchItem}`);
  let element = await $(`[type=search]`);
  await element.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the search result$/, async function () {
  let element = await $(`<h3>`);
  element.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(`expectedURL: ${expectedURL}`);
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});
