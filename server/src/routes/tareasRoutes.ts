import {Router} from 'express';

//importacion del controlador tareas 
import {tareasController} from '../controllers/tareasController';
class TareasRoutes{
    //instancia de un objeto Router
    public router:Router = Router();
    //constructor de la clase 
    constructor(){
        this.config();
    }
    //método que configura todas las rutas de tareas
    public config(){
        //configuracion de las rutas de tareas
        this.router.get("/",tareasController.datosTareas);
        this.router.post("/",tareasController.create);
        this.router.delete("/:id",tareasController.delete);
        this.router.put("/:id",tareasController.update);
    }
}
//Exportacion de un objeto enrutador de tareas
const tareasRoutes = new TareasRoutes();
export default tareasRoutes.router;
