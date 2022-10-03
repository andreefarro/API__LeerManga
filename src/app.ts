import express from 'express';
import { router as rest } from "./api";

const app = express();
const port = 3000;


app.use("/api/", rest);


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

