/// <reference types="Cypress" />
/// <reference path="../support/index.d.ts" />

describe('Sport.pl page tests', function () {

    this.beforeAll(function () {
        cy.visit('/');
        cy.closeCookieBanner();
    })

    describe('Fourth test', function () {
        it('Check match', function () {
            cy.get('.LivescoreWynikomat').should('have.length.gt', 0);
            cy.get('.vs__selected').click();
            cy.get('#vs1__option-1 > .dropDown > .dropDownLabel').click();
            cy.get('.swiper-slide-active').invoke('attr', 'href').then(($attr) => {
                cy.visit(`${$attr}`);
            });
            cy.get('div.line.correctTime').then(($els) => {
                const win = $els[0].ownerDocument.defaultView as Window;
                const after = win.getComputedStyle($els[0], 'after');
                const color = after.getPropertyValue('background-color');
                expect(color).to.eq('rgb(240, 60, 60)');
                cy.url().then(($url) => {
                    cy.log($url);
                });
            });
        })
    })
})