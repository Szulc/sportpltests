class FootballInfoPage {
    checkScript() {
        cy.log(`check script`)
        let status = false
        cy.get('head > script[defer=""]').each(($el) => {
            if ($el.attr('src')?.toString().includes('master/webpack/Sport/2')) {
                cy.log(`script from source ${($el.attr('src') as String)} has been found`)
                status = true
            }
        }).then(() => {
            expect(status).to.be.true
        })
    }
}
export default FootballInfoPage