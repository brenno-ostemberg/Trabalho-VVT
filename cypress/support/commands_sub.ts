import sigfapData = require('../fixtures/example.json');
import 'cypress-real-events/support'

declare global {
  namespace Cypress {
    interface Chainable {
      xpath(selector: string): Chainable<JQuery<HTMLElement>>
      fazerlogin(): Chainable<void>
      editalorcamento(): Chainable<void>
      editalrubrica(): Chainable<void>
      editalbolsa(): Chainable<void>
      editalinfossimples(): Chainable<void>
      editalsalvafinaliza(): Chainable<void>
      editaldocumentoproposta(): Chainable<void>
      editalperguntasmedio(): Chainable<void>
      editaldocumentopessoal(): Chainable<void>
      editalinfosmedio(): Chainable<void>
      editalfaixafinancia(): Chainable<void>
      editalperguntas(): Chainable<void>
      editalenter(nome: string): Chainable<void>
      editalinfos(): Chainable<void>
      editalcronograma(): Chainable<void>
      typeCKEditor(selector: string, content: string): Chainable<void> // Adicione esta linha
      realType(text: string, options?: { delay: number }): Chainable<void>
    }
  }
}

Cypress.Commands.add('fazerlogin', () => {
    cy.visit(sigfapData.url)
    cy.get('#login').type(sigfapData.login)
    cy.get('#senha').type(sigfapData.senha)
    cy.get('.css-1wz47u4 > .MuiButton-root').click()

});
Cypress.Commands.add('editalenter', (nome: string) => {
    cy.wait(1000) // Aguarda 1 segundo para garantir que o login foi concluído
    cy.get('[data-cy="nav-group-edital"] > .sc-Rjrgp').click() //Clica no botão "Home" para retornar à página anterior
    cy.get('[data-cy="nav-item-publicar-edital"] > .css-1dd692o').click()
    cy.get('[data-cy="add-publicar-edital"]').click()
    
    //Identificação do edital
    cy.get("div[title='Fechar menu']").click()
    cy.get('[data-cy="nome"]').type(nome)
    cy.get('[data-cy="next-button"]').click()
    //Identificação do edital

});
Cypress.Commands.add('typeCKEditor', (selector, text) => {
  cy.get(selector).should('be.visible')
  cy.wait(2000)
  cy.get(`${selector} [contenteditable="true"]`)
    .should('exist')
    .click({ force: true })
    .clear()
    .type(text, { delay: 100 })
})


//INFORMAÇÕES DO EDITAL**************************************************************

