///<reference types="cypress"/>
describe('Esperas...',()=>{
    before(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    beforeEach(()=>{
        cy.reload()
    })
    it('Deve aguardar elemento estar disponível',()=>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
            //.should('not.exist')
            //.should('exist')
            // Eu não posso deixar assim, uma assertiva contraria da outra senão
            //o cypress não consegue reconhecer
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')
                
    })
})