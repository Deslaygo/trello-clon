"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//importacion del controlador tareas 
const tareasController_1 = require("../controllers/tareasController");
class TareasRoutes {
    //constructor de la clase 
    constructor() {
        //instancia de un objeto Router
        this.router = express_1.Router();
        this.config();
    }
    //método que configura todas las rutas de tareas
    config() {
        //configuracion de las rutas de tareas
        this.router.get("/", tareasController_1.tareasController.datosTareas);
        this.router.post("/", tareasController_1.tareasController.create);
        this.router.delete("/:id", tareasController_1.tareasController.delete);
        this.router.put("/:id", tareasController_1.tareasController.update);
    }
}
//Exportacion de un objeto enrutador de tareas
const tareasRoutes = new TareasRoutes();
exports.default = tareasRoutes.router;
