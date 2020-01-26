"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importacion del manejo de la base de datos
const database_1 = __importDefault(require("../database"));
class ListasController {
    //Método que obtiene todas las listas en la BD
    datosListas(req, res) {
        const listas = database_1.default.query('select * from listas', (err, result) => {
            if (err)
                throw err;
            res.json(result);
            console.log("Obtenidos los datos de las listas");
        });
    }
    //Método para crear un registro de lista
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into listas set ?', [req.body], (err, result) => {
                if (err)
                    throw err;
                res.json({ message: 'Lista guardada' });
            });
        });
    }
    //Método para eliminar un registro de listas 
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //obtención del id pasado por request
            let id = req.params.id;
            yield database_1.default.query('delete from listas where id = ?', [id], (err, result) => {
                if (err)
                    throw err;
                res.json({ message: 'lista eliminada' });
            });
        });
    }
    //Método para actualizar un registro de listas
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //obteniendo el id del registro con request
            let id = req.params.id;
            yield database_1.default.query('update listas set ? where id = ?', [req.body, id]);
            res.json({ message: 'Registro lista actualizado' });
        });
    }
    //Método que obtiene los registros de tareas relacionados a las listas
    getTareas(req, res) {
        //obtengo y guardo el valor del id traido por request
        let id = req.params.id;
        const tareas = database_1.default.query('select * from tareas where id_lista = ?', [id], (err, result) => {
            if (err)
                throw err;
            res.json(result);
        });
    }
}
//exportacion de la instancia de las clase
exports.listasController = new ListasController();
