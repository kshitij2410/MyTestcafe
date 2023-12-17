const {Selector} = require('testcafe');

exports.elements = {
userNameBox:function(){
    return Selector('#username').with({ boundTestRun: testController });
},
passwordBox:function(){
    return Selector('#password').with({ boundTestRun: testController });
},
loginButton:function(){
    return Selector('#submit').with({ boundTestRun: testController });
}
}