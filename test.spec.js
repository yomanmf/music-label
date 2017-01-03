'use strict';

const assert = require('assert');
const webdriver = require('webdriverio');

describe('test', function() {
    before(function () {
        const browser = webdriver.remote({
            desiredCapabilities: {
            browserName: 'chrome',
                port: 7055
            }
        });

        this.browser = browser
            .init()
            .url('https://music.yandex.ru/label/14')

        return this.browser;
    });

    it('should show header', function() {
        return this.browser.isVisible('.head__user').then(res=>{
            console.log(res);
            assert(res, false, 'The header is not visible'); //Почему не падает?
        });
    });

    it('should show title', function() {
        return this.browser.waitForVisible('.page-label__title');
    });

    it('should show correct title', function() {
        return this.browser.getText('.page-label__title').then(res =>{
            assert(res, 'Young Turks', 'The title is wrong');
        });
    });

    it('should show releases as the current tab', function() {
        return this.browser.isVisible('.tabs__tab_current').then(res=>{
            assert(res, true, 'The current tab is not releasses tab');
        });
    });

    it('shold show artists as a second tab', function() {
        return this.browser.isVisible('.tabs__tab').then(res=>{
            console.log(res); // Почему [ true, true ] ???
            assert(res, true, 'Artists tab is not the second tab on the page');
        });
    })



 /*   it('should use black color', function () {
        return this.browser.getCssProperty('.page-label__title', 'color').then(res =>{
                console.log(res);
        });
    });
*/

    after(function () {
        return this.browser.end();
    });

});