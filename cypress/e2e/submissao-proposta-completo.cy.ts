
//Alunos : Victor Antonio dos Santos Vicente, Brenno Ostenberg
describe('submissao-proposta-completo', () => {
  it('passes', () => {
    //TODO [x]: LOGIN
    cy.fazerloginpesquisador()  

    cy.editalenterpesq("Grupo-9 E.C. 003/2025 Victor e Brenno")
    cy.editalcompletopreencher("E C G9")
    cy.editalcompletopreencherapresentacao()
    cy.anexoeditalcompleto()
    cy.termoaceite()
    cy.editarinfocomple()

  })
})

