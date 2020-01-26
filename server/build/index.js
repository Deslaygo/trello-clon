"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importación de las dependencias 
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Importacion de los archivos de rutas
const indexRoute_1 = __importDefault(require("./routes/indexRoute"));
const tableroRoutes_1 = __importDefault(require("./routes/tableroRoutes"));
const listasRoutes_1 = __importDefault(require("./routes/listasRoutes"));
const tareasRoutes_1 = __importDefault(require("./routes/tareasRoutes"));
//Clase del servidor 
class Server {
    //Contructor de la clase 
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //Método para configurar la conexion con el servidor 
    config() {
        //configuracion de una variable para el puerto, asemás se pasa el puerto de escucha
        this.app.set("port", process.env.PORT || 4500);
        //Se configura y se usa el método de morgan
        this.app.use(morgan_1.default('dev'));
        //Se configura y se usa el método de cors
        this.app.use(cors_1.default());
        //Configuracion de express con json
        this.app.use(express_1.default.json());
        //Para el caso de enviar información desde el formulario 
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //metodo para inicializar el servidor 
    start() {
        //guardo el numero del puerto en una variable interna
        let port = this.app.get("port");
        //Se obtiene la url y el puerto del servidor
        this.app.listen(port, () => {
            console.log("The serve is on port " + port);
        });
    }
    //Método para las rutas del resvidor 
    routes() {
        //Configuración de las rutas por parte del index
        this.app.use("/", indexRoute_1.default);
        //Configuración de las rutas para el tablero
        this.app.use('/api/tablero', tableroRoutes_1.default);
        //Configuración y uso de las rutas para listas
        this.app.use('/api/listas', listasRoutes_1.default);
        //configuración y uso de las rutas para tareas
        this.app.use('/api/tareas', tareasRoutes_1.default);
    }
}
//Se pasa el servidor a una constante 
const server = new Server();
//se inicializa el servidor 
server.start();
