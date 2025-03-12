///<reference types="cypress"/>
describe('Clicando no botão voltar link',()=>{
    //o Before é executado apenas uma vez antes de todos os testes dentro do describe
    beforeEach(()=>{ 
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    cy.reload()
    })
    it('Escrevendo no campo nome',()=>{  
        cy.get('#formNome').type('Teste Cypress')
        cy.get('#formNome').should('have.value','Teste Cypress')

        cy.get('#elementosForm\\:sugestoes')
            .type('Escreva na área maior')
            .should('have.value','Escreva na área maior')
    })      
   
    
})