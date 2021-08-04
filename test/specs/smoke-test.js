import App from '../../page-objects/App'
import RenderingCards from '../../page-objects/pages/renderingCards'
import NavBar from '../../page-objects/pages/navBar'

describe('Smoke test - loading website', () => {
    it('load website', () => {
        // await browser.url('https://www.afloresconstruction.com')
        App.openHomepage()
        RenderingCards.cardIsVisible()
    })

    it('Click on 0% APR verify redericts to Heart', async () => {
        await (await $('/html/body/div[2]/div/div/div/div/div/div/div/div[2]/div[4]/div/div/div/div[5]/div/div/div/a/img')).click()
    })

    it('Click on Nav bar link', () => {
        App.openHomepage()
        NavBar.selectLink()
        // await (await $('/html/body/div[2]/div/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div/div[2]/nav/ul/li[2]')).click()
    })

    it('Click on FB link', async () => {
        App.openHomepage()
        await (await $('//*[@id="1531299188"]/div/div/a[1]/span')).click()
    })

    
})