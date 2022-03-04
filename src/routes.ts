import { Express } from 'express'
import getBookHandler from './controllers/books.controller'


function routes(app: Express) {
    app.get('/api/books/:bookId/:authorId', getBookHandler);
}

export default routes;



