import mongoose, { Schema, Document  } from "mongoose";

export interface IMessage extends Document{
   text: {
      type: string,
      required: boolean
   }
   dialog: {
      type: Schema.Types.ObjectId,
      ref: string
   },
   unread: {
      type: boolean,
      default: boolean
   },
}

const MessageSchema = new Schema(
{
   text: { type: String, require: Boolean },
   dialog: { type: Schema.Types.ObjectId, ref: "Dialog" },
   user: { type: Schema.Types.ObjectId, ref: "User" },
   unread: { type: Boolean, default: false },
}, 
{
   timestamps: true
});

const MessageModel = mongoose.model('Message', MessageSchema);

export default MessageModel;
