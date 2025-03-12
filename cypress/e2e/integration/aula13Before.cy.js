///<reference types="cypress"/>
describe('Clicando no botão voltar link',()=>{
    //o Before é executado apenas uma vez antes de todos os testes dentro do describe
    before(()=>{ 
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    it('Clicando no link voltar',()=>{        
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
describe('Clicando no botão voltar link teste com beforeEach',()=>{
    //o BeforeEach é executado antes de todos os testes dentro do describe
    //Útil quando você deseja garantir que cada teste tenha um estado inicial limpo.
    beforeEach(()=>{ 
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    it('Clicando no link voltar',()=>{        
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