import { Course } from "@/app/models/Course";
import mongoose from "mongoose";

export async function POST(req){
    mongoose.connect(process.env.MONGO_URL);
    const {name}=await req.json();
    const courseDoc= await Course.create({name})
    return Response.json(courseDoc);
}

export async function PUT(req){
    mongoose.connect(process.env.MONGO_URL);
    const {_id,name}=await req.json();
    await  Course.updateOne({_id},{name});
    return Response.json(true);
}


export async function GET(){
    mongoose.connect(process.env.MONGO_URL);
    return Response.json(
        await Course.find()
    );
}


export async function DELETE(req){
    mongoose.connect(process.env.MONGO_URL);
    const url=new URL(req.url);
    const _id=url.searchParams.get('_id');
    await Course.deleteOne({_id});
    return Response.json(true);
}