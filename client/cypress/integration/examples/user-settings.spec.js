/// <reference types="Cypress" />

context('Search Mediators', () => {
  beforeEach(() => {
    cy.visit('https://brav-staging.netlify.com')
  })

  it('has user settings', () => {
    /**
     * User Login
     */

    cy.get('[data-testid="login-button"]').click()
    cy.contains('Sign in with email').click()
    cy.get('input[name="email"]').type('labs14brav-user@gmail.com')
    cy.contains('Next').click()
    cy.get('input[name="password"]').type('secret')
    cy.contains('Sign In').click()
    cy.wait(1000)
    cy.get('.bravHeader').contains("Brāv")

    /**
     * User Settings
     */

    cy.contains('Settings').click()
    cy.contains('h3', 'Site settings')
    cy.get('a[href="/users/mediator-registration"]').contains('Become a Mediator')
    cy.get('[data-testid="button-deactivate-account"]').contains('Deactivate Account')
  })
})
