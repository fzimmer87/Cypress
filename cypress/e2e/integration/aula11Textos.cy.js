///<reference types="cypress"/>

describe('Verificando se o texto aparece na tela',()=>{
    it('Text',()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('body').should('contain','Cuidado')
        cy.get('span').should('contain','Cuidado')
        cy.get('.facilAchar').should('contain','Cuidado')
        cy.get('.facilAchar').should('have.text','Cuidado onde clica, muitas armadilhas...')
    })
})