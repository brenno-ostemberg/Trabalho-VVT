
// Aluna: Catarina Ludmila N. Freisleben
describe('Sistema Integrado de Gestão - Validação de Adicionar Programa', () => {
  it.only('CT-ES-09 -  Programa - Caminho Feliz', () => {

    cy.fazerlogin()
    
    // Navega até a tela "Informações do Edital"
    cy.get('[data-cy="nav-group-edital"] > .sc-Rjrgp').click() // Clica na opção "Edital" para acessar da página de Editais
    cy.get('[data-cy="nav-item-publicar-edital"] > .css-1dd692o').click(); // Clica no botão "Publicar Edital" 
    cy.get('[data-cy="add-publicar-edital"]').click(); // Clica no botão "Adicionar" para criação de um novo Edital

    // Passo 1: Clica no step "Orçamento"
    cy.get('[data-cy="orcamento"]').click();
    // Passo 2: Clica para fechar o menu lateral
    cy.get('.css-jir0u').click();
    // Passo 3: Clica no substep "Programa"
    cy.get('[data-cy="programa"] > .MuiListItemIcon-root').click();
    // Passo 4: Clica na caixa de seleção "Programa"
    cy.get('[data-cy="programaId"]').click().type('Beahan LLC', { delay: 0 });
    // Passo 5: Clica no botão 'Próximo'
    cy.get('[data-cy="next-button"').click();

    // Resultado esperado: O sistema deve validar corretamente a seleção do campo obrigatório 
    // “Programa” e seguir para o próximo substep "Rubricas"
    // Verifica se a nova etapa está visível para o usuário
    cy.contains('Rubricas');

  })
})

// Relatorio de Erros:
// O CT-ES-10 não apresenta erros, ao selecionar o programa existente o usuário é levado para o próximo
// substep "Rubricas"

// A escolha de automatização do CT é baseado na criticidade cenário, na frequência de execução do cenário e a 
// cobertura do valor limiar do cenário. 

// Criticidade: alta, é um fluxo que está relacinado a característica do edital a ser publicado
// Frequência: alta, é um fluxo normal o usuário selecionar um campo dentre as opções dísponiveis.
// Cobertura: é um cenário que utiliza um valor normal 