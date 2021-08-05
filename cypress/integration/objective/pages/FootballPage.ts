import Bar from "../components/Bar";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import FootballInfoPage from "./FootballInfoPage";

class FootballPage {
    bar: Bar;
    logo: Logo;
    navigation: Navigation;
    constructor() {
        this.bar = new Bar();
        this.logo = new Logo();
        this.navigation = new Navigation();
    }

    clickTile(value: number) {
        this.getTile(value).click()
        cy.closeCookieBanner()
        return new FootballInfoPage()
    }

    private getTile(value: number) {
        return cy.get('.entry > a').eq(value - 1)
    }
}
export default FootballPage;