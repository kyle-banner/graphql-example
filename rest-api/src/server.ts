import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import Controller from './controller';
import container from './inversify.config';
import { TYPES } from './types';
import { createConnection } from 'typeorm';

class App {
  public app!: express.Application;

  constructor() {
    process.env.MOCKS = 'true';
    if (process.env.MOCKS) {
      this.startExpress(true);
    } else {
      createConnection()
      .then(async (connection) => {
        this.startExpress();
      })
      // tslint:disable-next-line:no-console
      .catch((error) => console.log(error));
    }
  }

  startExpress(mocks: boolean = false) {
    this.app = express();
    this.app.use(bodyParser.json());
    const controllers = [
      container.get<Controller>(TYPES.EmployeesController),
      container.get<Controller>(TYPES.MeetingsController),
    ];
    controllers.forEach((controller) => {
      this.app.use(controller.basePath, controller.router);
    });
    this.app.get('/', (req, res, next) => {
      res.send('Healthy');
    });
    this.app.listen(8080, () => {
      // tslint:disable-next-line:no-console
      if(mocks) {
        console.log(`Server listening http://localhost:8080/ with mocks on`);
      } else {
        console.log(`Server listening http://localhost:8080/`);
      }
    });
  }
}

const app: App = new App();
