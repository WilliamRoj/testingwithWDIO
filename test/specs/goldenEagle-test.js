import Home from '../../page-objects/Home'

describe('Smoke test - loading website', () => {
    it('load website', () => {
        //  browser.url('https://www.afloresconstruction.com')
        Home.openHomepage()
    })

})