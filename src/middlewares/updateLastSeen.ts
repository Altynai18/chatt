import express from 'express';
import { Request } from "express"
import { UserModel } from '../models';

export default (req: any, _: express.Response, next: express.NextFunction) => {
    
      UserModel.findOneAndUpdate(
        
        { _id: "6090eb9527d66226440efd00" },
        {
          last_seen: new Date(),
        },
        { new: true },
        ()=>{}
      );
    next();
  };