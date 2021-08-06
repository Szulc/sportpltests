/// <reference types="Cypress" />
/// <reference path="../../../support/index.d.ts" />

import FootballInfoPage from '../pages/FootballInfoPage';
import FootballPage from '../pages/FootballPage';
import MainPage from '../pages/MainPage';

describe('Sport.pl page tests', function () {

    const main = new MainPage();
    const football = new FootballPage();
    const footballinfo = new FootballInfoPage();

    this.beforeAll(function () {
        main.visit();
    })

    describe('Second test', function () {
        it('Check source', function () {
            main.navigation.navigateToFootball()
            football.clickTile(1)
            footballinfo.checkScript().then(() => {
                expect(status).to.be.true
            })
            cy.go('back')
            cy.closeCookieBanner()
            football.clickTile(30)
            footballinfo.checkScript().then(() => {
                expect(status).to.be.true
            })
        })
    })
})
