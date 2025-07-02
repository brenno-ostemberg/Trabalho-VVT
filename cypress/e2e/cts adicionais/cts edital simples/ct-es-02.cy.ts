
// Aluna: Catarina Ludmila N. Freisleben
describe('Sistema Integrado de Gestão - Validação Título do Edital', () => {
  it.only('CT-ES-02 - Validação Título do Edital - limite máximo permitido', () => {

    cy.fazerlogin()
    
    // Navega até a tela "Informações do Edital"
    cy.get('[data-cy="nav-group-edital"] > .sc-Rjrgp').click() // Clica na opção "Edital" para acessar da página de Editais
    cy.get('[data-cy="nav-item-publicar-edital"] > .css-1dd692o').click(); // Clica no botão "Publicar Edital" 
    cy.get('[data-cy="add-publicar-edital"]').click(); // Clica no botão "Adicionar" para criação de um novo Edital

    // Passo 1: Clica na caixa de texto Título do Edital
    cy.get('[data-cy="nome"]').click();
    // Passo 2: Digita o título informado no CT
    cy.get('[data-cy="nome"]').type('Grupo-09 E.S. 001/2025 matheus-mota Teste com análise de valor limite: foco nos extremos da entrada para validar o comportamento', { delay: 0 });
    // Passo 4: Clica no botão 'Próximo'
    cy.get('[data-cy="next-button"').click();

    // Resultado esperado: Vai para o substep "Restrições"
    // Valida que a nova etapa está visível para o usuário
    cy.get('[data-cy="restricoes"]').should('be.visible');


  })
})

// Relatorio de Erros:
// O CT-ES-02 não apresenta erro, o usuário é devidamente levado ao próximo substep ao preencher o campo de título com 128 caracteres.

// A escolha de automatização do CT é baseado na criticidade cenário, na frequência de execução do cenário e a 
// cobertura do valor limiar do cenário. 

// Criticidade: alta, é um fluxo que está relacinado a identifição do edital
// Frequência: alta, é um fluxo normal e sempre utilizado ao adicionar um novo edital no sistema
// Cobertura: é um cenário que utiliza um valor limiar limite