import { Router } from 'express';

import { customerAuth } from '../customer'
import { create } from './address.controller';

const routes = Router();

routes.post('/',customerAuth, create);

export default routes;