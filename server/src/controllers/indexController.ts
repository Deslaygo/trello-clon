//importacion de request y response desde express
import {Request,Response} from 'express';

class IndexController{

    //Método que regresa la accion para el index 
    public index(req:Request,res:Response):void{
        res.send("route of index");
    }
}
//creacion del objeto y su exportación 
export const indexController = new IndexController();
