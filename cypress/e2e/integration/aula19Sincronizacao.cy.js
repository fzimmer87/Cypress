///<reference types="cypress"/>
describe('Esperas...',()=>{
    before(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    beforeEach(()=>{
        cy.reload()
    })
    it('Deve aguardar elemento estar disponível',()=>{
        cy.get('#buttonDelay')
            .click()
        cy.get('#novoCampo')
            .type('funciona')
    })
})