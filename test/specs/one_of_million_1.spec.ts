import OneOfMillionPage from '../pageobjects/OneOfMillionPage.js'

describe('abc', () => {

    before(async () => {
        await OneOfMillionPage.openAndAcceptDisclaimer()
    })

    it('should display welcome section', async () => {
        expect(OneOfMillionPage.welcome.isExisting)
    })

    describe('Intro video', () => {
        it('the "watch the story" button is showed', async () => {
            const video = await $('#Video-1')
            const button = await video.$('button=watch the story')
            expect(button).toBeDisplayed()
        })

        it('the pause button is showed when load', async () => {
            const video = await $('#Video-1 video')
            // video.scrollIntoView()
            browser.scroll(0, -5500)
            const button = await video.parent.$('button')
            browser.execute(function (elem: any) {
                elem.focus();
            }, button);
            expect(button).toBeDisplayed()
        })

        it('when click on pause button, the play button is showed', async () => {
            const video = await $('#Video-1 video')
            const button = await $('#Video-1 button button') //  video.parent.$('button')
            browser.execute(function (elem: any) {
                elem.focus();
            }, button);
            await button.click()
            const playButton = await video.parent.$('button=play')
            expect(playButton).toBeDisplayed()
        })

        it('when click on the button and the youtube video is showed', async () => {
            const video = await $('#Video-1')
            const button = await video.$('button=watch the story')
            browser.execute(function (elem: any) {
                elem.focus();
            }, button);
            await button.click()
            const frame = await video.$('iframe')
            expect(frame).toHaveAttributeContaining('src', "www.youtube.com")
            await browser.pause(5000)
        })
    })

    it('should have 4 testimony with working video', async () => {
        await browser.scroll(0, 2000)
        await browser.pause(1000)
        let testimonials = await $$('[data-autoid="videoTestimonials:container"]')
        expect(testimonials).toBeElementsArrayOfSize(4)

        for (let testimonial of testimonials) {
            let button = await testimonial.$('button')
            await browser.execute(function (elem: any) {
                elem.focus();
            }, button);
            await button.click()
            await browser.pause(1000)
            let vv = await testimonial.$('video source')
            let src = await vv.getAttribute('src')
            // expect(vv).toHaveAttributeContaining('srcxx', "xxx")
            await browser.pause(1000)
            let video = await testimonial.$('video')
            await video.click()
        }
    })
})