'use client'

import UserTabs from "@/Components/layout/Tabs";
import { useProfile } from "@/Components/layout/UseProfile"
import Link from "next/link"
import { useEffect, useState } from "react";
export default function ResourceContent(){
    
    const {loading,data}=useProfile();
    const [resource,setResource]=useState([]);
    

    useEffect(()=>{
        fetch('/api/resources').then(res=>{
            res.json().then(resource=>{
                setResource(resource);
            });
        })
    },[]);  
    
    if(loading){
        return 'Loading Resource Page..'
    }

    if(!data.admin){
        return 'Not an admin';
    }
    return (
        <section className="mt-8 max-w-2xl mx-auto">
            <UserTabs isAdmin={true}/>
            <div className="mt-8">
                <Link className="button text-center" href="/resource/new">Add Resource</Link>
                
            </div>
            <h2 className="text-sm text-white mt-8">Edit Resource: </h2>
            <div className="flex flex-wrap flex-col gap-10 mt-10">
                {resource?.length >0 && resource.map(res=>(

                    <Link key={res._id} href={'/resource/edit/'+res._id } className="bg-gray-200 rounded-lg text-center   p-4 mb-1">
                        <div>
                            <h1 className="text-blue-500 underline" >Title: </h1>{res.title}
                            <div className="flex gap-2 justify-center">
                                <h2>Link: </h2>
                                <p target="_blank" className="text-blue-500"  href={res.link} >Link</p>
                            </div>
                            <h2 className=" text-blue-500 underline">
                                Description:
                            </h2> <p>{res.description}</p>
                        </div>

                    </Link> 
                ))}
            </div>
        </section>
    )
}

