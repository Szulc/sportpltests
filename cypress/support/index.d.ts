// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="Cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
    */
    closeCookieBanner(): Chainable<Element>
    setResolution(value: number): Chainable<Element>
  }
}