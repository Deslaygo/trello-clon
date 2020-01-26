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
//importacion del objeto con la conexión a la base de datos
const database_1 = __importDefault(require("../database"));
class TableroController {
    //Método que obtiene todos los registros de tableros 
    listTableros(req, res) {
        const tableros = database_1.default.query('select * from tableros', (err, result, fields) => {
            if (err)
                throw err;
            res.json(result);
            console.log("se obtuvieron los tableros");
        });
    }
    //Método para agregar un tablero
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //insercion en la base de datos con request
            database_1.default.query('insert into tableros set ?', [req.body]);
            res.json({ message: 'Game saved' });
        });
    }
    //Método para eliminar un registro de tableros
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Se obtiene el id por request
            let id = req.params.id;
            //Se hace la consulta para eliminar por el id
            yield database_1.default.query('delete from tableros where id = ?', id);
            res.json({ message: 'Tablero eliminado' });
        });
    }
    //Método para actualizar un registro de tableros 
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //obtengo el id desde request
            let id = req.params.id;
            yield database_1.default.query('update tableros set ? where id = ?', [req.body, id], (err, result) => {
                if (err)
                    throw err;
                res.json({ message: 'El registro tablero se ha actualizado ' });
            });
        });
    }
    //Método para obtener las tareas de un tablero
    getTareas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Variable que trae el id del tablero 
            let id = req.params.id;
            const tareas = yield database_1.default.query('select * from listas where id_tablero = ?', [id], (err, result) => {
                if (err) {
                    throw err;
                }
                else if (result.length == 0) {
                    res.json({ message: 'El tablero no tiene listas' });
                }
                else {
                    res.json(result);
                }
            });
        });
    }
}
//exporto un objeto para los métodos
exports.tableroController = new TableroController();
