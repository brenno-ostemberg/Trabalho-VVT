
// Aluna: Catarina Ludmila N. Freisleben
describe('Sistema Integrado de Gestão - Validação Período de Submissão', () => {
  it.only('CT-ES-09 - Período de Submissão - Data Hora Inicial e Data Hora Final - Data Inicio maior que Data Fim', () => {

    cy.fazerlogin()
    
    // Navega até a tela "Informações do Edital"
    cy.get('[data-cy="nav-group-edital"] > .sc-Rjrgp').click() // Clica na opção "Edital" para acessar da página de Editais
    cy.get('[data-cy="nav-item-publicar-edital"] > .css-1dd692o').click(); // Clica no botão "Publicar Edital" 
    cy.get('[data-cy="add-publicar-edital"]').click(); // Clica no botão "Adicionar" para criação de um novo Edital

    // Passo 1: Clica no step "Cronograma"
    cy.get('[data-cy="cronograma"] > .MuiListItemText-root > .MuiTypography-root').click();
    // Passo 2: Clica para fechar o menu lateral
    cy.get('.css-jir0u').click();
    // Passo 3: Clica no substep "Perído de Submissão"
    cy.get('[data-cy="periodo-de-submissao"] > .MuiListItemIcon-root > [data-testid="CircleIcon"] > path').click();
    // Passo 4: Clica em "Adicionar"
    cy.get('[data-cy="add-button"]').click();
    // Passo 5: Clica e insere um dado no campo de preenchimento "Data e Horário Inicial"
    cy.get('[data-cy="chamadaUnsaved.inicio"]').type('15-11-2002 00:00:00', { delay: 0 });
    // Passo 6: Clica e insere um dado no campo de preenchimento 'Data e Horário Final'
    cy.get('[data-cy="chamadaUnsaved.termino"]').type('27-04-2002 00:00:00', { delay: 0 });
    // Passo 7: Clica no botão 'Confirmar'
    cy.get('[data-cy="chamada-confirmar"]').click();
    // Passo 8: Clica no botão 'Próximo'
    cy.get('[data-cy="next-button"').click();

    // Resultado esperado: O sistema  deve impedir o prosseguimento para o próximo substep "Período de Requisição de Bolsista"
    // Verifica se a nova etapa está visível para o usuário
    cy.contains('Período de Requisição de Bolsista');

  })
})

// Relatorio de Erros:
// O CT-ES-09 apresenta um erro no sistema, ao inserir uma data de início posterior a data de fim 
// o sistema deveria impedir o prosseguimento mas não é isso que acontece e o próximo substep
//  "Período de Requisição de Bolsista" é vísivel.

// A escolha de automatização do CT é baseado na criticidade cenário, na frequência de execução do cenário e a 
// cobertura do valor limiar do cenário. 

// Criticidade: alta, é um fluxo que está relacinado a característica do edital a ser publicado
// Frequência: alta, é um fluxo normal o usuário preencher o campo com um valor errado.
// Cobertura: é um cenário que utiliza um valor excedente 