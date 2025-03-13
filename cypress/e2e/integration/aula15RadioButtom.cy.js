///<reference types="cypress"/>
describe('Clicando no botão voltar link',()=>{
    //o Before é executado apenas uma vez antes de todos os testes dentro do describe
    beforeEach(()=>{ 
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    cy.reload()
    })
    it('Escrevendo no campo nome',()=>{  
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        cy.get('#formSexoMasc')
            .should('not.be.checked')
        cy.get("[name='formSexo']")
            .should('have.length',2)
    })  

})