
// Aluna: Catarina Ludmila N. Freisleben
describe('Sistema Integrado de Gestão - Validação Título do Edital', () => {
  it.only('CT-ES-04 - Validação Título do Edital - campo não informado', () => {

    cy.fazerlogin()
    
    // Navega até a tela "Informações do Edital"
    cy.get('[data-cy="nav-group-edital"] > .sc-Rjrgp').click() // Clica na opção "Edital" para acessar da página de Editais
    cy.get('[data-cy="nav-item-publicar-edital"] > .css-1dd692o').click(); // Clica no botão "Publicar Edital" 
    cy.get('[data-cy="add-publicar-edital"]').click(); // Clica no botão "Adicionar" para criação de um novo Edital

    // Passo 1: Clica na caixa de texto Título do Edital
    cy.get('[data-cy="nome"]').click();
    // Passo 2: Garante que o título informado está vazio conforme informado no CT
    cy.get('[data-cy="nome"]').clear();
    // Passo 4: Clica no botão 'Próximo'
    cy.get('[data-cy="next-button"').click();

    // Resultado esperado: NÃO vai para o substep 'Restrições' e apresenta uma mensagem de erro 
    // informando que o título não pode ser vazio
    cy.get('.error-message').should('be.visible');


  })
})

// Relatorio de Erros:
// O CT-ES-04 não apresenta erro, quando o campo não é preenchido o sistema impede o usuário de ir para o próximo substep e informa o erro.

// A escolha de automatização do CT é baseado na criticidade cenário, na frequência de execução do cenário e a 
// cobertura do valor limiar do cenário. 

// Criticidade: alta, é um fluxo que está relacinado a identifição do edital
// Frequência: alta, é um fluxo normal e sempre utilizado ao adicionar um novo edital no sistema
// Cobertura: é um cenário que utiliza um valor nulo