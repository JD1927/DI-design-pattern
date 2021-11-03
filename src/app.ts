import 'reflect-metadata'; // Habilita los decoradores. Mirar tsconfig.json

import express from 'express'; // Dependencia NodeJS
import Container from 'typedi'; // DI Container
import { UserController } from './controllers/user.controller';

const main = async () => {
  const app = express();
  const port = process.env.PORT || 3000;

  const userController = Container.get(UserController); // Registro de la Clase UserController.
  // Una vez hecho el registro, en tiempo de ejecución se encarga de resolver las dependencias.
  app.get('/users', (req, res) => userController.getAllUsers(req, res));
  app.get('/users/:roleId', (req, res) => userController.getAllUsers(req, res));

  app.listen(port, () => console.log('Server started!'));
};

main().catch((err) => console.error(err));
