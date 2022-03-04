import express from 'express'
/* Routes imports Controller, Controller imports Services, Services imports Models */
import routes from './routes';

import helmet from 'helmet'

const app = express()

app.use(helmet());

app.use(express.json());

routes(app);

app.listen(3000, () => {
    console.log('Application listening at Http://localhost:3000');
});