<h1 align="center">
    MeetApp API
    </br>
    <img alt="Yare Yare daze" src="https://i.imgur.com/3cqc6DD.png" />
  
</h1>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/thejoaov/bootcamp-meetapp-api.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/thejoaov/bootcamp-meetapp-api.svg">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/thejoaov/bootcamp-meetapp-api.svg">
  <a href="https://github.com/thejoaov/bootcamp-meetapp-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/thejoaov/bootcamp-meetapp-api.svg">
  </a>
  <img alt="GitHub package.json dynamic" src="https://img.shields.io/github/package-json/keywords/thejoaov/bootcamp-meetapp-api">
  <a href="https://github.com/douglasporto/meetapp-gostack/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/thejoaov/bootcamp-meetapp-api.svg">
  </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/thejoaov/bootcamp-meetapp-api.svg">
</p>


API do projeto MeetAppp desenvolvido durante o Bootcamp GoStack 8 da Rocketseat.

O projeto foi criado utilizando [Sequelize ORM](https://sequelize.org/), juntamente com o gerenciador de pacotes [Yarn](https://yarnpkg.com/pt-BR/), para o desafio final do Bootcamp GoStack 8.

---
# Rodando o projeto localmente

### 1 - Requisitos:
- [Docker](https://docs.docker.com/install/)
- [Docker compose](https://docs.docker.com/compose/install/)
- [Node ^10](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/)

### 2 - Variáveis de ambiente
Crie um arquivo .env na raiz do projeto, basta copiar o conteúdo do .env.example

### 3 - Instale as bibliotecas
Instale as dependências na raiz do projeto.
```
$ yarn
```
_OBS: recomendável a instalação do sequelize-cli de forma global._

yarn:
```
$ yarn global add sequelize-cli
```
npm:
```
$ npm i -g sequelize-cli
```

### 4 - Inicie a aplicação
A aplicação inicia todos os serviços a partir do comando
```
$ docker-compose up
```
O docker vai iniciar um container para cada serviço na seguinte ordem:
- Container do Postgres, com o o banco de dados Postgres (Para os dados da aplicação);
- Container do Redis, com o o banco de dados Redis (Para a fila de tarefas do Kue);
- Container do Mailhog (para depuração de envio de emails), acessível através do endereço [localhost:8025](http://localhost:8025)
- Container do processo da Queue do [Bee-queue](https://bee-queue.com/) (Fila de trabalhos);
- Container do processo da documentação, rodando o servidor estático da documentação (Docs), acessível através do endereço [localhost:5000](http://localhost:5000)
- Container do processo do App, rodando o processo principal da API (Server), acessível através do endereço [localhost:3333](http://localhost:3333)

### 5 - Rode as migrations
A aplicação está iniciada, porém, o banco de dados ainda não possui a estrutura definida pelas [_migrations_](https://sequelize.org/master/manual/migrations.html) do Sequelize.
Na raiz do projeto, num terminal separado, rode o comando:
```
$ sequelize db:migrate
```
_OBS: Se você não instalou o Sequelize de forma global, também pode rodar diretamente:
```
$ npx sequelize-cli db:migrate
```
_Assim o [npx](https://www.npmjs.com/package/npx) vai se encarregar de baixar o binário e executar de forma automática :D_

### 6 - (Opcional) Insomnia
O Insomnia é uma ferramenta de testes de rotas, muito eficiente e prático, leve e customizável. Link para download na [Página oficial](https://insomnia.rest/download/).

A partir daqui, a aplicação já estará pronta para receber as requisições. Se deseja testar as rotas, o arquivo com a configuração de rotas para teste no insomnia está na pasta [docs/insomnia.json](https://github.com/thejoaov/bootcamp-meetapp-api/blob/master/docs/insomnia.json)
Faça o download e importe no programa.

![](https://i.imgur.com/wTn2ltn.png)

---
# Documentação

A documentação da API está disponível ao rodar a aplicação com o ```docker-compose up```, no endereço [localhost:5000](http://localhost:5000), ou no [Github Pages](https://thejoaov.github.io/bootcamp-meetapp-api/).

---
# Issues

- [Bugs](https://github.com/thejoaov/bootcamp-meetapp-api/issues/new?assignees=&labels=bug&template=bug_report.md&title=Bug)
- [Sugestões (Feature Requests)](https://github.com/thejoaov/bootcamp-meetapp-api/issues/new?assignees=&labels=&template=feature_request.md&title=)
