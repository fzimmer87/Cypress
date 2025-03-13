///<reference types="cypress"/>
describe('Clicando no botão voltar link',()=>{
    //o Before é executado apenas uma vez antes de todos os testes dentro do describe
    beforeEach(()=>{ 
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    cy.reload()
    })
    it('Aula checkbox',()=>{
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')
        //click({multiple:true--> faz com que o click seja multiplo, então ele
        //vai clicar nos check box que tiverem o name=comida favorita
        cy.get('[name=formComidaFavorita]')
            .click({multiple:true})
        cy.get('#formComidaPizza')
            .should('not.be.checked')
        cy.get('#formComidaVegetariana')
            .should('be.checked')
    })
})

