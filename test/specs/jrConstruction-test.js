import JrConstructionusa from '../../page-objects/JrConstruction'

describe('Smoke test - loading website', () => {
    it('load website', () => {
        //  browser.url('https://www.afloresconstruction.com')
        JrConstructionusa.openHomepage()
    })

})