/// <reference types='cypress' />

describe('Central de Atendimento ao Cliente TAT', function () {
  beforeEach(() => {
    cy.visit('index.html')
  })
  //Aula 01 - Introdução | Estrutura do curso | Pré-requisitos | Conhecendo a aplicação
  //Aula 02 - Primeiro teste em Cypress

  it('verifica o título da aplicação', function () {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  //Aula 03 - Localizando, digitando e clicando em elementos

  it('preenche os campos obrigatórios e envia o formulário', function () {
    const longText =
      'Lorem ipsum dolor sit amet. In beatae omnis id labore harum sed sint quos qui nisi facilis sit voluptates nihil est atque omnis qui nobis perspiciatis. Ad provident tempora ad sint voluptatum est eius numquam non magni galisum ad quos atque. A quasi error At consequatur itaque est fugit laudantium.'

    cy.get('#firstName').type('Teste')
    cy.get('#lastName').type('123')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
    cy.get('#firstName').type('Teste')
    cy.get('#lastName').type('123')
    cy.get('#email').type('teste@teste')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('campo telefone continua vazio quando preenchido valor não-numérico', function () {
    cy.get('#phone').type('testeTeste').should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function () {
    cy.get('#firstName').type('Teste')
    cy.get('#lastName').type('123')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type('teste')
    cy.get('#phone-checkbox').check()
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
    cy.get('#firstName')
      .type('Nome')
      .should('have.value', 'Nome')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('Teste')
      .should('have.value', 'Teste')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('teste@teste.com')
      .should('have.value', 'teste@teste.com')
      .clear()
      .should('have.value', '')
    cy.get('#phone')
      .type('999999999')
      .should('have.value', '999999999')
      .clear()
      .should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function () {
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })

  it('envia o formuário com sucesso usando um comando customizado', function () {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
  })

  it('utilizando o cy.contains', function () {
    cy.contains('button', 'Enviar').click()
  })

  //Aula 04 - Selecionando opções em campos de seleção suspensa

  it('seleciona um produto (YouTube) por seu texto', function () {
    cy.get('#product').select('YouTube').should('have.value', 'youtube')
  })

  it('seleciona um produto (YouTube) por seu texto', function () {
    cy.get('#product').select('mentoria').should('have.value', 'mentoria')
  })

  it('seleciona um produto (Blog) por seu índice', function () {
    cy.get('#product').select(1).should('have.value', 'blog')
  })

  //Aula 05 - Marcando inputs do tipo 'radio'

  it('marca o tipo de atendimento "Feedback"', function () {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
  })

  it('marca cada tipo de atendimento', function () {
    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function ($radio) {
        cy.wrap($radio).check().should('be.checked')
      })
  })

  //Aula 06 - Marcando e desmarcando inputs do tipo 'checkbox'

  it('marca ambos checkboxes, depois desmarca o último', function () {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.to.be.checked')
  })

  //Aula 07 - Fazendo upload de arquivos com Cypress

  it('seleciona um arquivo da pasta fixtures', function () {
    cy.get('input[type="file"]#file-upload')
      .should('not.have.value')
      .selectFile('cypress/fixtures/example.json')
      .should( function($input) {
        console.log($input)
        expect($input[0].files[0].name).to.equal('example.json')
      })
  })

  it('seleciona um arquivo simulando um drag-and-drop', function () {
    cy.get('#file-upload')
      .should('not.have.value')
      .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
      .then($input => {
        expect($input[0].files[0].name).to.equal('example.json')
      }) 
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function () {
      cy.fixture('example.json').as('exampleFile')
      cy.get('input[type="file"]')        
        .should('not.have.value')
        .selectFile('@exampleFile')
        .then(function($input) {
          expect($input[0].files[0].name).to.equal('example.json')
      }) 
  })

   //Aula 08 - Lidando com links que abrem em outra aba

   it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
    cy.get('#privacy a')
      .should('have.attr', 'target', '_blank')
   })

   it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
    cy.get('a[href="privacy.html"]')
      .invoke('removeAttr', 'target')
      .click()
   })

  //Aula 09 - Simulando o viewport de um dispositivo móvel 
  //Criado script "cy:open-mobile" no arquivo package.json para rodar os testesmodo interativo
  //Criado script "cy:run-mobile" no arquivo package.json para rodar os testes no modo headless

  //Aula 10 - Documentaçã do projeto
  //Atualização do arquivo readme

  //Aula 11 - Integração contínua (CI) com GitHub Actions
})
