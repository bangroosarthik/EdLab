const { models,Schema, model } = require("mongoose");

const CourseSchema= new Schema({
    name: {type:String, require:true},

},{timestamps:true});

export const Course= models?.Course || model('Course',CourseSchema);