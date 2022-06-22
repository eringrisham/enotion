import Express from 'express';
import router from './routes';
const app = Express();
const port = 3014;

// the body parser
app.use(Express.json());

// serve up static files
app.use(Express.static(__dirname + '/../client/dist'));

app.use(Express.json());

import cors from 'cors';
app.use(cors());

// Set up our routes
app.use('/notes', router);

app.get('/', (req: Express.Request, res: Express.Response) => res.json({ message: 'Hello World' }));

app.listen(port, () => console.log(`App listening on port ${port}!`));
