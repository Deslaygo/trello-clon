//importacion del manejador de rutas
import {Router} from 'express';
//importacion del controlador
import {indexController} from '../controllers/indexController'

class IndexRoute{

    //instancia del objeto que maneja las rutas
    public router:Router = Router();

    //constuctor de la clase 
    constructor(){
        this.config();
    }

    //Método de configuración de las rutas del index
    public config(){
        //obtiene todas las rutas de index
        this.router.get("/",indexController.index);
    }
}
//instancia del objeto 
const indexRoute= new IndexRoute();
//exportación del objeto por default
export default indexRoute.router;
