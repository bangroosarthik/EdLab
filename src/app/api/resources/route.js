import { Resource } from "@/app/models/Resource";
import mongoose from "mongoose"

export async function POST(req){
    mongoose.connect(process.env.MONGO_URL);
    const data=await req.json();
    console.log("data: ", data);
    const resourceDoc= await Resource.create(data);
    console.log('Saved DAta:', resourceDoc);
    return Response.json(resourceDoc);
}   

export async function PUT(req){
    mongoose.connect(process.env.MONGO_URL);
    const {_id, ...data}=await req.json();

    await Resource.findByIdAndUpdate(_id,data);
    return Response.json(true);
    
}   

export async function GET(){
    mongoose.connect(process.env.MONGO_URL);
    return Response.json(
        await Resource.find()
    )
}


export async function DELETE(req){
    mongoose.connect(process.env.MONGO_URL);
    const url=new URL(req.url);
    const _id=url.searchParams.get('_id');
    await Resource.deleteOne({_id});
    return Response.json(true);
}

