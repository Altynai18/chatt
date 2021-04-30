import mongoose, { Schema, Document } from "mongoose";
import isEmail from "validator";

export interface Iuser extends Document{
   email: String;
   fullname: String;
   password: String;
   confirmed: Boolean;
   avatar: String;
   confirm_hash: String;
   last_seen: Date;
}

const UserSchema = new Schema(
  {
  email: {
     type: String,
     required: 'Email address is required',
     validate: [isEmail, 'Invalid email'] ,
     unique: true
  },
  fullname: {
    type: String,
    required: 'Fullname is required'
 },
  password: {
     type: String,
     required: 'Password is required'
  },
  confirmed: {
    type: Boolean,
    default: false
 },
  avatar: String,
  confirm_hash: String,
  last_seen: Date,
}, {timestamps: true});

const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel;
