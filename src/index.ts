import mongoose from 'mongoose';
import express from 'express';
import bodyParser from "body-parser";

import User from './schemas/user'
const app = express()
const port = 3000

mongoose.connect('mongodb://localhost:27017/chat', {useNewUrlParser: true, useUnifiedTopology: true});

app.post('/create', (req: any, res: any) => {
  const postData ={
    email:req.body.email,
    fullname:req.body.email,
    password:req.body.email,
  }
  res.send();
  const user= new User(postData);
  user.save().then((obj: any) => {
  res.json(obj);})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})