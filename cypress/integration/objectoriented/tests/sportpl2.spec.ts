/// <reference types="Cypress" />
/// <reference path="../../../support/index.d.ts" />

import FootballInfoPage from '../pages/FootballInfoPage';
import FootballPage from '../pages/FootballPage';
import MainPage from '../pages/MainPage';

describe('Sport.pl page tests', function () {

    const main = new MainPage()
    const football = new FootballPage()
    const footballinfo = new FootballInfoPage()

    this.beforeAll(function () {
        main.visit();
    })

    describe('Second test', function () {
        it('Check source', function () {
            main.navigation.navigateToFootball()
            football.tiles.clickTile(1)
            footballinfo.checkScript()
            cy.navigate('back')
            football.tiles.clickTile(30)
            footballinfo.checkScript()
        })
    })
})
