///<reference types="cypress"/>
describe('Esperas...',()=>{
  
    beforeEach(()=>{
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.reload()
    })
    //se eu dividir com o find do começo, sistema vai dar erro quando tentar procurar o 
// item 2, por isso coloquei '#lista li span' completo no primeiro get
//e separado no segundo
    it('Clicar no item listar e achar os dois itens que aparecem embaixo',()=>{
        cy.get('#buttonList').click()
        cy.get('#lista li span')
            //.find('span')
            .should('contain','Item 1')
        cy.get('#lista li')
            .find('span')
            .should('contain','Item 2')
    })

    it('Clicar no ListaDom e achar os dois itens que aparecem embaixo',()=>{
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain','Item 1')
        cy.get('#lista li span')
            //.find('span')
            .should('contain','Item 2')
    })
    //Nesse outro caso fiz o contrário, o primeiro fiz cy.get('#lista li')
    //.find('span') e embaixo fiz cy.get('#lista li span') junto
})
