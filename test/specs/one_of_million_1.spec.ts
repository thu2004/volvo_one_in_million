import OneOfMillionPage from '../pageobjects/OneOfMillionPage.js'

describe('abc', () => {

    before(async () => {
        await OneOfMillionPage.openAndAcceptDisclaimer()
    })

    it('should display welcome section', async () => {
        await expect(OneOfMillionPage.introHeader).toBeDisplayed()
    })

    describe('Intro video', () => {
        it('the "watch the story" button is showed', async () => {
            await expect(OneOfMillionPage.introVideoWatchButton).toBeDisplayed()
        })

        it('the pause button is showed when load', async () => {
            const video = await OneOfMillionPage.introVideo
            await OneOfMillionPage.scrollIntoView(video)
            const button = await video.parent.$('//button[@aria-label="pause"]')
            await expect(button).toBeDisplayed()
        })

        it('when click on pause button, the play button is showed', async () => {
            const video = await OneOfMillionPage.introVideo
            await OneOfMillionPage.scrollIntoView(video)
            const pauseButton = await video.parent.$('//button[@aria-label="pause"]')
            await pauseButton.click()
            const playButton = await video.parent.$('//button[@aria-label="play"]')
            await expect(playButton).toBeDisplayed()
        })

        it('when click on the button and the youtube video is showed', async () => {
            const video = await OneOfMillionPage.introVideo
            const button = await OneOfMillionPage.introVideoWatchButton
            await OneOfMillionPage.scrollIntoView(video)
            await button.click()
            await expect(OneOfMillionPage.introYoutubeVideo).toHaveAttributeContaining('src', "www.youtube.com")
            await browser.pause(3000)
        })
    })

    it('should have 4 testimony with working video', async () => {
        let testimonials = await OneOfMillionPage.testimonials
        expect(testimonials).toBeElementsArrayOfSize(4)

        for (let testimonial of testimonials) {
            await OneOfMillionPage.scrollIntoView(testimonial)
            await browser.pause(1000)

            let button = await testimonial.$('button')
            await button.click()
            await browser.pause(1000)

            let vv = await testimonial.$('video source')
            expect(vv).toHaveAttributeContaining('src', ".mp4")
            await browser.pause(1000)

            let video = await testimonial.$('video')
            await video.click()
        }
    })
})