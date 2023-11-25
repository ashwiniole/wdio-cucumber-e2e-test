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
  await browser.url("https://www.amazon.com.au/");
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
  /*let dropDown = await $(`//select/option[@selected="selected"]`)
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
  console.log(`Options array: ${arr}`);*/
  /**
   * 3. Checkbox
   * Actions:
   * 1. Select an option
   * 2. Unselect an option (if selected)
   * 3. Assert if option is selected
   * 4. Select all options
   */
  /*let chkBox = await $(`//form[@id="checkboxes"]/input`);
  if (!(await chkBox.isSelected())) {
    await chkBox.click();
  }

  let chkBox2 = await $(`//form[@id="checkboxes"]/input[2]`);
  let isChecked = await chkBox2.isSelected();
  chai.expect(isChecked).to.be.true;

  let chkBoxArr = await $$(`//form[@id="checkboxes"]/input`);
  for (let i = 0; i < chkBoxArr.length; i++) {
    let ele = chkBoxArr[i];
    if (!(await ele.isSelected())) {
      ele.click();
    }
  }*/
  /**
   * 4. Windows handling
   * Steps:
   * 1. Launch the browser
   * 2. Open another windows
   * 3. Switch to the window based on title
   * 4. Switch back to the main window
   */
  /*let clkHere = $(`=Click Here`)
  let eleSelenium = $(`=Elemental Selenium`)
  await clkHere.click()
  await eleSelenium.click()
  let currentWinTitle = await browser.getTitle();
  let parentWinHandle = await browser.getWindowHandle()
  console.log(`Current title: ${currentWinTitle}`);

  let winHandles = await browser.getWindowHandles()
  for(let i=0;i<winHandles.length;i++){
    console.log(`window handles: ${winHandles[i]}`);
    await browser.switchToWindow(winHandles[i])
    currentWinTitle = await browser.getTitle()
    if(currentWinTitle === "Elemental Selenium | Elemental Selenium"){
      await browser.switchToWindow(winHandles[i])
      let headerText = await (await $(`<h1>`)).getText()
      console.log(`header text: ${headerText}`);
      break
    }
  }

  await browser.switchToWindow(parentWinHandle)
  let headerTextParent = await (await $(`<h3>`)).getText()
  console.log(`header text parent: ${headerTextParent}`); */
  /**
   * 4. Handling alerts
   */
  /*let alert = await $(`button=Click for JS Alert`);
  let confirm = await $(`button=Click for JS Confirm`);
  let prompt = await $(`button=Click for JS Prompt`);
  await alert.click();
  if (await browser.isAlertOpen()) {
    let alertText = await browser.getAlertText();
    console.log(`alert text: ${alertText}`);
    await browser.acceptAlert();
  }
  await confirm.click();
  if (await browser.isAlertOpen()) {
    let confirmText = await browser.getAlertText();
    console.log(`confirm text: ${confirmText}`);
    await browser.dismissAlert();
  }
  await prompt.click();
  if (await browser.isAlertOpen()) {
    await browser.sendAlertText("Hello Ash");
    await browser.acceptAlert();
  }*/
  /**
   * 5. File upload
   */
  /*
  let fileUpload = await $(`#file-upload`);
  await fileUpload.addValue(`${process.cwd()}/data/fileupload/dummy.txt`);
  await (await $(`#file-submit`)).click();
  */
  /*
await $(`=iFrame`).click()
let element = await $(`#mce_0_ifr`) 
await browser.switchToFrame(element)
await (await $(`#tinymce`)).click()
await browser.keys(["Meta","A"])
await browser.pause(2000)
await browser.keys("Delete")
let ele = await $(`#tinymce`)
await ele.addValue(`Typing into the frame...`)
await browser.switchToParentFrame()
*/
  // await browser.debug();
  /**
   * 7. Basic scrolling
   * Methods: (Element methods)
   * 1. scrollIntoView
   */
  
  /**
   * Table interactions
   * 1. Check number of rows and columns
   * 2. Get whole table data
   * 3. Get single row
   * 4. Get single column
   * 5. Get single cell value
   */
  //1. Check number of rows and columns
  /*let rowCount = await $$(`//table[@id="table1"]/tbody/tr`).length
  let colCount = await $$(`//table[@id="table1"]/thead/tr/th`).length
  console.log(`>> Row count: ${rowCount}`);
  chai.expect(rowCount).to.be.equal(4)
  console.log(`>> Column count: ${colCount}`);
  chai.expect(colCount).to.be.equal(6)

  //2. Get whole table data
  let arrObj = []
  for (let i=1;i<=rowCount;i++){
    //key-value pairs
    let personObj = {
      lastName: "",
      firstName: "",
      email: "",
      due: "",
      website: ""
    }
    for(let j=1;j<=colCount;j++){
      let cellVal = await (await $(`//table[@id="table1"]/tbody/tr[${i}]/td[${j}]`)).getText()
      //console.log(`>> Cell value: ${cellVal}`);
      if(j===1) personObj.lastName = cellVal
      if(j===2) personObj.firstName = cellVal
      if(j===3) personObj.email = cellVal
      if(j===4) personObj.due = cellVal
      if(j===5) personObj.website = cellVal
    }
    arrObj.push(personObj)
  }
  console.log(`Whole table: ${JSON.stringify(arrObj)}`);

  //3. Get single row
  let arr = []
  for(let k=1; k<=rowCount;k++){
    let pplObj = {
      lastName: "",
      firstName: "",
      email: "",
      due: "",
      website: ""
    }
    for (let l=1;l<=colCount;l++){
      let celVal = await (await $(`//table[@id="table1"]/tbody/tr[${k}]/td[${l}]`)).getText()
      let firstName = await (await $(`//table[@id="table1"]/tbody/tr[${k}]/td[${2}]`)).getText()
      if(firstName === "Jason"){
        if(l===1) pplObj.lastName = celVal
        if(l===2) pplObj.firstName = celVal
        if(l===3) pplObj.email = celVal
        if(l===4) pplObj.due = celVal
        if(l===5) pplObj.website = celVal
      }
    }
    if(pplObj.firstName){
      arr.push(pplObj)
    }
    
  }
  console.log(`Web table: ${JSON.stringify(arr)}`);

  //4. Get single column
   let singleColArr = []
   for(let m=1;m<=rowCount;m++){
    let cellVal = await (await $(`//table[@id="table1"]/tbody/tr[${m}]/td[${4}]`)).getText()
    singleColArr.push(cellVal)
   }
   console.log(`>> Single col values: ${singleColArr}`);
  
  //5. Get single cell value [based on another call]
  let singleCellValue =[]
  for (let n=1; n<=rowCount;n++){
    let price = await (await $(`//table[@id="table1"]/tbody/tr[${n}]/td[4]`)).getText()
    let lastName = await (await $(`//table[@id="table1"]/tbody/tr[${n}]/td[2]`)).getText()
    
    if(+(price.replace("$",""))>50){
      singleCellValue.push(lastName)
    }
  }
  console.log(`single cell value: ${singleCellValue}`); */

  /**
   * SCROLLING
   * VISIBLE PORTION
   * Windows object:
   * 1. scrollBy
   * Y -> [-]window.innerHeight
   */
  //Scroll down
  await browser.execute(() => {
    window.scrollBy(0,window.innerHeight)
  })
  await browser.pause(1000)
  //scroll top
  await browser.execute(() => {
    window.scrollBy(0,-window.innerHeight)
  })
  await browser.pause(1000)
  console.log(`Scrolled down`);
  
  /**
   * INVISIBLE PORTION
   * windows object:
   * 1. scrollTo
   * Y -> document.body.scrollTop/scrollHeight
   */
  await browser.execute(() => {
    window.scrollTo(0,document.body.scrollHeight)
  })

  await browser.execute(() => {
    window.scrollTo(0, document.body.scrollTop)
  })
});
