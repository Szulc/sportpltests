/// <reference types="Cypress" />
/// <reference path="../support/index.d.ts" />

let footerUpperLinks = ['Sport', 'Dziecko', 'TOK FM', 'Horoskopy', 'Gazeta Wyborcza', 'Zakupy', 'Haps', 'Wiadomości', 'Gazeta.pl']
let footerMiddleLinks = ['Poczta', 'Newsletter', 'Wszystkie artykuły', 'Facebook']
let footerLowerLinks = ['O Nas', 'RSS', 'Reklama', 'Prywatność', 'Zgłoś błąd', 'Zgody']

describe('Sport.pl page tests', function () {

    this.beforeAll(function () {
        cy.visit('/');
        cy.closeCookieBanner();
    })

    describe('First test', function () {
        it('Check logo', function () {
            cy.get('.imgw > a > img').should('have.attr', 'src', 'https://bi.im-g.pl/im/0/24188/m24188910.png');
            cy.get('nav.mod').invoke('hide');
            cy.get('.imgw > a > img').matchImageSnapshot({ clip: { x: 0, y: 0, width: 1202, height: 94 } });
            cy.get('nav.mod').invoke('show');
        })

        it('Check LivescoreWynikomat', function () {
            cy.get('.LivescoreWynikomat').should('have.length.gt', 0);
        })

        it('Check newsList', function () {
            cy.get('.newsList > li').then(($children) => {
                cy.log(`newsList contains ${$children.length.toString()} messages`);
            })
        })

        describe('Check footer', function () {
            it('Check footer size', function () {
                cy.get('.page_footer').children().then(($children) => {
                    expect($children.length).to.eq(3);
                })
            })
            it('Check upper footer', function () {
                cy.get('.footer_upper_links > li > a').each(($a, index) => {
                    expect($a.text()).to.eq(footerUpperLinks[index]);
                })
            })
            it('Check middle footer', function () {
                cy.get('.footer_middle_links > li > a').each(($a, index) => {
                    expect($a.text()).to.eq(footerMiddleLinks[index]);
                })
            })
            it('Check lower footer', function () {
                cy.get('.footer_lower_links > li > a').each(($a, index) => {
                    expect($a.text()).to.eq(footerLowerLinks[index]);
                })
            })
            it('Check copyrights', function () {
                cy.get('.page_footer > a').should('have.attr', 'href', 'https://www.agora.pl/#e=AFootLink');
                cy.get('.page_footer > a').should('have.text', 'Copyright © Agora SA');
            })
        })
    })
})
