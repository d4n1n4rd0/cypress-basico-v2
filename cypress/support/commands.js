Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("Nome");
  cy.get("#lastName").type("Teste");
  cy.get("#email").type("teste@teste.com");
  cy.get("#open-text-area").type("teste");
  cy.get('button[type="submit"]').click();
});
