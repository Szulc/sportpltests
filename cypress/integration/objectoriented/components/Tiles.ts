import FootballInfoPage from "../pages/FootballInfoPage"

class Tiles {
    clickTile(value: number) {
        cy.log(`click tile number ${value}`)
        this.getTile(value).click()
        cy.closeCookieBanner()
        return new FootballInfoPage()
    }

    private getTile(value: number) {
        return cy.get('.entry > a').eq(value - 1)
    }
}
export default Tiles