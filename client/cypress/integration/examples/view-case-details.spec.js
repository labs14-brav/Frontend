/// <reference types="Cypress" />

context('View Case Details', () => {
  beforeEach(() => {
    cy.visit('https://brav-staging.netlify.com')
  })

  it('has access to case details', () => {
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
     * Case Details
     */

    cy.contains('View Details').click()
    cy.contains('button', 'Addendums')
    cy.contains('button', 'Invoices')
    cy.contains('button', 'Documents')
    cy.contains('button', 'Add Information')
    cy.get('#trashButton')

    /**
     * Addendums
     */

    cy.contains('Add Information').click()
    cy.get('#modal-text').type('Test addendum').type('{esc}')

    /**
     * Invoices
     */

    cy.contains('Invoices').click()
    cy.contains('Pay Invoice')

    /**
     * Documents
     */

    cy.contains('Documents').click()
    cy.get('#uploader').click()

    /**
     * Close Case Details
     */

    cy.get('#exitButton').click()
  })
})
