/// <reference types="Cypress" />

context('User Visit', () => {
  beforeEach(() => {
    cy.visit('https://brav-staging.netlify.com')
  })

  it('has a greeting on Landing page', () => {
    cy.get('[data-testid="signup-button"]').contains('signup')

    cy.get('[data-testid="login-button"]').contains('login')
  })
})
