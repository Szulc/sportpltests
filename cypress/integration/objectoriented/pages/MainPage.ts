import Bar from "../components/Bar"
import BottomWrapper from "../components/BottomWrapper"
import Footer from "../components/Footer"
import Livescore from "../components/Livescore"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"
import NewsList from "../components/NewsList"

class MainPage {
    bar: Bar
    bottomwrapper: BottomWrapper
    footer: Footer
    livescore: Livescore
    logo: Logo
    navigation: Navigation
    newslist: NewsList
    constructor() {
        this.bar = new Bar()
        this.bottomwrapper = new BottomWrapper
        this.footer = new Footer()
        this.logo = new Logo()
        this.livescore = new Livescore()
        this.navigation = new Navigation()
        this.newslist = new NewsList()
    }

    visit() {
        cy.visit('/')
        cy.closeCookieBanner()
    }
}
export default MainPage