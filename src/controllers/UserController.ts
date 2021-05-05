import express from 'express';

import { UserModel } from '../models';

class UserController {
    show(req: express.Request, res: express.Response){
        const id: string = req.params.id;
        UserModel.findById(id, (err: any, user: any) => {
            if(err){
                return res.status(404).json({
                    message: 'Not found'
                });
            }
            res.json(user);
        });
    }

    create(req: express.Request, res: express.Response) {
        const postData = {
            email:req.body.email,
            fullname:req.body.fullname,
            password:req.body.password,
        };
        const user= new UserModel(postData);
        user
            .save()
            .then((obj: any) => {
                res.json(obj);
            })
        .catch((reason: any) => {
            res.json(reason);
        });
    }

    getMe() {
        //pozje
    }

    delete(req: express.Request, res: express.Response){
        const id: string = req.params.id;
        UserModel.findOneAndRemove({_id: id })
        .then((user:any) => {
            if (user){
                res.json({
                    message: 'User ${user.fullname} deleted'
                });
            }
        })
        .catch(() => {
            res.json({
                message: 'User not found'
            });
        });
    }
}

export default UserController;