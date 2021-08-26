import Sogo from '../../page-objects/Sogo'

describe('Smoke test - loading website', () => {
    it('load website', () => {
        //  browser.url('https://www.afloresconstruction.com')
        Sogo.openHomepage()
    })

})