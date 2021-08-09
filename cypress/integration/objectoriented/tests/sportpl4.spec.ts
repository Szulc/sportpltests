/// <reference types="Cypress" />
/// <reference path="../../../support/index.d.ts" />

import MainPage from "../pages/MainPage";
import MatchPage from "../pages/MatchPage";

describe('Sport.pl page tests', function () {

    const main = new MainPage()
    const match = new MatchPage()

    this.beforeAll(function () {
        cy.visit('/');
        cy.closeCookieBanner();
    })

    describe('Fourth test', function () {
        it('Check match', function () {
            main.livescore.getLivescore().should('have.length.gt', 0)
            main.livescore.selectFottball()
            main.livescore.navigateToMatch()
            match.gameheadTimeline.checkRedDot()
        })
    })
})