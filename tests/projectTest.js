import XPathSelector from './xpath-selector';
import { Selector } from 'testcafe';

fixture('Getting started').
    page("https://trytestingthis.netlify.app/")

test('2nd test', async t => {

    // Selecting dropdown 
    const dropDown = Selector(XPathSelector('//select[@id="option"]'))
    const dropDownOptions = dropDown.find('option')
    await t
    .click(dropDown)
    .click(dropDownOptions.withText('Option 2'))
    // .expect(dropDown.value).eql('option 2')
})