"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importacion de router
const express_1 = require("express");
const listasController_1 = require("../controllers/listasController");
class ListasRoutes {
    constructor() {
        //instancia del enrutador para las rutas de listas
        this.router = express_1.Router();
        this.config();
    }
    //Método que genera las rutas para el manejo de las listas 
    config() {
        //Configuracion de las rutas y metodos para el manejo de las listas 
        this.router.get("/", listasController_1.listasController.datosListas);
        this.router.post("/", listasController_1.listasController.create);
        this.router.delete("/:id", listasController_1.listasController.delete);
        this.router.put("/:id", listasController_1.listasController.update);
        this.router.get("/tareasLista/:id", listasController_1.listasController.getTareas);
    }
}
//instancia de un objeto de rutas 
const listasRoutes = new ListasRoutes();
//exportación del enrutador
exports.default = listasRoutes.router;
