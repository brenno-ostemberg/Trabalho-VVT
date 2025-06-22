import 'cypress';

describe('template spec', () => {
  it('passes', () => {
    //TODO [x]: LOGIN
    cy.fazerlogin()

    //TODO [x]: Entrar no modulo de editais
    cy.editalenter('Grupo-9 E.S. 001/2025 Victor e Brenno')

    //TODO [x]: Informações do Edital
    cy.editalinfossimples()

    //TODO [x]: Cronograma do Edital
    cy.editalcronograma()

    //TODO [x]: Orçamento do Edital
    cy.editalorcamento()


  })
})
