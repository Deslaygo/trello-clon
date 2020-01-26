"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importacion de la clase de rutas router 
const express_1 = require("express");
//importacion del controlador
const tableroController_1 = require("../controllers/tableroController");
class TableroRoutes {
    //constructor
    constructor() {
        //instancia del objeto router para la configuracion de rutas
        this.router = express_1.Router();
        //Se carga el método qeu contiene las rutas
        this.config();
    }
    config() {
        this.router.get("/", tableroController_1.tableroController.listTableros);
        this.router.post("/", tableroController_1.tableroController.create);
        this.router.delete("/:id", tableroController_1.tableroController.delete);
        this.router.put("/:id", tableroController_1.tableroController.update);
        this.router.get("/listasTablero/:id", tableroController_1.tableroController.getTareas);
    }
}
//instancia de la clase
const tableroRoutes = new TableroRoutes();
//exportacion del objeto y el manejador de rutas
exports.default = tableroRoutes.router;
