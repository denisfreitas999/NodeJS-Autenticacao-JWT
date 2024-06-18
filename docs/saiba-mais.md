# Criação do model de usuarios

npx sequelize-cli model:create --name usuarios --attributes nome:string,email:string,senha:string

npx sequelize-cli model:create --name roles --attributes nome:string,descricao:string

npx sequelize-cli model:create --name permissoes --attributes nome:string,descricao:string

npx sequelize-cli model:create --name usuarios_roles --attributes usuario_id:uuid,role_id:uuid

npx sequelize-cli model:create --name usuarios_permissoes --attributes usuario_id:uuid,permissoes_id:uuid

npx sequelize-cli model:create --name roles_permissoes --attributes role_id:uuid,permissoes_id:uuid

# Migração das tabelas para o postgres 16

npx sequelize-cli db:migrate

npx sequelize-cli db:migrate:undo