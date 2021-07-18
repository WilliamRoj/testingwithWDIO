describe('Smoke test - loading website', () => {
    it('load website', async () => {
        await browser.url('https://www.afloresconstruction.com/')
        await expect($('#stickyHeaderSpacer')).toBeExisting();
    })
})




