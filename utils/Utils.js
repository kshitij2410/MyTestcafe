import XPathSelector from './xpath-selector';
import { Selector } from 'testcafe';
import { t } from 'testcafe';

class Utils {
    constructor() { }

    async clickOnDropDownButton(locator) {

        if (locator.tartsWith("//")) {
            const dropDown = Selector(XPathSelector('${locator}'))
        } else {
            const dropDown = Selector('${locator}');
        }
        const dropDownOptions = dropDown.find('option')
    }

    async selectDropDownOption(locator, type, value) {
        if (locator.tartsWith("//")) {
            const dropDown = Selector(XPathSelector('${locator}'))
        } else {
            const dropDown = Selector('${locator}');
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

export default new Utils();