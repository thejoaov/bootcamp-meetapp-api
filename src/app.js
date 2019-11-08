import './bootstrap';

import path from 'path';
import cors from 'cors';

import express from 'express';
import 'express-async-errors';
import Youch from 'youch';
import 'dotenv/config';
import * as Sentry from '@sentry/node';

import './database';
import routes from './routes';

import sentryConfig from './config/sentry';

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.server.use(Sentry.Handlers.requestHandler());
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Deu ruim aqui no servidor.' });
    });
  }
}

export default new App().server;
