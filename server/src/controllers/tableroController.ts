import {Request,Response} from  'express';
//importacion del objeto con la conexión a la base de datos
import db from '../database';

class TableroController{
    
    //Método que obtiene todos los registros de tableros 
    public listTableros(req:Request,res:Response){
        
       const tableros =  db.query('select * from tableros',(err,result,fields)=>{
            if(err) throw err;
            res.json(result);
            console.log("se obtuvieron los tableros");
        });
    }
    //Método para agregar un tablero
    public async create(req:Request,res:Response):Promise<void>{
        //insercion en la base de datos con request
        db.query('insert into tableros set ?',[req.body]);
        res.json({message:'Game saved'});
    }
    //Método para eliminar un registro de tableros
    public async delete(req:Request,res:Response):Promise<void>{
        //Se obtiene el id por request
        let id = req.params.id
        //Se hace la consulta para eliminar por el id
        await db.query('delete from tableros where id = ?',id);
        res.json({ message:'Tablero eliminado'});
    }
    //Método para actualizar un registro de tableros 
    public async update(req:Request,res:Response):Promise<void>{
        //obtengo el id desde request
        let id = req.params.id;
        await db.query('update tableros set ? where id = ?',[req.body,id],(err,result)=>{
            if(err) throw err;
            res.json({message:'El registro tablero se ha actualizado '});
        });
    }
    //Método para obtener las tareas de un tablero
    public async getTareas(req:Request,res:Response):Promise<void>{
        //Variable que trae el id del tablero 
        let id = req.params.id;
        const tareas = await db.query('select * from listas where id_tablero = ?',[id],(err,result)=>{
            if(err){
                throw err;
            }else if(result.length == 0){
                res.json({message:'El tablero no tiene listas'});
            }else{
                res.json(result);
            }
        });
    }
}
//exporto un objeto para los métodos
export const tableroController =  new TableroController();