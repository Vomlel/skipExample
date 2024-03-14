describe('Example skipping', () => {

  it('failig test', () => {

    cy.on('fail', (err, runnable) => {
      // you can check here what kind of exception it is and adapt behavior (like - if a backend is not running - then skip tests that need to use the backend)
      Cypress.env('skipTests', true);
      // throw err
    })

    cy.visit("http://vommy.cz")
    cy.get("#toggleButton").click()
    cy.wait(500)
    cy.get("#elementContainer").should("be.visible")
    cy.get("#toggleButton").click()
    cy.wait(500)
    cy.get("#elementContainer").should("be.visible")
    cy.onlyOn(!Cypress.env('skipTests'))
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

  it('skipped test', () => {
    cy.onlyOn(!Cypress.env('skipTests'))
    cy.visit("http://vommy.cz")
    cy.get("#toggleButton").click()
    cy.wait(500)
    cy.get("#elementContainer").should("be.visible")
    cy.get("#toggleButton").click()
    cy.wait(500)
    cy.get("#elementContainer").should("not.be.visible")
  })
})