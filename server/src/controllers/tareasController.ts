import {Request,Response} from 'express';
//importación para el uso de la base de datos
import db from '../database';
class TareasController{

    //Método que obtiene todas las tareas
    public datosTareas(req:Request,res:Response){
        const tareas = db.query('select * from tareas',(err,result,fields)=>{
            if(err) throw err;
            res.json(result);
            console.log("se obtuvieron las tareas");
        });
    }
    //Método para crear un registro tarea
    public async create(req:Request,res:Response):Promise<void>{
        await db.query('insert into tareas set ?',[req.body]);
        res.json({message:'Tarea guardada'});
    }
    //Método para eliminar un registro tarea
    public async delete(req:Request,res:Response):Promise<void>{
        //se obtiene el id por request
        let id = req.params.id;
        //consulta para la eliminacion
        await db.query('delete from tareas where id = ?',[id],(err,result)=>{
            if(err) throw err;
            res.json({message:'Tarea eliminada'})
        });
    }
    //Método para actualizar una tarea 
    public async update(req:Request,res:Response):Promise<void>{
        //se obtiene el id pasado por parametro por request
        let id  =req.params.id;
        await db.query('update tareas set ? where id = ?',[req.body,id]);
        res.json({message:'Tarea actualizada '});
    }
}
//exportacion de la instancia de la clase
export const tareasController = new TareasController();