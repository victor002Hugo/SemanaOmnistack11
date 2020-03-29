const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Conceito de rotas , e recursos

/**
 * Metodos HTTP
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Altera uma informação no back-end
 * DELETE: Deleta uma informação no back-end
 */

 /**
  * Tipos de parametros
  * Query params: Parametros nomeados enviados na rota após "?"(filtros,paginação)
  * exemplo: http://localhost:3333/users?name=Victor
  * Route params: Parametros utilizados para identificar recursos
  * exemplo: tenho que colocar /:id exemplo para acessar a rota
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */

  /**
   * Banco de dados
   * SQL: MySql,SQlite,PostegreSQL,Oracle,Microsoft sql server
   * NoSql: MongoDB,CouchDB, etc
   */
  /**
   * Drive: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

app.listen(3333);