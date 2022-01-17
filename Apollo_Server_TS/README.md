<div align="center">
  <img src="readme/nodejs_animation.gif" width="250" height="250">
</div>

<h1 align="center"> NodeJs - TypeGraphQL - ApolloServer </h1>

## 🧑🏻‍💻🧑🏻‍💻Desenvolvido por

@[AdaoBJr](https://bitbucket.org/AdaoBJr/)
<br>

---

## 💡 Sobre o Projeto

No Projeto NodeJs-TypeGraphQL-ApolloServer foi implementado um CRUD para a fixacao dos conhecimento das tecnologias do ApolloServer (TypeGraphQL) e TypeScript.

## 🛠 Tecnologias Usadas

- NodeJS
- Apollo-Server
- TypeScript
- TypeGraphQL
- Express
- GraphQL
- Babel
- GraphQL-Tools

## 🧙‍♂️ Como Iniciar o Projeto

Primeiro faça a clonagem do projeto em algum diretorio do seu computador:

```bash
> cd ~
> cd Documents/Mcx
> git clone git@github.com:AdaoBJr/ApolloServer_TS.git
> cd apolloserver_ts
```

Depois disso instale as dependências:

```bash
> yarn ou npm install
```

Caso vc não tenha o Docker instalado em sua máquina, realize a instalação
de acordo com a documentação: https://www.docker.com/get-started

Com o docker devidamente instalado e dentro da pasta do projeto
inicie os docker containers MongoDB rodando:

```bash
> make up
```

Por fim, rode o seguinte script para iniciar o projeto:

```bash
> yarn start
```

O projeto vai iniciar em http://localhost:3000/graphql.
