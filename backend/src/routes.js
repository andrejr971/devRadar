import { Router } from 'express';

import DevController from './app/controllers/DevController';
import SearchController from './app/controllers/SearchController';

const routes = new Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.get('/dev/:id', DevController.show);
routes.put('/devs/:id', DevController.update);
routes.delete('/devs/:id', DevController.destroy);

routes.get('/search', SearchController.index);

export default routes;
