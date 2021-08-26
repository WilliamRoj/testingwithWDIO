import ForwardHomePage from '../../page-objects/ForwardHomePage'

describe('Smoke test - loading website', () => {
    it('load website', () => {
        //  browser.url('https://www.afloresconstruction.com')
        ForwardHomePage.openHomepage()
    })

})