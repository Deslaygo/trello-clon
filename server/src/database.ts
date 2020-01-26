//importación de los modulos para trabajar con mysql
import mysql from 'mysql';
//importación del archivo con los parametros de la base de datos
import keys from './keys';

//constante para la conexión con la bd
const pool = mysql.createPool(keys.database);

//Se obtiene la conexion con la BD
pool.getConnection((err,connection)=>{
    if(err) throw err;
    connection.release();
    console.log("Database is connected");
});
//exportacion del objeto para la base de datos
export default pool;