# Criação do model de usuarios

npx sequelize-cli model:create --name usuarios --attributes nome:string,email:string,senha:string

# Migração das tabelas para o postgres 16

npx sequelize-cli db:migrate

