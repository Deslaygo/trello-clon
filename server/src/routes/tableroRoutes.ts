//importacion de la clase de rutas router 
import {Router} from 'express';
//importacion del controlador
import {tableroController} from '../controllers/tableroController'

class TableroRoutes{
    //instancia del objeto router para la configuracion de rutas
    public router:Router = Router();
    //constructor
    constructor(){
        //Se carga el método qeu contiene las rutas
        this.config();
    }
    public config():void{
        this.router.get("/",tableroController.listTableros);
        this.router.post("/",tableroController.create);
        this.router.delete("/:id",tableroController.delete);
        this.router.put("/:id",tableroController.update);
        this.router.get("/listasTablero/:id",tableroController.getTareas);
    }
}
//instancia de la clase
const tableroRoutes = new TableroRoutes();
//exportacion del objeto y el manejador de rutas
export default tableroRoutes.router;