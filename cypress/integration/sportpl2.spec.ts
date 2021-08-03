/// <reference types="Cypress" />
/// <reference path="../support/index.d.ts" />

describe('Sport.pl page tests', function () {

    this.beforeAll(function () {
        cy.visit('/');
        cy.closeCookieBanner();
    })

    describe('Second test', function () {
        it('Check source', function () {
            cy.get('#e3').click();
            cy.closeCookieBanner();
            cy.get('.entry > a').first().click();
            cy.closeCookieBanner();
            checkScript();
            cy.go('back');
            cy.closeCookieBanner();
            cy.get('.entry > a').last().click();
            checkScript();
        })
    })
})

function checkScript() {
    let status = false
    cy.get('head > script[defer=""]').each(($el) => {
        if ($el.attr('src')?.toString().includes('master/webpack/Sport/')) {
            cy.log(`script from source ${($el.attr('src') as String)} has been found`)
            status = true
        }
    }).then(() => {
        expect(status).to.be.true
    })
}
