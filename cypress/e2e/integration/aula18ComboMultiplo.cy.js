///<reference types="cypress"/>
describe('Clicando no botão voltar link',()=>{
    //o Before é executado apenas uma vez antes de todos os testes dentro do describe
    beforeEach(()=>{ 
    cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    cy.reload()
    })
    it('Combo que eu seguro o control e seleciono varias opçoes',()=>{
        cy.get('[data-testid="dataEsportes"]')
            // Para um combo multiplo eu preciso enviar o value.
            //No combo simples eu posso mandar o que está escrito normalmente que funciona
            //Já no combo multiplo eu preciso enviar o valor que está escrito no value
            //Natacao por exemplo, no value, está escrito com minusculo no value
            .select(['natacao','Corrida','nada'])
            //TODO validação do que foi selecionado combo multiplo 

    })
})