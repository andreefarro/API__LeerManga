import express from 'express';
import { router as rest } from "./api/v1";
import {swaggerDocs as V1SwaggerDocs} from "./api/swagger"

const app = express();
const port = 3000;


app.get('/',(req, res) =>  {

  let hostName_header = req.header("host"); 

  res.send(hostName_header);
});

app.use("/api/v1/", rest);



app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
  V1SwaggerDocs(app, port)
});

