import mongoose from 'mongoose';
import express from 'express';

import { UserController, DialogController, MessageController } from './controllers';

const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
const port = 3000

const User = new UserController();
const Dialog = new DialogController();
const Messages = new MessageController();

mongoose.connect('mongodb://localhost:27017/chat', 
{
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true, 
  useFindAndModify: true
});

app.get('/user/:id', User.show);
app.delete('/user/:id', User.delete);
app.post('/user/create', User.create);

app.get('/dialogs', Dialog.index);
app.delete('/dialogs/:id', Dialog.delete);
app.post('/dialogs', Dialog.create);

app.get('/messages', Messages.index);
app.delete('/messages/:id', Messages.delete);
app.post('/messages', Messages.create);

app.listen(port, function() {
  console.log(`Example app listening at http://localhost:${port}`)
});