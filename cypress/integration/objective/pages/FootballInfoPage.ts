import Bar from "../components/Bar";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

class FootballInfoPage {
    bar: Bar;
    logo: Logo;
    navigation: Navigation;
    constructor() {
        this.bar = new Bar();
        this.logo = new Logo();
        this.navigation = new Navigation();
    }

    checkScript() {
        let status = false
        return cy.get('head > script[defer=""]').each(($el) => {
            if ($el.attr('src')?.toString().includes('master/webpack/Sport/')) {
                cy.log(`script from source ${($el.attr('src') as String)} has been found`)
                status = true
            }
        })
    }
}
export default FootballInfoPage;