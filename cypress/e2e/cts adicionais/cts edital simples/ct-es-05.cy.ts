
// Aluna: Catarina Ludmila N. Freisleben
describe('Sistema Integrado de Gestão - Validação Restrição do Edital', () => {
  it.only('CT-ES-05 - Validação de Restrições - Não marcado', () => {

    cy.fazerlogin()
    
    // Navega até a tela "Informações do Edital"
    cy.get('[data-cy="nav-group-edital"] > .sc-Rjrgp').click() // Clica na opção "Edital" para acessar da página de Editais
    cy.get('[data-cy="nav-item-publicar-edital"] > .css-1dd692o').click(); // Clica no botão "Publicar Edital" 
    cy.get('[data-cy="add-publicar-edital"]').click(); // Clica no botão "Adicionar" para criação de um novo Edital

    // Passo 1: Clica no substep "Restrições"
    cy.get('[data-cy="restricoes"] > .MuiListItemIcon-root > [data-testid="CircleIcon"] > path').click();
    // Passo 2: Clica no botão 'Próximo'
    cy.get('[data-cy="next-button"').click();
    // Passo 3: Clica para fechar o menu lateral
    cy.get('.css-jir0u').click();

    // Resultado esperado: Vai para o substep "Termo de Aceite"
    // Valida que a nova etapa está visível para o usuário
    cy.get('.css-y8ykzc > .MuiTypography-root').should('be.visible');

  })
})

// Relatorio de Erros:
// O CT-ES-05 não apresenta erro, ao clicar no substep "Restrições", não marcar nenhuma das opções possíveis
// e clicar em "Próximo" o usuário é levado para o substep "Termo de Aceite".

// A escolha de automatização do CT é baseado na criticidade cenário, na frequência de execução do cenário e a 
// cobertura do valor limiar do cenário. 

// Criticidade: alta, é um fluxo que está relacinado a característica do edital a ser publicado
// Frequência: alta, é um fluxo normal um edital não possuir restrições
// Cobertura: é um cenário que utiliza um valor nulo