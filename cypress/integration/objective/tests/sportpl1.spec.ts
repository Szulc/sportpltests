/// <reference types="Cypress" />
/// <reference path="../../../support/index.d.ts" />

import MainPage from '../pages/MainPage';
import FooterLevel from '../utils/FooterLevel';

describe('Sport.pl page tests', function () {

    let footerUpperLinks = ['Sport', 'Dziecko', 'TOK FM', 'Horoskopy', 'Gazeta Wyborcza', 'Zakupy', 'Haps', 'Wiadomości', 'Gazeta.pl']
    let footerMiddleLinks = ['Poczta', 'Newsletter', 'Wszystkie artykuły', 'Facebook']
    let footerLowerLinks = ['O Nas', 'RSS', 'Reklama', 'Prywatność', 'Zgłoś błąd', 'Zgody']
    let logoLink = 'https://bi.im-g.pl/im/0/24188/m24188910.png'
    let copyrightsLink = 'https://www.agora.pl/#e=AFootLink'
    let copyrightsText = 'Copyright © Agora SA'

    const main = new MainPage();

    this.beforeAll(function () {
        main.visit();
    })

    describe('First test', function () {
        it('Check logo', function () {
            main.logo.getLogo().should('have.attr', 'src', logoLink);
            main.bar.hideBar();
            main.logo.getLogo().matchImageSnapshot({ clip: { x: 0, y: 0, width: 1202, height: 94 } });
            main.bar.showBar();
        })

        it('Check LivescoreWynikomat', function () {
            main.livescore.getLivescore().should('have.length.gt', 0);
        })

        it('Check newsList', function () {
            main.newslist.getNewsListElements().then(($children) => {
                cy.log(`newsList contains ${$children.length.toString()} messages`);
            })
        })

        describe('Check footer', function () {
            it('Check footer size', function () {
                main.footer.getFooter().children().then(($children) => {
                    expect($children.length).to.eq(3);
                })
            })
            it('Check upper footer', function () {
                main.footer.getFooterLevel(FooterLevel.UPPER).each(($a, index) => {
                    expect($a.text()).to.eq(footerUpperLinks[index]);
                })
            })
            it('Check middle footer', function () {
                main.footer.getFooterLevel(FooterLevel.MIDDLE).each(($a, index) => {
                    expect($a.text()).to.eq(footerMiddleLinks[index]);
                })
            })
            it('Check lower footer', function () {
                main.footer.getFooterLevel(FooterLevel.LOWER).each(($a, index) => {
                    expect($a.text()).to.eq(footerLowerLinks[index]);
                })
            })
            it('Check copyrights', function () {
                main.footer.getCopyrights()
                    .should('have.attr', 'href', copyrightsLink)
                    .should('have.text', copyrightsText);
            })
        })
    })
})
