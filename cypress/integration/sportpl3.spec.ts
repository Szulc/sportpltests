/// <reference types="Cypress" />
/// <reference path="../support/index.d.ts" />

describe('Sport.pl page tests', function () {

    this.beforeAll(function () {
        cy.visit('/');
        cy.closeCookieBanner();
    })

    describe('Third test', function () {
        it('Check Premier League', function () {
            cy.get('div.col').eq(1).children('ul').first()
                .children('li').eq(1).children('a').click({ force: true });
            cy.get('span.tab').last().click();
            cy.get('span.tab.active').should('have.text', 'Tabela');
            cy.get('nav.mod').invoke('hide');
            cy.get('span.tab.active').matchImageSnapshot({ clip: { x: 0, y: 0, width: 150, height: 45 } });
            cy.get('nav.mod').invoke('show');
        })
    })
})