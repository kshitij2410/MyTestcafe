import XPathSelector from '../tests/xpath-selector';
import { Selector } from 'testcafe';
import { t } from 'testcafe';

export default class Utils {
    constructor() {}

    async clickOnDropDownButton(locator) {

        if (locator.tartsWith("//")) {
            const dropDown = Selector(XPathSelector('${locator}'))
        } else {
            const dropDown = Selector('${locator}');
        }
        const dropDownOptions = dropDown.find('option')
    }

    async selectDropDownOption(locator, type, value) {
        let dropDown;
        if (locator.startsWith("//")) {
             dropDown = Selector(XPathSelector(locator))
        } else {
             dropDown = Selector(locator);
        }
        const dropDownOptions = dropDown.find('option')
        await t.click(dropDown)
        switch (type) {
            case "text":
                click(dropDownOptions.withText(value))
                break;
                case "value":
                click(dropDownOptions.with(value))
                break;
        }
    }




}

//export default new Utils();