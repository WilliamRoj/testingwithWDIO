import App from '../../page-objects/App'
import RenderingCards from '../../page-objects/pages/renderingCards'
import NavBar from '../../page-objects/pages/navBar'
import HeartApr from '../../page-objects/pages/heartApr'
import SocialMedia from '../../page-objects/pages/socialMedia'

describe('Smoke test - loading website', () => {
    it('load website', () => {
        // await browser.url('https://www.afloresconstruction.com')
        App.openHomepage()
        RenderingCards.cardIsVisible()
    })

    it('Click on 0% APR verify redericts to Heart', () => {
        HeartApr.selectHeart()
    })

    it('Click on Nav bar link', () => {
        App.openHomepage()
        NavBar.selectLink()
    })

    it('Click on FB link', () => {
        App.openHomepage()
        SocialMedia.selectSocialMedia()
    })

    
})