import XPathSelector from './xpath-selector';
import { Selector } from 'testcafe';
fixture('Getting started').
    page("https://trytestingthis.netlify.app/")

test.skip('2nd test', async t => {
    // const serachBox=XPathSelector('//textarea[@title="Search"]');
    await t
        // .click(XPathSelector('//a[@href="/contact"]'))
        // .wait(3000)
        // .click(XPathSelector('//a[@href="/"]'))
        // .wait(3000)
        // .typeText(XPathSelector('//input[@name="fname"]'),'mahesh')
        // .wait(3000)
        // .doubleClick(XPathSelector('//button[@ondblclick="myFunction()"]'))
        // .wait(2000)
        // .click(XPathSelector('//input[@name="lname"]'))
        // .rightClick(XPathSelector('//input[@name="lname"]'))
        // .wait(5000)
        // .hover(XPathSelector('/html/body/div[3]/div[1]/div[2]'))
        // .wait(3000)
        // .dragToElement(XPathSelector('//*[@id="drag1"]'),XPathSelector('//*[@id="div1"]'))
        // .wait(3000)
        // .scrollIntoView(XPathSelector('(//a[contains(text(),"here")])[1]'))
        // .wait(2000)
        // .setNativeDialogHandler(() => true)
        // .click(XPathSelector('//button[@onclick="alertfunction()"]'))
        // .wait(10000)

        .takeScreenshot('screenshot.png')
        .wait(2000)
})

fixture.only('Action demo test2').
    page("https://trytestingthis.netlify.app/")

test.skip('Testcafe action 2', async t => {
    const dropDown = Selector(XPathSelector('//select[@id="option"]'))
    const dropDownOptions = dropDown.find('option')
    await t
        // .click(dropDown)
        // .click(dropDownOptions.withText('Option 2'))
        // .expect(dropDown.value).eql('option 2')


        // .setFilesToUpload(XPathSelector('//input[@id="myfile"]'),'./screenshots/screenshot.png')
        // .wait(3000)

        // .resizeWindow(800,600)
        // .wait(3000)
        .maximizeWindow()
        .wait(3000)
        // .scrollBy(0,500)
        // .wait(3000)
        // .scrollBy(0,500)
        // .wait(3000)
        // .expect(Selector(XPathSelector('//a[@class="button bar-item" and text()="Home"] ')).innerText).eql('Home')
        // .wait(3000)
        .navigateTo("https://www.google.com/")
        .wait(3000)

    
})