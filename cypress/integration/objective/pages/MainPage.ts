import Bar from "../components/Bar";
import Footer from "../components/Footer";
import Livescore from "../components/Livescore";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import NewsList from "../components/NewsList";

class MainPage {
    bar: Bar;
    footer: Footer;
    livescore: Livescore;
    logo: Logo;
    navigation: Navigation;
    newslist: NewsList;
    constructor() {
        this.bar = new Bar();
        this.footer = new Footer()
        this.logo = new Logo();
        this.livescore = new Livescore();
        this.navigation = new Navigation();
        this.newslist = new NewsList()
    }

    visit() {
        cy.visit('/')
        cy.closeCookieBanner()
    }
}
export default MainPage;