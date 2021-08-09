class TournamentTimetableBox {
    getTable() {
        return cy.get('span.tab').last().click()
    }

    getActiveTab() {
        return cy.get('span.tab.active')
    }
}
export default TournamentTimetableBox