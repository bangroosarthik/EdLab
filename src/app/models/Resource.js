import mongoose, { model, models,Schema } from "mongoose";
 
const ResourceSchema=new Schema({
    title:{type:String},
    link:{type:String},
    description:{type:String},
    subject:{type:String},
    course:{type:mongoose.Schema.ObjectId}
},{timestamps:true});

export const Resource= models?.Resource || model('Resource',ResourceSchema);