require('dotenv').config();
import express from 'express';
import middlewareConfig from './config/middleware';

import './config/db';

import { CustomerRoutes, AddressRoutes } from './modules';

const app = express();

middlewareConfig(app);

app.get('/',(req, res) => {
    res.send('E commerce store app running created by Okeke Chidiebube');
})

app.use('/api/v1/customers', CustomerRoutes);
app.use('/api/v1/addresses', AddressRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    }
    {
        console.log(`SERVER running on PORT: ${PORT}`);
    }
})