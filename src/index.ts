import express from 'express';
import dotenv from 'dotenv';
import { createServer } from "http";

import "./core/db";
import createRoutes from "./core/routes";
import createSocket from "./core/socket";

const app = express();

const http = createServer(app);
const io = createSocket(http);

dotenv.config();

createRoutes(app, io);

const PORT: number = process.env.PORT ? Number(process.env.PORT) : 3003;

http.listen(PORT, function() {
  console.log(`Example app listening at http://localhost:${PORT}`)
});