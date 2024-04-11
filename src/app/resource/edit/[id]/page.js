'use client'
import { useProfile } from "@/Components/layout/UseProfile";
import UserTabs from "@/Components/layout/Tabs"
import { useEffect, useState } from "react";
import Link from "next/link"    
import toast from "react-hot-toast"
import {redirect, useParams} from "next/navigation";
import ResourceForm from "@/Components/layout/Resource";
import DeleteButton from "@/Components/layout/DeleteButton";
export default function EditResourcePage(){
    const {id}=useParams();

    const [resource,setResource]=useState(null);
    const {loading,data}=useProfile();
       const [redirectToResource,setRedirectToResource]=useState(false);

    useEffect(()=>{
        fetch('/api/resources').then(res=>{
            res.json().then(items=>{
                const item=items.find(i=>
                    i._id===id
                );

                setResource(item);
                
            });
        })
    },[]);
    if(loading){
        return 'Loading Resources..!';
    }

    if(!data.admin){
        return 'Not an admin...!';
    }

    async function handleFormSubmit(ev,data){
        ev.preventDefault();
        data={...data,_id:id};
        const savingPromise=new Promise(async(resolve,reject)=>{
            const response=await fetch('/api/resources',{
                method:'PUT',
                body:JSON.stringify(data),
                headers:{'Content-Type':'application/json'}
            });
            if(response.ok){
                resolve();
            }
            else{
                reject();
            }   
        });


        await toast.promise(savingPromise,{
            loading:'Saving Resource',
            success:'Saved',
            error:'Error',
        });
        setRedirectToResource(true);
    }

    async function handleDeleteClick(){
        await fetch('/api/resources?_id='+id,{
            method:'DELETE',

        });

        setRedirectToResource(true);
    }
    
    if(redirectToResource){
        return redirect('/resource');
    }

    return (
        <section className="mt-8">
        <UserTabs isAdmin={true}/>
            <div className="max-w-2xl text-black text-center mx-auto mt-7">
                <Link href="/resource" className="button">Show All Resources</Link>
            </div>

            <ResourceForm  resource={resource} onSubmit={handleFormSubmit}/>
            <div className="max-w-md mx-auto -mt-5">
                
                 <DeleteButton label={"Delete this Resource"} onDelete={handleDeleteClick}/>
            </div>
            
        </section>
    )
}