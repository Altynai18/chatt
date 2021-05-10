declare namespace Express {
    import { IUser } from "./models/user";
  
    export interface Request {
      user?: IUser;
    }
  }