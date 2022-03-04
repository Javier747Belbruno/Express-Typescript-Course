import express, { NextFunction, Request, Response } from 'express'

const app = express()

app.use(express.json());



// ROUTES, BUILDER EN ROUTE ('/;)
/*app.route('/')
    .get((req: Request, res: Response) => {
        return res.send("You make a GET request");
    }).post((req: Request, res: Response) => {
        return res.send("You make a POST request");
    }).put((req: Request, res: Response) => {
        return res.send("You make a PUT request");
    }).all((req: Request, res: Response) => {
        return res.send("You make an X request");
    });*/

//ROUTES , REGULAR EXPRESSIONS
/*app.get('/health', (req, res) => res.sendStatus(200));
app.get('/ab*cd', (req, res) => res.send("/ab*cd"));
app.get(/abc/, (req, res) => res.send("/abc"));*/

//ROUTES , PARAMETERS
/*app.get('/api/books/:bookId', (req: Request, res: Response) => {

    console.log(req.params);
    return res.send(req.params)
});
app.get('/api/books/:bookId/:authorId', (req: Request, res: Response) => {

    console.log(req.params);
    return res.send(req.params)
});*/
//NEXT FUNCTION
/*function handleGetBook(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    return res.send(req.params);
};

app.get('/api/books/:bookId/:authorId', handleGetBook);*/

// TWO HANDLERS (MIDDLEWARES)
/*function handleGetBookOne(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);
    next();
};
function handleGetBookTwo(req: Request, res: Response, next: NextFunction) {
    console.log("Second Handler");
    return res.send(req.params);
};
//These handlers are going to be hit in order.
app.get('/api/books/:bookId/:authorId', [handleGetBookOne, handleGetBookTwo]);*/

/*function middleware(req: Request, res: Response, next: NextFunction) {
    //@ts-ignore
    req.name = "Javier";
    next();
}*/

const middleware = ({ name }: { name: string }) => (req: Request, res: Response, next: NextFunction) => {

    res.locals.name = name;
    next();
}

//USE MIDDLEWARE FUNCTION AS A GLOBAL MIDDLEWARE
//A function that return a function. CURRYING TECNIQUE
// Always up over the route functions
app.use(middleware({ name: "Javier747" }));

/*app.get("/api/books/:bookId/:authorId",
    //middleware,
    (req: Request, res: Response, next: NextFunction) => {

        console.log(res.locals.name);

        res.send(res.locals.name)
    });*/
app.get("/api/books/:bookId/:authorId",
    //middleware,
    (req: Request<{ bookId: "string", authorId: "string" }>, res: Response, next: NextFunction) => {


        console.log(res.locals.name);

        res.send(res.locals.name)
    })

// WE CAN ALSO CREATE AN GLOBAL MIDDLEWARE



//HANDLING ERRORS

//Solution provide by express
async function throwsError() {
    throw new Error('Boom!');
}

app.get('/error', async (req, res) => {
    try {
        await throwsError();
        res.sendStatus(200).send("ok")
    } catch (e) {
        res.status(400).send('Something bad happened');
    }

    res.send("ok");
});


app.listen(3000, () => {
    console.log('Application listening at Http://localhost:3000');
});