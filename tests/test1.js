import XPathSelector from './xpath-selector';
fixture('Getting started').
    page("https://google.com")

test('1st test', async t => {
    // const serachBox=XPathSelector('//textarea[@title="Search"]');
    await t
        .typeText(XPathSelector('//textarea[@title="Search"]'), 'Learning Testcafe')
        .click(XPathSelector('(//input[@role="button"])[1]'))
        .wait(3000)
})