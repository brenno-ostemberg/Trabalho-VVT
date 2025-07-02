
//Alunos : Victor Antonio dos Santos Vicente, Brenno Ostenberg
describe('submissao-proposta-simples', () => {
  it('passes', () => {
    //TODO [x]: LOGIN
    cy.fazerloginpesquisador()  

    cy.editalenterpesq("E.S. 001/2025 Victor e Brenno")
    cy.editalsimplespreencher("E S G9")
    cy.editalsimplespreencherapresentacao()
    cy.termoaceite()

  })
})

