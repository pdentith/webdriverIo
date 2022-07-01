

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TestPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputCalculator () {
        return $('//*[@id="app"]/div/div[1]/form/input')
    }

    get inputTodo () {
        return $('/html/body/div/div/div[2]/div/form/input');
    }

    get listTodo () {
        return $('/html/body/div/div/div[2]/div/ul/li');
    }

    get fullListTodo () {
        return $('/html/body/div/div/div[2]/div/ul');
    }

    get btnCounterInc () {
        return $('/html/body/div/div/div[3]/div/div[3]/button');
    }

    get btnCounterDec () {
        return $('/html/body/div/div/div[3]/div/div[1]/button');
    }

    get displayCounter () {
        return $('/html/body/div/div/div[3]/div/div[2]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async typeCalclator (string) {
        await this.inputCalculator.setValue(string);
    }

    async typeTodo (string) {
        await this.inputTodo.setValue(string);
    }

    async clickInc () {
        await this.btnCounterInc.click();
    }

    async clickDec () {
        await this.btnCounterDec.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new TestPage();
