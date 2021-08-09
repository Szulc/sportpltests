import MatchPage from "../pages/MatchPage"

class Livescore {
    getLivescore(){
        return cy.get('.LivescoreWynikomat')
    }

    selectFottball(){
        cy.log(`select football`)
        this.expandDropdown()
        return cy.get('#vs1__option-1 > .dropDown > .dropDownLabel').click()
    }

    navigateToMatch(){
        cy.log(`navigate to match`)
        cy.get('.swiper-slide-active').invoke('attr', 'href').then(($attr) => {
            cy.visit(`${$attr}`);
        })
        return new MatchPage()
    }
    
    private expandDropdown(){
        return cy.get('.vs__selected').click()
    }
}
export default Livescore