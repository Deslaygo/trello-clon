"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importacion del manejador de rutas
const express_1 = require("express");
//importacion del controlador
const indexController_1 = require("../controllers/indexController");
class IndexRoute {
    //constuctor de la clase 
    constructor() {
        //instancia del objeto que maneja las rutas
        this.router = express_1.Router();
        this.config();
    }
    //Método de configuración de las rutas del index
    config() {
        //obtiene todas las rutas de index
        this.router.get("/", indexController_1.indexController.index);
    }
}
//instancia del objeto 
const indexRoute = new IndexRoute();
//exportación del objeto por default
exports.default = indexRoute.router;
