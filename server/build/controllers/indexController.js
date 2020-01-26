"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    //Método que regresa la accion para el index 
    index(req, res) {
        res.send("route of index");
    }
}
//creacion del objeto y su exportación 
exports.indexController = new IndexController();
