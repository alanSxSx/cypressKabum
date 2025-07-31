Cypress.Commands.add('login', () => {
  cy.fixture('user').then(({ usuario, senha }) => {
    cy.visit('https://www.kabum.com.br/login?redirect_uri=https://www.kabum.com.br/')
    cy.get('[data-testid="login-input"]').type(usuario)
    cy.get('[data-testid="password-input"]').type(senha)
    cy.get('button[type="submit"]').click()
    cy.wait(4000)
    cy.contains('span', 'Olá,').should('be.visible')
  })
})

