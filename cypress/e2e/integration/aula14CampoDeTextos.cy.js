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
        //Sempre que houver dois pontos (:) o cypress, pode não reconhecer o 
        //elemento, por isso é necessário colocar mais uma barra
        // #elementosForm\:sugestoes => #elementosForm\\:sugestoes
        cy.get('#elementosForm\\:sugestoes')
            .type('Escreva na área maior')
            .should('have.value','Escreva na área maior')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('Texto novo')    
            
        cy.get('[data-cy="dataSobrenome"]')
            //o backspace apaga os dois últimos itens..nesse caso ele vai 
            //apagar o 4 e 5
            .type('teste12345{backspace}{backspace}')
            .should('have.value','teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear() // o clear limpa
            //Erro{selectall} - seleciona o texto todo e escreve em cima
            .type('Erro{selectall}Escreva na área maior novamente',{delay:100})
            .should('have.value','Escreva na área maior novamente')
    })      
   
    
})