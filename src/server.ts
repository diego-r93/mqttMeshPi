import dotenv from 'dotenv';

dotenv.config();

import express, { Router, Request, Response } from 'express';

const app = express();

import cors from 'cors';
import path from 'path';
import setupMqttRoutes from './routes/mqtt-routes';

const corsOptions = {
  origin: "http://192.168.1.32"
};
app.use(cors(corsOptions));

const host: string = process.env.HOST || '192.168.1.10';
const port: number = Number(process.env.PORT) || 3333;

const route = Router();

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route);

// MQTT
setupMqttRoutes(app)

// Listen the server
app.listen(port, host, () => {
  console.log('Server listening on ' + host + ':' + port)
})
