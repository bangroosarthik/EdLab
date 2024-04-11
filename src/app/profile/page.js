'use client';
import { useSession } from "next-auth/react";
import Image from "next/image";
import UserTabs from "@/Components/layout/Tabs";
import { useEffect, useState } from "react";
import { useProfile } from "@/Components/layout/UseProfile";
export default function ProfilePage(){
    const session=useSession();
    console.log({session});
    const {status}= session;
    const [userName,setUserName]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [city,setCity]=useState('');
    const [country,setCountry]=useState('');
    const [isAdmin,setIsAdmin]=useState(false);
    
    const {data:loggedInUserData}=useProfile();

    useEffect(()=>{
        if(status === 'authenticated')
        {
            setUserName(session.data.user.name);
            fetch('/api/profile').then(response=>{
                response.json().then(data=>{
                    setPhone(data.phone);
                    setAddress(data.address);
                    setCity(data.city);
                    setCountry(data.country);
                    setIsAdmin(data.admin);
                })
            })
        }
    },[session,status]);    

    async function handleProfileInfoUpdate(ev){
        ev.preventDefault();
        
        const response=await fetch('/api/profile',{
            method: 'PUT',
            headers : {'Content-Type':'application/json'},
            body: JSON.stringify({name:userName,address,phone,city,country})
        });
        
        if(response.ok){
            alert('Profile Saved! 🚀');
        }
        
    }

    const userImage= session?.data?.user?.image;

    return (
        <section className="mt-8">
            <UserTabs isAdmin={isAdmin} />
            
            <div className="max-w-xl  mt-5   mx-auto ">

                <div className="flex gap-4  ">
                    
                        <div>
                
                            <Image className="rounded-lg w-full mt-4 " src={userImage} width={300} height={300} alt={"userPicture"} ></Image>
                            
                        </div>
                    
                    <form className="grow" onSubmit={handleProfileInfoUpdate}>
                        <input type="text" placeholder="First and Last Name" value={userName} onChange={ev=> setUserName(ev.target.value)}/>
                        <input type="email" disabled={true} value={session?.data?.user?.email} />
                        <input type="tel" placeholder="Phone Number" value={phone} onChange={ev=> setPhone(ev.target.value)} />
                        <input type="text" placeholder="Adderss" value={address} onChange={ev=> setAddress(ev.target.value)}/>
                        <div className="flex gap-4">
                            <input  style={{'margin':'0'}} className="my-0" type="text" placeholder="City" value={city} onChange={ev=> setCity(ev.target.value)} />
                            <input style={{'margin':'0'}}  type="text" placeholder="Country" value={country} onChange={ev=> setCountry(ev.target.value)}/>
                        </div>
                        {loggedInUserData.isAdmin && (
                            <div className="mt-4">
                            <label className="p-2 inline-flex  flex items-center mb-2" htmlFor="adminCb" ><input id="adminCb" className="mr-2" type="checkbox" checked={isAdmin} value={'1'} onChange={ev=> setIsAdmin(ev.target.checked)} />
                                <span>Admin</span>
                            </label>
                            </div>
                        )}
                        
                        
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </section>
    );
}