import cypress = require('cypress');
import sigfapData = require('../fixtures/example.json');
import 'cypress-real-events/support'

declare global {
  namespace Cypress {
    interface Chainable {
      xpath(selector: string): Chainable<JQuery<HTMLElement>>
      fazerlogin(): Chainable<void>
      editalcompletopreencherapresentacao(): Chainable<void>
      editalcompletopreencher(nomeedital: string): Chainable<void>
      fazerloginpesquisador(): Chainable<void>
      anexoeditalcompleto(): Chainable<void>
      editalorcamento(): Chainable<void>
      editalrubrica(): Chainable<void>
      editalsimplespreencherapresentacao(): Chainable<void>
      editalsimplespreencher(nomeedital: string): Chainable<void>
      editalbolsa(): Chainable<void>
      editarinfocomple(): Chainable<void>
      editalinfossimples(): Chainable<void>
      editalsalvafinaliza(): Chainable<void>
      editaldocumentoproposta(): Chainable<void>
      editalperguntasmedio(): Chainable<void>
      editaldocumentopessoal(): Chainable<void>
      editalinfosmedio(): Chainable<void>
      termoaceite():Chainable<void>
      editalfaixafinancia(): Chainable<void>
      editalperguntas(): Chainable<void>
      editalenter(nome: string): Chainable<void>
      editalinfos(): Chainable<void>
      editalenterpesq(nome: string): Chainable<void>
      editalcronograma(): Chainable<void>
      typeCKEditor(selector: string, content: string): Chainable<void> // Adicione esta linha
      realType(text: string, options?: { delay: number }): Chainable<void>
    }
  }
}

Cypress.Commands.add('fazerlogin', () => {
    cy.visit(sigfapData.url)
    cy.get('#login').type(sigfapData.login)
    cy.get('#senha').type(sigfapData.senha)
    cy.get('.css-1wz47u4 > .MuiButton-root').click()

});

Cypress.Commands.add('editalenter', (nome: string) => {
    cy.wait(1000) // Aguarda 1 segundo para garantir que o login foi concluído
    cy.get('[data-cy="nav-group-edital"] > .sc-Rjrgp').click() //Clica no botão "Home" para retornar à página anterior
    cy.get('[data-cy="nav-item-publicar-edital"] > .css-1dd692o').click()
    cy.get('[data-cy="add-publicar-edital"]').click()
    
    //Identificação do edital
    cy.get("div[title='Fechar menu']").click()
    cy.get('[data-cy="nome"]').type(nome)
    cy.get('[data-cy="next-button"]').click()
    //Identificação do edital

});
Cypress.Commands.add('typeCKEditor', (selector, text) => {
  cy.get(selector).should('be.visible')
  cy.wait(2000)
  cy.get(`${selector} [contenteditable="true"]`)
    .should('exist')
    .click({ force: true })
    .clear()
    .type(text, { delay: 100 })
})


//INFORMAÇÕES DO EDITAL**************************************************************


Cypress.Commands.add('editalinfossimples', () => {
    //Em Restrições
    cy.get('[data-cy="definirDuracaoProjetoEmMeses"]').click()
    cy.get('[data-cy="duracaoProjetoEmMeses"]').type('12')    
    cy.get('[data-cy="next-button"]').click()
    //Em Restrições
});

Cypress.Commands.add('editalinfosmedio', () => {
    //Em Restrições
    cy.get('[data-cy="definirDuracaoProjetoEmMeses"]').click()
    cy.get('[data-cy="duracaoProjetoEmMeses"]').type('12')    
    cy.get('[data-cy="pesquisadorSubmeterVariasPropostas"]').click()
    cy.get('[data-cy="next-button"]').click()
    //Em Restrições

    cy.get('[data-cy="termoDeAceite"]').click().realType('Aceito', { delay: 10 })
    cy.get('[data-cy="next-button"]').click()
    cy.get('[data-cy="texto"]').click().realType('Texto', { delay: 10 })
    cy.get('[data-cy="next-button"]').click()
    cy.get('[data-cy="estado-acre"]').click()
    cy.get('[data-cy="estado-sao-paulo"]').click()
    cy.get('[data-cy="estado-sergipe"]').click()

   
    cy.get('[data-cy="next-button"]').click()
});

Cypress.Commands.add('editalinfos', () => {
    //Em Restrições
    cy.get('[data-cy="definirDuracaoProjetoEmMeses"]').click()
    cy.get('[data-cy="duracaoProjetoEmMeses"]').type('12')    
    cy.get('[data-cy="pesquisadorSubmeterVariasPropostas"]').click()
    cy.get('[data-cy="next-button"]').click()
    //Em Restrições

    cy.get('[data-cy="termoDeAceite"]').click().realType('Aceito', { delay: 10 })
    cy.get('[data-cy="next-button"]').click()
    cy.get('[data-cy="texto"]').click().realType('Texto', { delay: 10 })
    cy.get('[data-cy="next-button"]').click()
    cy.get('[data-cy="estado-todos"]').click()
    cy.get('[data-cy="next-button"]').click()
    let x = 0;
    while (x<=4) {
        cy.wait(300)
        cy.get('[data-cy="perguntaInfoId"]').click().get('[role="option"]').eq(x).click().wait(300)
        cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click()
        x++;
      }
    cy.get('[data-cy="next-button"]').click()
    cy.wait(1000)

    cy.get('[data-cy="editalAnexo-procure"]').selectFile('cypress/arc/Fitness.pdf', {
      action: 'drag-drop'
    })
    cy.wait(1000)
    cy.get('[data-cy="next-button"]').click()
});

//INFORMAÇÕES DO EDITAL**************************************************************
Cypress.Commands.add('editalcronograma', () => {
  //cy.get('[data-cy="cronograma"] > [data-testid="ExpandMoreIcon"]').click()
  cy.get('[data-cy="cronograma"]').click()
  cy.get('[data-cy="periodo-de-submissao"]').click()
  cy.get('[data-cy="add-button"]').click()
  cy.get('[data-cy="chamadaUnsaved.inicio"]').type('01/01/202500:00:00')
  cy.get('[data-cy="chamadaUnsaved.termino"]').type('05/05/202600:00:00')
  cy.get('[data-cy="chamada-confirmar"]').click()
  cy.get('[data-cy="next-button"]').click()
  cy.get('[data-cy="next-button"]').click()
//Cronograma DO EDITAL**************************************************************
});


//ORÇAMENTO DO EDITAL**************************************************************
Cypress.Commands.add('editalorcamento', () => {
  cy.wait(1000)
  cy.get('[data-cy="orcamento"]').click()
  cy.get('[data-cy="programa"]').click()
  cy.get('[data-cy="programaId"]',{timeout:1000}).click().get('[role="option"]').contains('Kihn').click()
  cy.get('[data-cy="add-natureza-da-despesa"]').click()
  cy.get('[data-cy="naturezaDespesaEditalUnsaved.naturezaDespesaId"]').click().get('[role="option"]').contains('Custeio').click()
  cy.get('[data-cy="naturezaDespesaEditalUnsaved.valor"]').click().type('10000')
  cy.get('[data-cy="naturezaDespesaEdital-confirmar"]').click()
  cy.get('[data-cy="next-button"]').click()
});

Cypress.Commands.add('editalrubrica', () => {
  cy.wait(1000)
  cy.get('[data-cy="add-button"]').click()
  cy.get('[data-cy="editalRubricaUnsaved.tipoEditalRubrica"]', {timeout: 1000}).click();
  cy.get('[role="option"]').its('length').then(total => {
    cy.log(`Total de itens: ${total}`);
    cy.get('[data-cy="editalRubrica-cancelar"]').click();
    let x = 1;
    while (x<=total) {
        cy.get('[data-cy="add-button"]').click()
        cy.get('[data-cy="editalRubricaUnsaved.tipoEditalRubrica"]', {timeout: 1000}).click();
        cy.get('[role="option"]').first().click();
        cy.get('[data-cy="editalRubricaUnsaved.naturezaDespesaId"]',{timeout:1000}).click()
        cy.get('[role="option"]').first().click();
        cy.get('[data-cy="editalRubrica-confirmar"]').click()
        x++;
      }
  });
  cy.get('[data-cy="next-button"]').click()
  
//Cronograma DO EDITAL**************************************************************
});


Cypress.Commands.add('editalfaixafinancia', () => {
  cy.get('[data-cy="orcamento"]').click()
  cy.get('[data-cy="faixas-de-financiamento"]').click()
  cy.wait(1000)
  let x = 1;
  while (x<=5) {
    cy.get('[data-cy="add-button"]').click()
    cy.get('[data-cy="faixaFinanciamentoUnsaved.nome"]', {timeout: 1000}).click().type('Faixa '+x);
    cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMinimo"]', {timeout: 1000}).click().clear().type(x+'000'+x)
    cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMaximo"]', {timeout: 1000}).click().clear().type((x+1)+'000'+x);
    cy.get('[data-cy="faixaFinanciamentoUnsaved.observacao"]', {timeout: 1000}).click().type('Observação '+x);
    cy.get('[data-cy="faixaFinanciamento-confirmar"]').click()
    x++;
  }
  cy.get('[data-cy="next-button"]').click()
  
//Cronograma DO EDITAL**************************************************************
});


Cypress.Commands.add('editaldocumentoproposta', () => {
  cy.get('[data-cy="documentos"]').click()
  cy.get('[data-cy="documentos-da-proposta"]').click()
  cy.wait(1000)
  cy.get('[data-cy="documentoPropostaEdital-adicionar"]').click()
  cy.contains('1').should('be.visible').click() // Seleciona o primeiro item da lista
  cy.get('[data-cy="documentoPropostaEdital.0.nome"]').click().type('Documento 0')
  cy.get('[data-cy="documentoPropostaEdital.0.descricao"]').click().type('Descricao 0')
  cy.get('[data-cy="documentoPropostaEdital.0.formatoArquivo"]').click().first().type('PDF').type('{downarrow}').type('{enter}')
  cy.get('[data-cy="documentoPropostaEdital.0.tamanhoArquivo"]').click().type('9')
  cy.get('[data-cy="documentoPropostaEdital-adicionar"]').click()
  
  cy.contains('2').should('be.visible').click() // Seleciona o primeiro item da lista
  cy.get('[data-cy="documentoPropostaEdital.1.nome"]').click().type('Documento 1')
  cy.get('[data-cy="documentoPropostaEdital.1.descricao"]').click().type('Descricao 1')
  cy.get('[data-cy="documentoPropostaEdital.1.formatoArquivo"]').click().first().type('PDF').type('{downarrow}').type('{enter}')
  cy.get('[data-cy="documentoPropostaEdital.1.tamanhoArquivo"]').click().type('9')

  cy.get('[data-cy="next-button"]').click()

  //Cronograma DO EDITAL**************************************************************
});


Cypress.Commands.add('editaldocumentopessoal', () => {
  cy.get('[data-cy="documentos"]').click()
  cy.get('[data-cy="documentos-pessoais"]').click()
  cy.wait(1000)
  let x = 1;
  while (x<=5) {
    cy.get('[data-cy="documentoPessoalEdital-adicionar"]').click()
    cy.contains('1').should('be.visible').click() // Seleciona o primeiro item da lista
    cy.get('[data-cy="documentoPessoalEdital.'+(x-1)+'.documentoPessoalId"]').click().get('[role="option"]').first().click()
    x++;
  }
  cy.get('[data-cy="next-button"]').click()

  //Cronograma DO EDITAL**************************************************************
});
 

Cypress.Commands.add('editalperguntasmedio', () => {
  cy.get('[data-cy="perguntas"]').click()
  cy.get('[data-cy="indicadores-de-producao"]').click()
  let i = 1;
  while (i<=3) {
    cy.wait(1000)
    cy.get('[data-cy="add-button"]').click()
    cy.get('[data-cy="indicadorProducaoUnsaved.id"]').click().wait(500)
    cy.get('[role="option"]').eq(0).click().wait(500)
    cy.get('[data-cy="indicadorProducao-confirmar"]').click().wait(500)
    cy.wait(500)

    i++;
  }
    cy.get('[data-cy="next-button"]').click()
  //Cronograma DO EDITAL**************************************************************
});


Cypress.Commands.add('editalperguntas', () => {
  cy.get('[data-cy="perguntas"]').click()
  cy.get('[data-cy="descricao-do-projeto"]').click()
  let x = 1;
  while (x<=5) {
    
    cy.wait(500)
    cy.get('[data-cy="perguntaDescId"]', {timeout: 1000}).click().wait(100)
    cy.get('[role="option"]').eq(x).click()
    //cy.get('[role="option"]').click();  // terceiro item (índice 2)
    cy.wait(500)
    cy.get('[data-cy="pergunta-adicionar"]').click()
    x++;
  }
  cy.get('[data-cy="next-button"]').click()
  let i = 1;
  while (i<=3) {
    cy.wait(1000)
    cy.get('[data-cy="add-button"]').click().wait(250)
    cy.get('[data-cy="indicadorProducaoUnsaved.id"]').click().wait(250)
    cy.get('[role="option"]').eq(0).click().wait(250)
    cy.get('[data-cy="indicadorProducao-confirmar"]').click().wait(250)
    cy.wait(500)

    i++;
  }
    cy.get('[data-cy="next-button"]').click()
  //Cronograma DO EDITAL**************************************************************
});

Cypress.Commands.add('editalbolsa', () => {
  cy.get('[data-cy="bolsas-do-edital"]').click()
  cy.get('[data-cy="bolsas"]').click()
  let x = 0;
  while (x<=4) {
    
    cy.wait(500)
    cy.get('[data-cy="add-button"]', {timeout: 1000}).click().wait(100)
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]', {timeout: 1000}).click().get('[role="option"]').eq(x).click()
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]', {timeout: 1000}).click().get('[role="option"]').eq(0).click()
    //cy.get('[role="option"]').click();  // terceiro item (índice 2)
    cy.wait(500)
    cy.get('[data-cy="bolsaEdital-confirmar"]').click()
    x++;
  }
  //Cronograma DO EDITAL**************************************************************
});

Cypress.Commands.add('editalsalvafinaliza', () => {
  cy.wait(500)
  cy.get('[data-cy="menu-salvar"]').click()
  cy.get('[data-cy="menu-finalizar"]').click()
  cy.wait(500)
})

//   cy.get('[data-cy="perguntaDescId"]').click()
//   cy.wait(1000)
//   let x = 1;
//   while (x<=5) {
//     cy.get('[data-cy="documentoPessoalEdital-adicionar"]').click()
//     cy.contains('1').should('be.visible').click() // Seleciona o primeiro item da lista
//     cy.get('[data-cy="documentoPessoalEdital.'+(x-1)+'.documentoPessoalId"]').click().get('[role="option"]').first().click()
//     x++;
//   }
//   cy.get('[data-cy="next-button"]').click()

//   //Cronograma DO EDITAL**************************************************************
// });


//PESQUISADOR**************************************************************

Cypress.Commands.add('fazerloginpesquisador', () => {
    cy.visit(sigfapData.url)
    cy.get('#login').type(sigfapData.login_pesq)
    cy.get('#senha').type(sigfapData.senha)
    cy.get('.css-1wz47u4 > .MuiButton-root').click().wait(500) // Aguarda 1 segundo para garantir que o login foi concluído
    cy.get('[data-cy="breadcrumb-home"]').click().wait(500)

});


Cypress.Commands.add('editalenterpesq', (nome: string) => {
  
    cy.wait(500) // Aguarda 1 segundo para garantir que o login foi concluído
    cy.get('[data-cy="editais-ver-mais"]').click() //Clica no botão "Home" para retornar à página anterior
    cy.get('.MuiInputBase-input').click().type(nome)
    cy.get('span').contains('VISUALIZAR EDITAL', { matchCase: false }).click()
    cy.get('[data-cy="criar-proposta"]').click()
    //cy.get('[data-cy="add-publicar-edital"]').type(nome)
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Você já possui uma proposta para este edital.')
      cy.get('[data-cy="breadcrumb-home"]').click().wait(500)
      cy.get('[data-cy="projetos-ver-mais"]').click()
      cy.contains(nome, { matchCase: false })
  .closest(':has([data-testid="KeyboardArrowDownIcon"])')
  .find('[data-testid="KeyboardArrowDownIcon"]')
  .click().get('[aria-label="Editar Proposta"]').click()
    })
});

Cypress.Commands.add('editalsimplespreencher', (nomeedital:string) => {
  
    cy.wait(700) // Aguarda 1 segundo para garantir que o login foi concluído
    cy.get('[data-cy="tituloDoProjeto"]').click().clear().type(nomeedital,{delay:1})
    cy.get('[data-cy="duracao"]').click().type('{backspace}{backspace}{backspace}').type('12')
    cy.get('[data-cy="instituicaoExecutoraId"]').type('ufms/universidade federal do mato grosso do sul').get('[role="option"]').eq(0).click()
    cy.get('[data-cy="unidadeExecutoraId"]').type('FACOM').get('[role="option"]').eq(0).click()
    cy.get('body').then($body => {
      if ($body.find('.MuiAccordionSummary-root').length > 0) {

      } else {
        cy.get('[data-cy="areaDeConhecimento-adicionar"]').click()
        cy.get('.MuiAccordionSummary-root').click()
        cy.get('[data-cy="areaDeConhecimento.0.grandeAreaId"]').click().get('[role="option"]').eq(0).click()
        cy.get('[data-cy="areaDeConhecimento.0.areaId"]').click().get('[role="option"]').eq(0).click()
        cy.get('[data-cy="areaDeConhecimento.0.subAreaId"]').click().get('[role="option"]').eq(0).click()
        cy.get('[data-cy="areaDeConhecimento.0.especialidadeId"]').click().get('[role="option"]').eq(0).click()
      }
    })
   
 
   

    cy.get('[data-cy="next-button"]').click()
    if (cy.contains('estado', { matchCase: false })) {
      cy.get('[data-cy="abrangencia.0.estadoId"]').click().get('[role="option"]').eq(0).click()
      cy.get('[data-cy="abrangencia.0.abrangenciaMunicipio"]').click().wait(400).get('[role="option"]').eq(0).click()
    }else {
      cy.get('[data-cy="abrangencia-adicionar"]').click()
      cy.get('[data-cy="abrangencia.0.estadoId"]').click().get('[role="option"]').eq(0).click()
      cy.get('[data-cy="abrangencia.0.abrangenciaMunicipio"]').click().get('[role="option"]').eq(0).click()
    }

    cy.get('[data-cy="next-button"]').click()
});

Cypress.Commands.add('editalcompletopreencher', (nomeedital:string) => {
  
    cy.wait(700) // Aguarda 1 segundo para garantir que o login foi concluído
    cy.get('[data-cy="tituloDoProjeto"]').click().clear().type(nomeedital)
    cy.get('[data-cy="duracao"]').click().type('{backspace}{backspace}{backspace}').type('12')
    cy.get('[data-cy="instituicaoExecutoraId"]').type('ufms/universidade federal do mato grosso do sul').get('[role="option"]').eq(0).click()
    cy.get('[data-cy="unidadeExecutoraId"]').type('FACOM').get('[role="option"]').eq(0).click()
    
    cy.get('body').then($body => {
      if ($body.find('.MuiAccordionSummary-root').length > 0) {
        cy.get('[data-cy="next-button"]').click()
      } else {
        cy.get('[data-cy="areaDeConhecimento-adicionar"]').click()
        cy.get('.MuiAccordionSummary-root').click()
        cy.get('[data-cy="areaDeConhecimento.0.grandeAreaId"]').click().get('[role="option"]').eq(0).click()
        cy.get('[data-cy="areaDeConhecimento.0.areaId"]').click().get('[role="option"]').eq(0).click()
        cy.get('[data-cy="areaDeConhecimento.0.subAreaId"]').click().get('[role="option"]').eq(0).click()
        cy.get('[data-cy="areaDeConhecimento.0.especialidadeId"]').click().get('[role="option"]').eq(0).click()
        cy.get('[data-cy="next-button"]').click()
      }
    })
  
    cy.get('[data-cy="next-button"]').click()

    cy.get('[data-cy="next-button"]').click()
    cy.get('body').then(($body) => {
      if ($body.text().toLowerCase().includes('estado')) {
        cy.get('[data-cy="abrangencia.0.estadoId"]').click()
          .get('[role="option"]').eq(0).click()
        cy.get('[data-cy="abrangencia.0.abrangenciaMunicipio"]').click()
          .wait(400)
          .get('[role="option"]').eq(0).click()
      } else {
        cy.get('[data-cy="abrangencia-adicionar"]').click()
        cy.get('[data-cy="abrangencia.0.estadoId"]').click()
          .get('[role="option"]').eq(0).click()
        cy.get('[data-cy="abrangencia.0.abrangenciaMunicipio"]').click()
          .get('[role="option"]').eq(0).click()
      }
    })
    cy.get('[data-cy="next-button"]').click()
});
Cypress.Commands.add('editalsimplespreencherapresentacao', () => {
    cy.get('[data-cy="apresentacao"]').click().wait(600)
    cy.get('[data-cy="atividades"]').click()
    cy.get('body').then($body => {
    if ($body.find('.array-panel')) {
      
    }else{
      cy.get('[data-cy="propostaAtividade-adicionar"]').click()
      cy.get('[data-cy="propostaAtividade.0.titulo"]').click().clear().type('At 1')
      cy.get('[data-cy="propostaAtividade.0.mesInicio"]').click().clear().type('1').wait(400).get('[role="option"]').eq(0).click()
      cy.get('[data-cy="propostaAtividade.0.duracao"]').click().clear().type('12').wait(400).get('[role="option"]').eq(0).click()
      cy.get('[data-cy="propostaAtividade.0.cargaHorariaSemanal"]').click().clear().type('8').wait(400).get('[role="option"]').eq(0).click()
      cy.get('[data-cy="propostaAtividade.0.membroResponsavelId"]').click().wait(400).get('[role="option"]').eq(0).click()
    }
    })
    cy.get('[data-cy="next-button"]').click()
});

Cypress.Commands.add('editarinfocomple', () => {
  cy.get('[data-cy="caracterizacao"]').click()
  cy.get('[data-cy="informacoes-complementares"]').click()
  cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-25-item-agronegocios"]').click().wait(500)  
  cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-25-item-energias-renovav"] > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-27"]').click().type('Informacao complementar')  
  cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-26"]').click().type('15122025')
  cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-24-item-media-faturament"]').click()
  cy.get('[data-cy="formularioPropostaInformacaoComplementar.pergunta-23-item-ods02-erradicar"]').click()
  cy.get('[data-cy="menu-salvar"]').click()
  cy.contains('Verificar', { matchCase: false }).click()
  cy.contains('submeter', { matchCase: false }).click()

})

Cypress.Commands.add('editalcompletopreencherapresentacao', () => {
    cy.get('[data-cy="apresentacao"]').click().wait(600)
    cy.get('[data-cy="descricao"]').click()
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-18"]').click().realType('Descri')
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-19"]').click().realType('Just')
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-20"]').click().realType('Obras')
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-7"]').click().realType('Result')
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-5"]').click().realType('Arte')
    cy.get('[data-cy="next-button"]').click()
    cy.get('[id^="mui-"]')
    .should('have.length.gte', 42)
    .each(($el, index) => {
      if (index < 42) {
        cy.wrap($el)
          .should('be.visible')
          .clear({ force: true })
          .type('5', { force: true })
      }
    })
    cy.get('[data-cy="next-button"]').click()
    cy.get('body').then($body => {
    if ($body.find('.array-panel')) {
      
    }else{
      cy.get('[data-cy="propostaAtividade-adicionar"]').click()
      cy.get('[data-cy="propostaAtividade.0.titulo"]').click().clear().type('At 1')
      cy.get('[data-cy="propostaAtividade.0.mesInicio"]').click().clear().type('1').wait(400).get('[role="option"]').eq(0).click()
      cy.get('[data-cy="propostaAtividade.0.duracao"]').click().clear().type('12').wait(400).get('[role="option"]').eq(0).click()
      cy.get('[data-cy="propostaAtividade.0.cargaHorariaSemanal"]').click().clear().type('8').wait(400).get('[role="option"]').eq(0).click()
      cy.get('[data-cy="propostaAtividade.0.membroResponsavelId"]').click().wait(400).get('[role="option"]').eq(0).click()
    }
    })
    cy.get('[data-cy="orcamento"]').click()
    cy.get('[data-cy="faixa-de-financiamento"]').click()
    cy.get('[data-cy="faixaFinanciamentoId"]').click().get('[role="option"]').eq(0).click()
    cy.get('[data-cy="next-button"]').click()
    cy.get('[data-cy="add-button"]').click()
    cy.get('[data-cy="rubricaDiariaUnsaved.estadoId"]').click().get('[role="option"]').eq(0).click()
    cy.get('[data-cy="rubricaDiariaUnsaved.municipio"]').click().get('[role="option"]').eq(0).click()
    cy.get('[data-cy="rubricaDiariaUnsaved.numeroDiaria"]').click().clear().type('1')
    cy.get('[data-cy="rubricaDiariaUnsaved.custoUnitario"]').click().clear().type('11000')
    cy.get('[data-cy="rubricaDiariaUnsaved.mesPrevisto"]').click().get('[role="option"]').eq(0).click()
    cy.get('[data-cy="rubricaDiaria-confirmar"]').click()

});

Cypress.Commands.add('anexoeditalcompleto', () => {
    cy.get('[data-cy="anexos"]').click().wait(600)
    cy.get('[data-cy="documentos-pessoais"]').click()
    cy.get('#select-categories').click().get('[role="option"]').eq(0).click()
    cy.get('.document-uploader').click().selectFile('cypress/arc/Fitness.pdf', {
      action: 'drag-drop'
    })
    cy.get('[data-cy="documentos-da-proposta"]').click()
    cy.get('#select-categories').click().get('[role="option"]').eq(0).click()
    cy.get('.document-uploader').click().selectFile('cypress/arc/Fitness.pdf', {
      action: 'drag-drop'
    })
    cy.get('[data-cy="next-button"]').click()

});
Cypress.Commands.add('termoaceite', () => {
    cy.get('[data-cy="apresentacao"]').click().wait(600)
    cy.get('[data-cy="edital.termoDeAceite"]').click()
    cy.get('[data-cy="termoDeAceiteAceito"]').click()
    cy.contains('Verificar', { matchCase: false }).click()

});