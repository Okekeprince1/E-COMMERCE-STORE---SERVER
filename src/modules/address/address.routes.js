import { Router } from 'express';

import { customerAuth } from '../customer'
import { create, getAddress } from './address.controller';

const routes = Router();

routes.post('/',customerAuth, create);
routes.get('/me',customerAuth, getAddress);

export default routes;