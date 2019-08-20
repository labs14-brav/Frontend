/// <reference types="Cypress" />

context('Create Case', () => {
  beforeEach(() => {
    cy.visit('https://brav-staging.netlify.com')
  })

  it('has a case form', () => {
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
     * View Form
     */

    cy.contains('Create a Case').click()
    cy.contains('button', 'Non-Court Referral')
    cy.contains('button', 'Court Referral').click()
    cy.wait(1000)
    cy.get('[data-testid="heading-h3"]').contains("Case Form")
  })
})
