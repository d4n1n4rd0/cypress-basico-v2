# Testes automatizados com Cypress - Básico

Projeto de automação de testes E2E com Cypress em uma aplicação simulando uma Central de Atendimento ao Cliente (CAT TAT)

## Abordagem Cypress:

- Configurando um projeto Cypress do zero
- Visitar páginas locais e remotas
- Lidar com os elementos mais comuns encontrados em aplicações web
- Testar _upload_ de arquivos
- Realizar as mais diversas verificações de resultados esperados
- Criar comandos customizados
- Lidar com links que abrem em outra aba do navegador
- Rodar testes simulando as dimensões de um dispositivo móvel
- Resolver os mesmos problemas de diferentes formas, conhecendo a [API do Cypress](https://docs.cypress.io/api/table-of-contents)
- Executar os testes em um _pipeline_ de integração contínua sempre que mudanças ocorrerem no código da aplicação (ou dos testes)
- Criar uma documentação mínima para seu projeto de testes automatizados

## Pré requisitos:
- Git versão 2.25.1
- Node.js versão 20.11.0
- Cypress versão 9.7.0

## Instalação das dependências de desenvolvimento

Visto que tais dependências já estão listadas no arquivo package.json, basta executar o comando npm install (ou npm i - versão curta) na raiz do projeto.

## Tests

Execute o comando npm test (ou npm t - versão curta) para rodar os testes em modo headless.

Ou, execute o comando npm run cy:open para abrir o Cypress no modo interativo.
