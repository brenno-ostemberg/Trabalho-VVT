
// Aluna: Catarina Ludmila N. Freisleben
describe('Sistema Integrado de Gestão - Validação Restrição do Edital', () => {
  it.only('CT-ES-07 - Validação de Restrições - Marcado COM preenchimento da duração', () => {

    cy.fazerlogin()
    
    // Navega até a tela "Informações do Edital"
    cy.get('[data-cy="nav-group-edital"] > .sc-Rjrgp').click() // Clica na opção "Edital" para acessar da página de Editais
    cy.get('[data-cy="nav-item-publicar-edital"] > .css-1dd692o').click(); // Clica no botão "Publicar Edital" 
    cy.get('[data-cy="add-publicar-edital"]').click(); // Clica no botão "Adicionar" para criação de um novo Edital

    // Passo 1: Clica no substep "Restrições"
    cy.get('[data-cy="restricoes"] > .MuiListItemIcon-root > [data-testid="CircleIcon"] > path').click();
    // Passo 2: Clica para fechar o menu lateral
    cy.get('.css-jir0u').click();
    // Passo 3: Clica na checkbox 'Definir a duração do projeto em meses'
    cy.get('[data-cy="definirDuracaoProjetoEmMeses"]').click();
    // Passo 4: Clica e insere um dado no campo de preenchimento da checkbox 'Definir a duração do projeto em meses'
    cy.get('[data-cy="duracaoProjetoEmMeses"]').type('100', { delay: 0 });
    // Passo 4: Clica no botão 'Próximo'
    cy.get('[data-cy="next-button"').click();

    // Resultado esperado: O sistema  valida corretamente e segue para o próximo substep "Termo de Aceite"
    // Verifica se a nova etapa está visível para o usuário
    cy.get('.css-y8ykzc > .MuiTypography-root').should('be.visible');

  })
})

// Relatorio de Erros:
// O CT-ES-07 não apresenta erros, ao inserir o dado de duração do projeto no campo o sistema valida e prossegue para o 
// próximo substep "Termo de aceite"

// A escolha de automatização do CT é baseado na criticidade cenário, na frequência de execução do cenário e a 
// cobertura do valor limiar do cenário. 

// Criticidade: alta, é um fluxo que está relacinado a característica do edital a ser publicado
// Frequência: alta, é um fluxo normal o usuário preencher o campo.
// Cobertura: é um cenário que utiliza um valor normal 