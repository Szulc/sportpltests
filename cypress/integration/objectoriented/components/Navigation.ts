import FootballPage from "../pages/FootballPage"

class Navigation {

    navigateToFootball() {
        cy.log(`navigate to football`)
        this.getNavigationElement(3).click()
        cy.closeCookieBanner()
        return new FootballPage()
    }

    /**
     * Select navigation element.
     * @example
     *    getNavigationElement(1)
     */
    private getNavigationElement(value: number) {
        return cy.get(`#e${value}`)
    }
}
export default Navigation