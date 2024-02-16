it('testa a página da política de privacidade de forma independente', function() {
    cy.visit('./src/privacy.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
    cy.contains('CAC TAT - Política de privacidade')
      .should('be.visible')
    cy.get('p')
      .should('have.length', 4)
      .then($paragrafo => {
        const textoParagrafo = $paragrafo.map((index, paragrafo) => Cypress.$(paragrafo).text()).get()
        //Cypress.$ está sendo utilizado para obter o texto de um elemento DOM, no caso o $paragrafo e o .text() retorna o texto contido no elemento
        const textoEsperado = [
            'Não salvamos dados submetidos no formulário da aplicação CAC TAT.',
            'Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real.',
            'No entanto, a aplicação é um exemplo, sem qualquer persistência de dados, e usada para fins de ensino.',
            'Talking About Testing'
        ]
        expect(textoParagrafo).to.eql(textoEsperado)
      })
   })
