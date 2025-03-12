///<reference types="cypress"/>
describe('Abrir página do Cypress',()=>{
    it.only('Deve visitar uma pagina e fazer uma assertiva',()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

         //primeira forma de fazer as validações 
        cy.title()
            .should('be.equal','Campo de Treinamento')
            .should('contain','Campo')
        //segunda forma de fazer as validações
        cy.title()
            .should('be.equal','Campo de Treinamento') //valida o titulo da aba(em cima)
            .and('contain','Campo') //valida se contém a palavra campo
    })
    it('Clicar no botão e verificar a frase dele',()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click() //clica no botão
        cy.get('#buttonSimple').should('have.value','Obrigado!')
    })
})