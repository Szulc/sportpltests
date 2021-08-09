/// <reference types="Cypress" />
/// <reference path="../../../support/index.d.ts" />

import MainPage from "../pages/MainPage";
import PremierLeaguePage from "../pages/PremierLeaguePage";

describe('Sport.pl page tests', function () {

    let tableHeader = 'Tabela'

    const main = new MainPage()
    const premierleague = new PremierLeaguePage()

    this.beforeAll(function () {
        main.visit();
    })

    describe('Third test', function () {
        it('Check Premier League', function () {
            main.bottomwrapper.navigateToSection(2, 1, 1)
            premierleague.tournamenttimetablebox.getTable()
            premierleague.tournamenttimetablebox.getActiveTab().should('have.text', tableHeader)
            main.bar.hideBar()
            premierleague.tournamenttimetablebox.getActiveTab().matchImageSnapshot({ clip: { x: 0, y: 0, width: 150, height: 45 } });
            main.bar.showBar()
        })
    })
})