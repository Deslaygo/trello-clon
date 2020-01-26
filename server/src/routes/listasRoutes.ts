//importacion de router
import {Router} from 'express';

import {listasController} from '../controllers/listasController';

class ListasRoutes{
    //instancia del enrutador para las rutas de listas
    public router:Router = Router();

    constructor(){
        this.config();
    }
    //Método que genera las rutas para el manejo de las listas 
    public config(){
        //Configuracion de las rutas y metodos para el manejo de las listas 
        this.router.get("/",listasController.datosListas);
        this.router.post("/",listasController.create);
        this.router.delete("/:id",listasController.delete);
        this.router.put("/:id",listasController.update);
        this.router.get("/tareasLista/:id",listasController.getTareas);
    }
}
//instancia de un objeto de rutas 
const listasRoutes = new ListasRoutes();
//exportación del enrutador
export default listasRoutes.router;