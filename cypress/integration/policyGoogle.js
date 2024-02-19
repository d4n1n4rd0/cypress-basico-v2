/// <reference types='cypress' />

describe('Reforço da aula 07 - Lidando com links que abrem em outra aba', function () {
  
    it('Valida a página de políticas Google', function () {
        cy.visit('https://www.google.com/intl/pt-BR/gmail/about/')
        cy.get('a[href="https://www.google.com/gmail/about/policy/"]')
          .invoke('removeAttr', 'target')
          .click()
          cy.title().should('be.equal', 'Gmail - Free Storage and Email from Google')
    })
})