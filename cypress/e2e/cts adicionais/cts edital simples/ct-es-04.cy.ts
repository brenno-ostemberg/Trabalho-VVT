
// Aluna: Catarina Ludmila N. Freisleben
describe('Sistema Integrado de Gestão - Validação Título do Edital', () => {
  it.only('CT-ES-04 - Validação Título do Edital - campo não informado', () => {

    cy.fazerlogin()
    
    // Navega até a tela "Informações do Edital"
    cy.get('[data-cy="nav-group-edital"] > .sc-Rjrgp').click() //Clica na opção Editais para acessar da página de Editais
    cy.get('[data-cy="nav-item-publicar-edital"] > .css-1dd692o').click(); //Clica no botão "Publicar Edital" 
    cy.get('[data-cy="add-publicar-edital"]').click(); //Clica no botão "Adicionar" para criação de um novo Edital

    // Passo 1: Clica na caixa de texto Título do Edital
    cy.get('[data-cy="nome"]').click();
    // Passo 2: Garante que está vazio
    cy.get('[data-cy="nome"]').clear();
    // Passo 4: Clica no botão 'Próximo'
    cy.get('[data-cy="next-button"').click();

    // Resultado esperado: NÃO vai para o substep 'Restrições'
    cy.get('.error-message').should('be.visible');


  })
})



// Relatorio de Erros: