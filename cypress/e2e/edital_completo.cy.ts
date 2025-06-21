//Alunos : Victor Antonio dos Santos Vicente, Brenno Ostenberg
describe('template spec', () => {
  it('passes', () => {
    //TODO [x]: LOGIN
    cy.fazerlogin()

    //TODO [x]: Entrar no modulo de editais
    cy.editalenter('Grupo 9')

    //TODO [x]: Informações do Edital
    cy.editalinfos()

    //TODO [x]: Cronograma do Edital
    cy.editalcronograma()

    //TODO [x]: Orçamento do Edital
    cy.editalorcamento()

    //TODO [x]: Rubricas do Edital
    cy.editalrubrica()

    //TODO [x]: Faixa Financeira do Edital
    cy.editalfaixafinancia()

    //TODO [x]: Documentos do Edital
    cy.editaldocumentoproposta()

    //TODO [x]: Documentos Pessoais do Edital
    cy.editaldocumentopessoal()

    //TODO [x]: Perguntas do Edital
    cy.editalperguntas()

    //TODO [x]: Bolsa do Edital
    cy.editalbolsa()


  })
})



// Relatorio de Erros:
// 1. O botão de login não contem um id ou data-cy, o que dificulta a automação do teste.
// 2. Após realizar o login ao tentar visitar a página de editais, o sistema não carrega corretamente, resultando em um erro 401 mesmo depois de autorizado. 
// Levando a crer que o sistema não está preparado para receber requisições de teste automatizado. Sendo necessario criar outro fluxo para entrar no modulo de editais.
// 3. O TextBox do CKEditor precisa ser clicado para entao receber o texto. Foi necessario criar um comando personalizado para o CKEditor, pois o comando type não funciona corretamente, foi utilizado e realType().
// 4. (Informações Complementares) : Após selecionar uma opção de informação, o sistema apaga a opção selecionada após um curto periodo de tempo. 
// 5. faixa financeira valor minimo não limpa o campo ao adicionar uma nova faixa, o que resulta em um erro ao tentar adicionar uma nova faixa financeira.
