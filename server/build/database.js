"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importación de los modulos para trabajar con mysql
const mysql_1 = __importDefault(require("mysql"));
//importación del archivo con los parametros de la base de datos
const keys_1 = __importDefault(require("./keys"));
//constante para la conexión con la bd
const pool = mysql_1.default.createPool(keys_1.default.database);
//Se obtiene la conexion con la BD
pool.getConnection((err, connection) => {
    if (err)
        throw err;
    connection.release();
    console.log("Database is connected");
});
//exportacion del objeto para la base de datos
exports.default = pool;
