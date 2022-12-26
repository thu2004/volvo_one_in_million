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
}

export default new OneOfMillionPage();