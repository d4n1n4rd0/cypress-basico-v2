/// <reference types='cypress' />

describe("Central de Atendimento ao Cliente TAT - Aula 01 e 02", function () {
  beforeEach(() => {
    cy.visit("./src/index.html")
  })

  //Aula 01

  it("verifica o título da aplicação", function () {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT")
  })

  //Aula 02
  it("preenche os campos obrigatórios e envia o formulário", function () {
    const longText =
      "Lorem ipsum dolor sit amet. In beatae omnis id labore harum sed sint quos qui nisi facilis sit voluptates nihil est atque omnis qui nobis perspiciatis. Ad provident tempora ad sint voluptatum est eius numquam non magni galisum ad quos atque. A quasi error At consequatur itaque est fugit laudantium."

    cy.get("#firstName").type("Teste")
    cy.get("#lastName").type("123")
    cy.get("#email").type("teste@teste.com")
    cy.get("#open-text-area").type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()
    cy.get(".success").should("be.visible")
  })

  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    cy.get("#firstName").type("Teste")
    cy.get("#lastName").type("123")
    cy.get("#email").type("teste@teste")
    cy.get("#open-text-area").type("teste")
    cy.get('button[type="submit"]').click()
    cy.get(".error").should("be.visible")
  })

  it("campo telefone continua vazio quando preenchido valor não-numérico", function () {
    cy.get("#phone").type("testeTeste").should("have.value", "")
  })

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function () {
    cy.get("#firstName").type("Teste")
    cy.get("#lastName").type("123")
    cy.get("#email").type("teste@teste.com")
    cy.get("#open-text-area").type("teste")
    cy.get("#phone-checkbox").check()
    cy.get('button[type="submit"]').click()
    cy.get(".error").should("be.visible")
  })

  it("preenche e limpa os campos nome, sobrenome, email e telefone", function () {
    cy.get("#firstName")
      .type("Nome")
      .should("have.value", "Nome")
      .clear()
      .should("have.value", "")
    cy.get("#lastName")
      .type("Teste")
      .should("have.value", "Teste")
      .clear()
      .should("have.value", "")
    cy.get("#email")
      .type("teste@teste.com")
      .should("have.value", "teste@teste.com")
      .clear()
      .should("have.value", "")
    cy.get("#phone")
      .type("999999999")
      .should("have.value", "999999999")
      .clear()
      .should("have.value", "")
  })

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", function () {
    cy.get('button[type="submit"]').click()
    cy.get(".error").should("be.visible")
  })

  it("envia o formuário com sucesso usando um comando customizado", function () {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get(".success").should("be.visible")
  })

  it("utilizando o cy.contains", function () {
    cy.contains("button", "Enviar").click()
  })

  //Aula 03

  it("seleciona um produto (YouTube) por seu texto", function () {
    cy.get("#product").select("YouTube").should("have.value", "youtube")
  })

  it("seleciona um produto (YouTube) por seu texto", function () {
    cy.get("#product").select("mentoria").should("have.value", "mentoria")
  })

  it("seleciona um produto (Blog) por seu índice", function () {
    cy.get("#product").select(1).should("have.value", "blog")
  })

  //Aula 04

  it('marca o tipo de atendimento "Feedback"', function () {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should("be.checked")
  })

  it("marca cada tipo de atendimento", function () {
    cy.get('input[type="radio"]')
      .should("have.length", 3)
      .each(function ($radio) {
        cy.wrap($radio).check().should("be.checked")
      })
  })

  //Aula 05

  it("marca ambos checkboxes, depois desmarca o último", function () {
    cy.get('input[type="checkbox"]')
      .check()
      .should("be.checked")
      .last()
      .uncheck()
      .should("not.to.be.checked")
  })
})
