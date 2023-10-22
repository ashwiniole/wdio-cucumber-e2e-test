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

/**
 * Web Interactions
 */
Given(/^The web page is launched$/, async function () {
  await browser.url("/dropdown");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^Perform web interactions$/, async function () {
  /**
   * 1. Input box
   * Actions:
   * 1. Type into input box
   * 2. Clear the field and type or just add value
   * 3. Click and type
   * 4. Slow typing
   */
 // let num = 12345;
  //let strNum = num.toString();
  //let inputBox = await $(`[type="number"]`);
  //await inputBox.setValue(strNum)
  //await inputBox.click();
  //for (let i = 0; i < strNum.length; i++) {
    //let charStr = strNum.charAt(i);
    //await browser.pause(1000);
    //await browser.keys(charStr);
  //}

  /**
   * 2. Dropdown
   * Actions
   * 1. Assert default option is selected
   * 2. Select by attribute, text, index
   * 3. Get a list of options
   */

  let dropDown = await $(`//select/option[@selected="selected"]`)
  let text = await dropDown.getText()
  chai.expect(text).to.equal("Please select an option")

  let dropDownEle = await $(`#dropdown`)
  //await dropDownEle.selectByAttribute("value","2")
  //await dropDownEle.selectByIndex(2)
  await dropDownEle.selectByVisibleText("Option 2")

  let dropDownArr = await $$(`//select/option`)
  let arr = []
  for (let i=0;i<dropDownArr.length;i++){
    let ele = dropDownArr[i]
    let text = await ele.getText()
    arr.push(text)
    console.log(text);
  }
  console.log(`Options array: ${arr}`);
  await browser.debug()
});
