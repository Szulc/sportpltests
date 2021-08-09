class Bar {
    hideBar() {
        return cy.get('nav.mod').invoke('hide')
    }

    showBar() {
        return cy.get('nav.mod').invoke('show')
    }
}
export default Bar