import AmericasBest from '../../page-objects/AmericasBest'

describe('Smoke test - loading website', () => {
    it('load website', () => {
        //  browser.url('https://www.afloresconstruction.com')
        AmericasBest.openHomepage()
    })

})