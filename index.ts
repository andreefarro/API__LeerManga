import express from 'express';
import { router as rest } from "./src/api/v1";

//import {swaggerDocs as V1SwaggerDocs} from "./api/swagger"


const app = express();
const port = 3000;

/**
 * /swagger-ui.css
 * no es generado por swagger asi que se opto por crear una ruta 
 * para cargar los estilos de swagger
 * 
 */


/**
 * para poder usar la aplicacion en local es necesario
 * eliminar las siguientes dos lineas por lo que los estilos de 
 * swagger si son traidos de manera local
 */

app.use(express.static('public'));
app.use("/swagger-ui.css",express.static(__dirname +'/public/css/swagger-ui.css'));
app.use("swagger-ui.css",express.static(__dirname +'/public/css/swagger-ui.css'));




app.use("/api/v1/", rest);



app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
  //V1SwaggerDocs(app, port)
});


import swaggerUi  from 'swagger-ui-express';
import swaggerDocument from './swagger.json' ;

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
