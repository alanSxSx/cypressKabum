describe('Gerenciamento de Carrinho de Compras - Kabum', () => {

	Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

	it('Adiciona um produto ao carrinho', () => {
		cy.login()
		cy.visit('https://www.kabum.com.br/produto/1/prime-ninja-kabum')
		cy.contains('button', 'ADICIONAR AO CARRINHO').click();
		cy.contains('Produto adicionado com sucesso no carrinho').should('be.visible')
		cy.get('#linkCarrinhoHeader > .material-symbols').click()
    cy.get('#remove-button-1').click()
		cy.get('.sc-gFqAkR > .border-transparent').click()
		cy.contains('O seu carrinho está vazio.').should('exist')
//    cy.contains('Produto removido do carrinho').should('exist')
  })


})
