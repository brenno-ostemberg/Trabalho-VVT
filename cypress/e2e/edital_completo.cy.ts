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
    //TODO []: Orçamento do Edital
    cy.editalorcamento()
    cy.editalrubrica()
    cy.editalfaixafinancia()
    cy.editaldocumentoproposta()
    cy.editaldocumentopessoal()
    cy.editalperguntas()
    cy.editalbolsa()
    //TODO []: Documentos edital
    //TODO []: Perguntas edital
    //TODO []: Bolsa edital
    //TODO []: Finalizar edital
  })
  // it('should visit the page', () => {
  //   cy.visit('https://novo-sig.ledes.net/edital')
  //   cy.get('[data-cy="nome"]').click() //Clica no botão "Home" para retornar à página anterior
  // })
})



// Relatorio de Erros:
// 1. O botão de login não contem um id ou data-cy, o que dificulta a automação do teste.
// 2. Após realizar o login ao tentar visitar a página de editais, o sistema não carrega corretamente, resultando em um erro 401 mesmo depois de autorizado. 
// Levando a crer que o sistema não está preparado para receber requisições de teste automatizado. Sendo necessario criar outro fluxo para entrar no modulo de editais.
// 3. O TextBox do CKEditor precisa ser clicado para entao receber o texto. Foi necessario criar um comando personalizado para o CKEditor, pois o comando type não funciona corretamente, foi utilizado e realType().
// 4. (Informações Complementares) : Após selecionar uma opção de informação, o sistema apaga a opção selecionada após um curto periodo de tempo. 
// 5. faixa financeira valor minimo não limpa o campo ao adicionar uma nova faixa, o que resulta em um erro ao tentar adicionar uma nova faixa financeira.
