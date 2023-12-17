const loginPageObjects = require('../support/pages/loginPageObjects.js');
const {Given, When, Then} = require('cucumber');
const { Selector } = require('testcafe');

         Given('user is on login page', async function () {
            await testController.navigateTo('https://practicetestautomation.com/practice-test-login/');
         });

         When('user enters username {string}', async function (username) {
            const usernameField = loginPageObjects.elements.userNameBox();
            await testController.typeText(usernameField, username);
         });

         When('user enters password {string}', async function (password) {
            const paaswordField = loginPageObjects.elements.passwordBox();
            await testController.typeText(paaswordField, password);
         });


         When('user clicks on submit button', async function () {
            const loginButton = loginPageObjects.elements.loginButton();
            await testController.click(loginButton);
         });


         Then('user will login into application', async function () {
             console.log('user logged in successfully')
         });

