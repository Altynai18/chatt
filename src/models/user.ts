import mongoose, { Schema, Document  } from "mongoose";
import isEmail from "validator/lib/isEmail";
import { generatePasswordHash } from '../utils';
import differenceInMinutes from "date-fns/differenceInMinutes";

export interface IUser extends Document{
   email?: string;
   fullname?: string;
   password?: string;
   confirmed?: boolean;
   avatar?: string;
   confirm_hash?: string;
   last_seen?: Date;
}

const UserSchema = new Schema(
   {
      email: {
         type: String,
         required: 'Email address is required',
         validate: [isEmail, 'Invalid email'],
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
      last_seen: {
         type: Date,
         default: new Date(),
      },
   }, 
   {
      timestamps: true
   }
);

UserSchema.virtual("isOnline").get(function(this: any) {
   return differenceInMinutes(new Date(), this.last_seen) < 5;
 });
 
 UserSchema.set("toJSON", {
   virtuals: true
 });
 
 UserSchema.pre("save", function(next) {
   const user: IUser = this;
 
   if (!user.isModified('password')) return next();
 
   generatePasswordHash(user.password)
      .then(hash => {
         user.password = String(hash);
         generatePasswordHash(+new Date() + "").then(confirmHash => {
            user.confirm_hash = String(confirmHash);
            next();
         });
      })
      .catch(err => {
         next(err);
      });
 });

const User = mongoose.model('User', UserSchema);

export default User;
