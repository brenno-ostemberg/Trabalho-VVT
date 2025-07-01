
// Aluna: Catarina Ludmila N. Freisleben
describe('Sistema Integrado de Gestão - Validação Título do Edital', () => {
  it.only('CT-ES-03 - Validação Título do Edital - limite máximo permitido + 1', () => {

    cy.fazerlogin()
    
    // Navega até a tela "Informações do Edital"
    cy.get('[data-cy="nav-group-edital"] > .sc-Rjrgp').click() // Clica na opção "Edital" para acessar da página de Editais
    cy.get('[data-cy="nav-item-publicar-edital"] > .css-1dd692o').click(); // Clica no botão "Publicar Edital" 
    cy.get('[data-cy="add-publicar-edital"]').click(); // Clica no botão "Adicionar" para criação de um novo Edital

    // Passo 1: Clica na caixa de texto Título do Edital
    cy.get('[data-cy="nome"]').click();
    // Passo 2: Digita o título informado no CT
    cy.get('[data-cy="nome"]').type('XGrupo-09 E.S. 001/2025 matheus-mota Teste com análise de valor limite: foco nos extremos da entrada para validar o comportamento', { delay: 0 });
    // Passo 4: Clica no botão 'Próximo'
    cy.get('[data-cy="next-button"').click();

    // Resultado esperado: NÃO deveria ir para o substep 'Restrições'
    cy.contains('Restrições');
  })
})

// Relatorio de Erros:
// O CT-ES-03 não apresenta erro, o campo de título é limitado para 128 caracteres e quando o usuário ultrapassa esse limite a letra 
// excedente é cortada.

// A escolha de automatização do CT é baseado na criticidade cenário, na frequência de execução do cenário e a 
// cobertura do valor limiar do cenário. 

// Criticidade: alta, é um fluxo que está relacinado a identifição do edital
// Frequência: alta, é um fluxo normal e sempre utilizado ao adicionar um novo edital no sistema
// Cobertura: é um cenário que utiliza um valor limiar excedente