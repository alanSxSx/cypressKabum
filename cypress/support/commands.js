Cypress.Commands.add('login', () => {

	var user = "12964188637"
  var senha = "Alan0123"

      cy.visit('https://www.kabum.com.br/login?redirect_uri=https://www.kabum.com.br/')
      // cy.get('#linkLoginHeader').click()
      cy.get('[data-testid="login-input"]').type(user)
      cy.get('[data-testid="password-input"]').type(senha)
      cy.get('button[type="submit"]').click()
			cy.wait(4000)
      cy.get('#blocoInformacoesCliente', { timeout: 10000 }).should('exist')
})


// Cypress.Commands.add('login', () => {
//   cy.fixture('user').then((user) => {
//     const { user: email, senha: password } = user;
//     cy.session([email, password], () => {
//       cy.visit('https://www.kabum.com.br/')
//       cy.get('#linkLoginHeader').click()
//       cy.get('[data-testid="login-input"]').type(email)
//       cy.get('[data-testid="password-input"]').type(password)
//       cy.get('button[type="submit"]').click()
//       cy.get('#blocoInformacoesCliente', { timeout: 10000 }).should('exist')
//     }, {
//       validate() {
//         cy.visit('https://www.kabum.com.br/')
//         cy.get('#blocoInformacoesCliente', { timeout: 10000 }).should('exist')
//       },
//       cacheAcrossSpecs: true
//     })
//   })
// })

