import express, { Application, Request, Response } from 'express';
import routesPrenda  from '../routes/prendas';
//import { getProductos,getProducto } from '../controllers/prendas';
import  db  from '../db/conection';
import  cors from 'cors';

class Server {
    private app: express.Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbconnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('listening on port '+ this.port)
        })
    }
    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({msg: 'API working' })
        })
        this.app.use('/api/prendas', routesPrenda);
    }
    midlewares() {
        // Pareamos el body
        this.app.use(express.json());
        // Cors
        this.app.use(cors());
    }
    async dbconnect() {
        try {
            db.authenticate();
            console.log('db connected');
        }
        catch (error) {
            console.log(error);
            console.log('Error al conectar ');
        }
    }
}

export default Server;