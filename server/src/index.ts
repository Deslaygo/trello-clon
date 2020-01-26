//importación de las dependencias 
import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
//Importacion de los archivos de rutas
import indexRoute from './routes/indexRoute';
import tableroRoutes from './routes/tableroRoutes';
import listasRoutes from './routes/listasRoutes';
import tareasRoutes from './routes/tareasRoutes';

//Clase del servidor 
class Server{
    //objeto para manejar el servidor con express 
    public app:Application;
    //Contructor de la clase 
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    //Método para configurar la conexion con el servidor 
    public config():void{
        //configuracion de una variable para el puerto, asemás se pasa el puerto de escucha
        this.app.set("port",process.env.PORT || 4500);
        //Se configura y se usa el método de morgan
        this.app.use(morgan('dev'));
        //Se configura y se usa el método de cors
        this.app.use(cors());
        //Configuracion de express con json
        this.app.use(express.json());
        //Para el caso de enviar información desde el formulario 
        this.app.use(express.urlencoded({extended:false}));
    }
    //metodo para inicializar el servidor 
    public start():void{
        //guardo el numero del puerto en una variable interna
        let port = this.app.get("port");
        //Se obtiene la url y el puerto del servidor
        this.app.listen(port,()=>{
            console.log("The serve is on port " + port);
        });        
    }
    //Método para las rutas del resvidor 
    public routes():void{
        //Configuración de las rutas por parte del index
        this.app.use("/",indexRoute);
        //Configuración de las rutas para el tablero
        this.app.use('/api/tablero',tableroRoutes);
        //Configuración y uso de las rutas para listas
        this.app.use('/api/listas',listasRoutes);
        //configuración y uso de las rutas para tareas
        this.app.use('/api/tareas',tareasRoutes);
    }
}
//Se pasa el servidor a una constante 
const server = new Server();
//se inicializa el servidor 
server.start();
