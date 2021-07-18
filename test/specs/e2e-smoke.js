describe('Smoke test - loading website', () => {
    it('load website', async () => {
        await browser.url('https://www.afloresconstruction.com/')
        await expect($(browser)).toHaveUrl('https://www.afloresconstruction.com/);
        await expect($(browser).toHaveTitle('FLORES CONSTRUCTION: Denver Home Remodeling Company & Renovation Contractors'))
    })
})




