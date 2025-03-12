///<reference types="cypress"/>
describe('Clicando no botão voltar link',()=>{
    it('Clicando no link voltar',()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text','Voltou!')
        
        cy.reload()
        cy.get('#resultado').should('have.not.text','Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text','Voltou!')
    })

      it('Text',()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('body').should('contain','Cuidado')
        cy.get('span').should('contain','Cuidado')
        cy.get('.facilAchar').should('contain','Cuidado')
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')
    })
})