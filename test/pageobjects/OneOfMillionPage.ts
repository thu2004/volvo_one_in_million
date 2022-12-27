import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OneOfMillionPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get welcome() {
        return $('#welcome');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */
    public async open() {
        return super.open('intl/v/car-safety/a-million-more');
    }

    public async openAndAcceptDisclaimer() {
        await browser.sendCommand("Page.addScriptToEvaluateOnNewDocument",
            { "source": "delete Object.getPrototypeOf(navigator).webdriver" })

        await this.open()
        await browser.pause(1000)

        const alertDialogs = await $$('[role=alertdialog]')
        if (alertDialogs.length > 0) {
            const button = await alertDialogs[0].$('button=Accept')
            await button.click()
            await browser.pause(1000)
            const dlgs = await $$('[role=alertdialog]')
            expect(dlgs).toBeElementsArrayOfSize(0)
        }
    }
}

export default new OneOfMillionPage();