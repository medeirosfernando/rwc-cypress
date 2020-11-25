![N|Solid](https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/59c46/cypress-logo.webp)

# Semana Agilizei - Desafio 02

Projeto desenvolvido para o bootcamp da semana agilizei - https://agilizei.com/agilizei-bootcamp/

# Tecnologias

  - Cypress @ 6.0.0
  - NodeJS @ v14.15.0
  - NPM @ 6.14.8

# Dependências

  - faker js
  
# Desafio

  - Criar teste para cadastrar novo usuário
  - Criar teste para login do usuário cadastrado
  - Criar teste para criar e publicar um artigo
  - Implementar page objects
  - Criar asserções com rotas
  - Separar as responsábilidades das partes dos testes usando o conceito AAA (Arrange/ Action/ Assert)
  - Configurar a pipeline de testes no Azure
  - Implementar a publicação dos relatórios na Azure

# Passos para executar o projeto

  - Clonar o repositório
  - Dentro da raiz do projeto, executar o comando [npm install]
  - Executar os comandos a seguir para rodar os testes em modo headless nos navegadores:
  
    - Electron [npm run cy:run:electron]
    - Chrome: [npm run cy:run:chrome]
    - Firefox: [npm run cy:run:firefox]


Caso deseje visualizar a reprodução dos vídeos após executar os testes em modo headless, basta acessar o diretório cypress/videos. 
A seguir seguem gifs com testes executados em modo headless via console do VScode. 

  - Testes em modo headless via console do VsCode - ![agilizei-rwc-run-testes](https://user-images.githubusercontent.com/25454762/100291909-d069f100-2f5d-11eb-80ff-0a06207020ce.gif)

  - Vídeo da página de Cadastro ![agilizei-cadastro](https://user-images.githubusercontent.com/25454762/100291391-6ac93500-2f5c-11eb-878c-e51659213b20.gif)

  - Vídeo da página de Login ![agilizei-login](https://user-images.githubusercontent.com/25454762/100291392-6bfa6200-2f5c-11eb-9c1e-bc1184fbe327.gif)

  - Vídeo da página de Artigos ![agilizei-artigos](https://user-images.githubusercontent.com/25454762/100291387-669d1780-2f5c-11eb-9c50-715046f03394.gif)


### Azure Pipeline + Reports

O projeto está configurado para rodar em uma pipeline da azure.

https://dev.azure.com/fernandomede/Agilizei%20Bootcamp%20N2/_build/results?buildId=4&view=results


