/// <reference types="Cypress" />

context('User Login', () => {
  beforeEach(() => {
    cy.visit('https://brav-staging.netlify.com')
  })

  it('has a login form', () => {
    cy.get('[data-testid="login-button"]').click()
    cy.contains('Sign in with email').click()
    cy.get('input[name="email"]').type('labs14brav-user@gmail.com')
    cy.contains('Next').click()
    cy.get('input[name="password"]').type('secret')
    cy.contains('Sign In').click()
    cy.wait(1000)
    cy.get('.bravHeader').contains("Brāv")
  })
})
