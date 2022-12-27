import OneOfMillionPage from '../pageobjects/OneOfMillionPage.js'

describe('Visual regression test', async () => {

    before(async () => {
        await OneOfMillionPage.openAndAcceptDisclaimer()
    })

    it('check intro section', async () => {
        let query = 'section[data-autoid="ModelIntro"]'
        await browser.execute(`document.querySelector('${query}').scrollIntoView()`)
        expect(await browser.checkElement(await browser.$(query), 'IntroSection')).toBeLessThan(1)
    })

    it('check features section', async () => {
        // browser.scroll(0, 1200)
        let query = 'div[data-autoid="IconCallouts-1"]'
        await browser.execute(`document.querySelector('${query}').scrollIntoView()`)
        await browser.pause(1000)
        // This not working
        // expect(await browser.checkElement(await browser.$(query), 'FeatureSection')).toBeLessThan(1)
        expect(await browser.checkScreen('FeatureSection')).toBeLessThan(1)
    })

    it('check decades of innovation section', async () => {
        let query = 'div[data-autoid="ImageWithText-1"]'
        await browser.execute(`document.querySelector('${query}').scrollIntoView()`)
        await browser.pause(1000)
        // This not working
        // expect(await browser.checkElement(await browser.$(query), 'FeatureSection')).toBeLessThan(1)
        expect(await browser.checkScreen('InnovationSection')).toBeLessThan(1)
    })
})