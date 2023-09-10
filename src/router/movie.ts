import express from 'express';
import { createMovie } from '../controllers/movie';

export default (router: express.Router) => {
  router.post('/api/movies', createMovie);
};


