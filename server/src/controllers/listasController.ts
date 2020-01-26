//importacion de request y response para el manejo de peticiones y respuestas
import {Request,Response} from 'express';
//importacion del manejo de la base de datos
import db from '../database';

class ListasController{

    //Método que obtiene todas las listas en la BD
    public datosListas(req:Request,res:Response){
        const listas = db.query('select * from listas',(err,result)=>{
            if(err) throw err;
            res.json(result);
            console.log("Obtenidos los datos de las listas");
        });
    }
    //Método para crear un registro de lista
    public async create(req:Request,res:Response):Promise<void>{
        await db.query('insert into listas set ?',[req.body],(err,result)=>{
            if(err) throw err;
            res.json({message:'Lista guardada'});
        });
    }
    //Método para eliminar un registro de listas 
    public async delete(req:Request,res:Response):Promise<void>{
        //obtención del id pasado por request
        let id = req.params.id;
        await db.query('delete from listas where id = ?',[id],(err,result)=>{
            if(err) throw err;
            res.json({message:'lista eliminada'});
        });
    }
    //Método para actualizar un registro de listas
    public async update(req:Request,res:Response):Promise<void>{
        //obteniendo el id del registro con request
        let id = req.params.id;
        await db.query('update listas set ? where id = ?',[req.body,id]);
        res.json({message:'Registro lista actualizado'});
        
    }
    //Método que obtiene los registros de tareas relacionados a las listas
    public getTareas(req:Request,res:Response){
        //obtengo y guardo el valor del id traido por request
        let id = req.params.id;
        const tareas = db.query('select * from tareas where id_lista = ?',[id],(err,result)=>{
            if(err) throw err;
            res.json(result);
        });
    }
}
//exportacion de la instancia de las clase
export const listasController  = new ListasController();