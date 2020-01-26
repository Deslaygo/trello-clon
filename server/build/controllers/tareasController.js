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
//importación para el uso de la base de datos
const database_1 = __importDefault(require("../database"));
class TareasController {
    //Método que obtiene todas las tareas
    datosTareas(req, res) {
        const tareas = database_1.default.query('select * from tareas', (err, result, fields) => {
            if (err)
                throw err;
            res.json(result);
            console.log("se obtuvieron las tareas");
        });
    }
    //Método para crear un registro tarea
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into tareas set ?', [req.body]);
            res.json({ message: 'Tarea guardada' });
        });
    }
    //Método para eliminar un registro tarea
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //se obtiene el id por request
            let id = req.params.id;
            //consulta para la eliminacion
            yield database_1.default.query('delete from tareas where id = ?', [id], (err, result) => {
                if (err)
                    throw err;
                res.json({ message: 'Tarea eliminada' });
            });
        });
    }
    //Método para actualizar una tarea 
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //se obtiene el id pasado por parametro por request
            let id = req.params.id;
            yield database_1.default.query('update tareas set ? where id = ?', [req.body, id]);
            res.json({ message: 'Tarea actualizada ' });
        });
    }
}
//exportacion de la instancia de la clase
exports.tareasController = new TareasController();
