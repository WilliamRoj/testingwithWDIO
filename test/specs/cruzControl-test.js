import CruzControl from '../../page-objects/CruzControl'

describe('Smoke test - loading website', () => {
    it('load website', () => {
        //  browser.url('https://www.afloresconstruction.com')
        CruzControl.openHomepage()
    })

})