import express, { Request, Response } from 'express'

const app = express()

// This is a custom Middleware
app.use(express.json());

// pass urls enconded
//app.use(express.urlencoded({ extended: true }));

// Works for all methods! GET POST PUT DELETE PATCH
app.all('/api/all', (req: Request, res: Response) => {

    return res.sendStatus(200);

})

//GET
app.get('/', (req: Request, res: Response) => {

    //return res.send("Hello world!");
    /*return res.json({
        success: true,
        name: 'Javier'
    })*/
    //return res.redirect("http://example.com")


});

// By default express doesn't send the body, so, 
app.post('/api/data', (req: Request, res: Response) => {
    console.log(req.body);

    return res.sendStatus(200);

})

app.listen(3000, () => {
    console.log('Application listening at Http://localhost:3000');
});