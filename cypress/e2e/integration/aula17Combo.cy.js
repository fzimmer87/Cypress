///<reference types="cypress"/>
describe('Clicando no botão voltar link',()=>{
    //o Before é executado apenas uma vez antes de todos os testes dentro do describe
    beforeEach(()=>{ 
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    cy.reload()
    })
    it('Combo box',()=>{
        cy.get('[data-test="dataEscolaridade"]')
            .select('2graucomp')
            .should('have.value','2graucomp')
    })
})