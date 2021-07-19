

describe('Smoke test - loading website', () => {
    it('load website', async () => {
        await browser.url('https://www.afloresconstruction.com')
        await expect($('#stickyHeaderSpacer')).toBeExisting()
    })

    it('Click on 0% APR verify redericts to Heart', async () => {
        await browser.url('https://www.afloresconstruction.com')
        await (await $('/html/body/div[2]/div/div/div/div/div/div/div/div[2]/div[4]/div/div/div/div[5]/div/div/div/a/img')).click()
        await expect($('/html/body/div[1]/div/div/div[1]/div[1]/div[1]/h1/div')).toBeExisting()
    })

    it('Click on Nav bar link', async () => {
        await browser.url('https://www.afloresconstruction.com')
        await (await $('/html/body/div[2]/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/div[2]/nav/ul/li[2]')).click()
    })

    it('Click on FB link', async () => {
        await browser.url('https://www.afloresconstruction.com')
        await (await $('//*[@id="1531299188"]/div/div/a[1]/span')).click()
    })

    
})


//*[@id="root"]/header/div[2]/div[2]/a[2]/div/img