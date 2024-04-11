'use client'
import { useProfile } from "@/Components/layout/UseProfile";
import UserTabs from "@/Components/layout/Tabs"
import { useState } from "react";
import Link from "next/link"    
import toast from "react-hot-toast"
import {redirect} from "next/navigation";
import ResourceForm from "@/Components/layout/Resource";
export default function ResourcePage(){
    const {loading,data}=useProfile();
   
    const [redirectToResource,setRedirectToResource]=useState(false);
    if(loading){
        return 'Loading Resources..!';
    }

    if(!data.admin){
        return 'Not an admin...!';
    }

    async function handleFormSubmit(ev,data){
        ev.preventDefault();
        console.log('formdata: ',data);
        const savingPromise=new Promise(async(resolve,reject)=>{
            const response=await fetch('/api/resources',{
                method:'POST',
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
    
    if(redirectToResource){
        return redirect('/resource');
    }

    return (
        <section className="mt-8">
        <UserTabs isAdmin={true}/>
            <div className="max-w-2xl text-center mx-auto mt-7 ">
                <Link href="/resource" className="button ">Show All Resources</Link>
            </div>
            <ResourceForm resource={null} onSubmit={handleFormSubmit}/>
        </section>
    )
}