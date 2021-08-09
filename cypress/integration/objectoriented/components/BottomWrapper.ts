class BottomWrapper {
    navigateToSection(column: number, section: number, link: number) {
        return cy.get('div.col').eq(column - 1)
            .children('ul').eq(section - 1)
            .children('li').eq(link)
            .children('a').then(($el) => {
                cy.log(`click element: ${$el.text()}`)
            }).click({ force: true })
    }
}
export default BottomWrapper