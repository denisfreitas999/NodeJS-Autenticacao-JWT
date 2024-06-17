const bodyParser = require('body-parser');

const produto = require('./produtoRoute');
const usuarios = require('./usuariosRoute');
const auth = require('./authRoute');
const role = require('./roleRoutes')

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    usuarios,
    produto,
    role
  )
}
