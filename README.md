# Node.js: Criando API Rest com Autenticação, Perfis de Usuários e Permissões - Alura Course Overview

## Índice
1. [Implementando CRUD de Usuário](#1-implementando-crud-de-usuário)
2. [Implementando a Autenticação](#2-implementando-a-autenticação)
3. [Criando Roles e Permissões](#3-criando-roles-e-permissões)
4. [Cadastro de Perfis e Permissões](#4-cadastro-de-perfis-e-permissões)
5. [Middleware de Permissões](#5-middleware-de-permissões)
6. [Estrutura do Projeto](#6-estrutura-do-projeto)

## Tecnologias Envolvidas
<div style="display: inline_block">
  <img align="center" alt="NodeJS" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
   <img align="center" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
   <img align="center" alt="ExpressJS" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
   <img align="center" alt="Sequelize" src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue"/>
   <img align="center" alt="Postgres" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
   <img align="center" alt="Eslint" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>
</div>


## 1. Implementando CRUD de Usuário
Na primeira etapa do curso, aprendemos a criar a estrutura básica da API e a implementar funcionalidades essenciais de CRUD:
- **Criação de Tabelas**: Utilizamos a CLI do Sequelize para salvar os usuários cadastrados.
- **Rotas com Express**: Diferenciamos cada serviço do CRUD de usuários.
- **Criptografia de Senhas**: Implementamos a criptografia de senhas para aumentar a segurança dos dados dos usuários.
- **Consultas com Sequelize**: Realizamos consultas no banco de dados para buscar e manipular informações.
- **Hash UUID**: Utilizamos hash UUID para aumentar a segurança dos registros no banco de dados.
- **Consumir Serviços REST**: Utilizamos o Postman para testar e consumir os serviços REST.

## 2. Implementando a Autenticação
Na segunda etapa, focamos na implementação de um sistema de autenticação robusto:
- **Login com JWT**: Implementamos um sistema de login seguro utilizando JSON Web Tokens (JWT).
- **Middleware de Autenticação**: Criamos um middleware para verificar se os usuários estão autenticados.
- **Informações do Usuário**: Armazenamos dados da requisição para uso em controllers e services.
- **Hash Únicos para JWT**: Geramos tokens JWT seguros com hashes únicos.

## 3. Criando Roles e Permissões
Na terceira etapa, avançamos na criação e gerenciamento de roles e permissões:
- **CRUD de Perfis de Usuário**: Definimos diferentes tipos de usuários na API.
- **CRUD de Permissões**: Estabelecemos permissões específicas para usuários e perfis de usuário.
- **Referências entre Tabelas**: Configuramos primaryKey e foreignKey para relacionar tabelas.
- **Relacionamentos entre Tabelas**: Compreendemos e implementamos o comportamento dos registros entre tabelas relacionadas.

## 4. Cadastro de Perfis e Permissões
Na quarta etapa, aprendemos a detalhar ainda mais as permissões e perfis:
- **Cadastro de Perfis e Permissões**: Diferenciamos o acesso por níveis hierárquicos.
- **Permissões nos Perfis**: Especificamos permissões para cada tipo de funcionário.
- **Funções Alias do Sequelize**: Utilizamos funções alias para facilitar as ações entre tabelas relacionadas.

## 5. Middleware de Permissões
Na quinta e última etapa, criamos middlewares para gerenciar permissões de acesso:
- **Middleware de Perfis**: Verificamos tipos de usuários com acesso a determinados endpoints.
- **Middleware de Permissões**: Checamos as permissões de acesso a endpoints específicos.
- **Middleware de Permissões por Perfil**: Validamos permissões específicas por perfil de usuário, garantindo segurança e controle de acesso na API.

## 6. Estrutura do Projeto
```
📦curso-nodejs-autenticacao
 ┣ 📂api
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜config.json
 ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📜AuthController.js
 ┃ ┃ ┣ 📜PermissaoController.js
 ┃ ┃ ┣ 📜produtoController.js
 ┃ ┃ ┣ 📜RoleController.js
 ┃ ┃ ┣ 📜SegurancaController.js
 ┃ ┃ ┗ 📜UsuarioController.js
 ┃ ┣ 📂middleware
 ┃ ┃ ┣ 📜autenticado.js
 ┃ ┃ ┣ 📜permissoes.js
 ┃ ┃ ┣ 📜permissoesRoles.js
 ┃ ┃ ┗ 📜roles.js
 ┃ ┣ 📂migrations
 ┃ ┃ ┣ 📜20221222234111-create-produtos.js
 ┃ ┃ ┣ 📜20240616155836-create-usuarios.js
 ┃ ┃ ┣ 📜20240617204556-create-roles.js
 ┃ ┃ ┣ 📜20240617231054-create-permissoes.js
 ┃ ┃ ┣ 📜20240617235457-create-usuarios-roles.js
 ┃ ┃ ┣ 📜20240617235623-create-usuarios-permissoes.js
 ┃ ┃ ┗ 📜20240617235742-create-roles-permissoes.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜permissoes.js
 ┃ ┃ ┣ 📜produtos.js
 ┃ ┃ ┣ 📜roles.js
 ┃ ┃ ┣ 📜roles_permissoes.js
 ┃ ┃ ┣ 📜usuarios.js
 ┃ ┃ ┣ 📜usuarios_permissoes.js
 ┃ ┃ ┗ 📜usuarios_roles.js
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜authRoute.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜permissaoRoute.js
 ┃ ┃ ┣ 📜produtoRoute.js
 ┃ ┃ ┣ 📜roleRoute.js
 ┃ ┃ ┣ 📜segurancaRoute.js
 ┃ ┃ ┗ 📜usuariosRoute.js
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜AuthService.js
 ┃ ┃ ┣ 📜PermissaoService.js
 ┃ ┃ ┣ 📜produtoService.js
 ┃ ┃ ┣ 📜RoleService.js
 ┃ ┃ ┣ 📜SegurancaService.js
 ┃ ┃ ┗ 📜UsuarioService.js
 ┃ ┗ 📜index.js
 ┣ 📂docs
 ┃ ┃ ┗ 📜saiba-mais.md
 ┣ 📜.editorconfig
 ┣ 📜.env
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.sequelizerc
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```
