import mongoose from 'mongoose';
import express from 'express';
import bodyParser from "body-parser";

import {UserModel} from './schemas';
import {UserController} from './controllers';

const app = express()
app.use( bodyParser.json());
const port = 3000

const User =new UserController();

mongoose.connect('mongodb://localhost:27017/chat', {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true});

app.get('/:id', User.show);
app.delete("/user/:id", User.delete);
app.post('/registration', User.create);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})