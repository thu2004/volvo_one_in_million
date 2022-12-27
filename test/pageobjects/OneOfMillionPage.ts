import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OneOfMillionPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get introHeader() {
        return $('main #ModelIntro-1 h2');
    }

    public get introVideoWatchButton() {
        return $('button=watch the story')
    }

    public get introVideo() {
        return $('#Video-1 video')
    }

    public get introYoutubeVideo() {
        return $('#Video-1 iframe')
    }

    public get testimonials() {
        return $$('[data-autoid="videoTestimonials:container"]')
    }

    public async open() {
        return super.open('intl/v/car-safety/a-million-more');
    }

    public async openAndAcceptDisclaimer() {
        // The page under test is protected with antibot and block any
        // attempt to access the page with webdriver.
        //
        // I manage to automate the page by removing the navigator.webdriver
        // property and pause a second before accepting the disclaimer
        // the drawback is it only work with chrome driver, since the sendCommand
        // only exist in chrome driver

        await browser.sendCommand("Page.addScriptToEvaluateOnNewDocument",
            { "source": "delete Object.getPrototypeOf(navigator).webdriver" })

        await this.open()
        await browser.pause(1000)

        // accept the disclaimer dialog box
        const alertDialogs = await $$('[role=alertdialog]')
        if (alertDialogs.length > 0) {
            const button = await alertDialogs[0].$('button=Accept')
            await button.click()
            await browser.pause(1000)
            const dlgs = await $$('[role=alertdialog]')
            expect(dlgs).toBeElementsArrayOfSize(0)
        }
    }

    public async scrollIntoView(element) {
        // I found that the element scrollIntoView does not work correctly
        // here is a simple workaround
        return browser.execute(`document.querySelector('${element.selector}').scrollIntoView()`)
    }
}

export default new OneOfMillionPage();