import { skipOn } from '@cypress/skip-test'

describe('Example skipping', () => {

  it('failing -> skipping test', () => {

    cy.on('fail', (err, runnable) => {
      if
        // you can check here what kind of exception it is and adapt behavior (like - if a backend is not running - then skip tests that need to use the backend)
      (true) {
        Cypress.env('skipTests', true);
        skipOn(Cypress.env('skipTests'))
      }

      throw err // this will be not thrown but skipped
    })

    cy.visit("http://vommy.cz")
    cy.get("#toggleButton").click()
    cy.wait(500)
    cy.get("#elementContainer").should("be.visible")
    cy.get("#toggleButton").click()
    cy.wait(500)
    cy.get("#elementContainer", {timeout: 500}).should("be.visible")
  })

  it('passing test', () => {
    cy.visit("http://vommy.cz")
    cy.get("#toggleButton").click()
    cy.wait(500)
    cy.get("#elementContainer").should("be.visible")
    cy.get("#toggleButton").click()
    cy.wait(500)
    cy.get("#elementContainer").should("not.be.visible")
  })

  it('skipping if first test failed ', () => {
    skipOn(Cypress.env('skipTests'))
    cy.visit("http://vommy.cz")
    cy.get("#toggleButton").click()
    cy.wait(500)
    cy.get("#elementContainer").should("be.visible")
    cy.get("#toggleButton").click()
    cy.wait(500)
    cy.get("#elementContainer").should("not.be.visible")
  })
})