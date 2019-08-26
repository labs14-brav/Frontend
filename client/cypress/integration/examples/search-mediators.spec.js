/// <reference types="Cypress" />

context('Search Mediators', () => {
  beforeEach(() => {
    cy.visit('https://brav-staging.netlify.com')
  })

  it('has a mediator search', () => {
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
     * Search mediators
     */

    cy.contains('h6', 'Court Case')
    cy.contains('button', 'Find a Mediator').click()
    cy.contains('h1', 'Search for a Mediator')
    cy.get('input[name="specialization"]')
    cy.get('input[name="language"]')
    cy.get('input[name="price"]')
    cy.get('input[name="experience"]')
  })
})
