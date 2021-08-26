import PgInsurance from '../../page-objects/PgInsurance'

describe('Smoke test - loading website', () => {
    it('load website', () => {
        //  browser.url('https://www.afloresconstruction.com')
        PgInsurance.openHomepage()
    })

})