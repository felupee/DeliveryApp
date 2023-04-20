<p align="center">
  <img src="https://user-images.githubusercontent.com/94487469/233402570-6b3f52a3-48be-4d04-9d08-db3c73e0d8ad.png">
</p>

Olá, seja bem vindo ao repositório do projeto Delivery App! Aqui você irá aprender como instalar e testar esse projeto na sua máquina, mas caso você queira ver o projeto funcionando, bem como a sua proposta, basta clicar [aqui](https://felupee.github.io/full-stack/projetos/deliveryApp/deliveryApp.html) e você vai ser redirecionado para o meu portifólio explicando tela a tela dessa aplicação.

Esse projeto foi feito com trabalho em grupo com outros três colegas, onde trabalhamos com versinamento de código e organizamos requisito a requisito com DMs diárias. Essa é uma aplicação feita em React.js, com componente funcional. A API na qual o mesmo consome foi feita em Node.js com Express.


## Como usar :computer: :rocket: 

Basta baixar ou clonar esse repositório e seguir todos os passos abaixo.

### Requisitos :clipboard: 

Esse projeto requer que você tenha o node e docker instalado na sua máquina, pois o banco de dados MySQL roda em um container que é executado rodando o docker-compose. Contudo, se você tiver o MySQL instalado na sua máquina, basta configurar um arquivo `.env` com as credenciais do banco.

### Instalação :wrench:
#### Com docker:

- Rode o serviço `node` e `db` com o comando `docker-compose up -d.`

Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;
Esses serviços irão inicializar um container chamado `app-delivey` e outro chamado `delivery-app-db`;
A partir daqui você pode rodar o container `app-delivey` via CLI ou abri-lo no VS Code.

- Use o comando `docker exec -it app-delivey bash` e sigas passos abaixo.
Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- Instale as dependências com `npm install`.

#### Sem docker:

- Instale as dependências com `npm install`

Para rodar o projeto desta forma, obrigatoriamente você deve ter o node e o MySQL instalado em seu computador.

### Configuração :gear:

Depois de instalar as dependências, você vai precisar criar o banco de dados na qual a API vai consumir. Isso é bem simples porque utilizando o sequelize, com apenas um comando, todo o banco é criado o populado.

- Caso você não tenha optado por usar o docker, você precisa ter o MySQL instalado na sua máquina, caso contrário, o container já está configurado.

- Entre na pasta `back-end` e execute o comando `npm run db:reset`.

Esse é um comando predefinido com scripts do sequelize, caso sinta curiosidade a mais, você pode consultar o `package.json` do projeto.

Depois do banco criado e populado, você precisa rodar o comando `npm run start` para deixar o server online e o front-end conseguir fazer requisições. 


### Execução :runner:

Agora basta voltar a pasta raiz do projeto e entrar em `front-end` e executar o comando `npm start` para executar a aplicação React.

## Contato :telephone_receiver:

Caso você tenha alguma dúvida sobre esse projeto ou queira da um feedback você encontra minha redes sociais no meu portifólio clicando [aqui](https://felupee.github.io/#contact).
