'use client'
import MenuItem from "@/Components/menu/MenuItem";
import { useEffect,useState } from "react"

export default function AllCourses(){
    const [courses,setCourses]=useState([]);
    const [resources,setResources]=useState([]);
    console.log("resourcesAll",resources);
    console.log('resorces: ', resources);
    useEffect(()=>{
        fetch('/api/courses').then(res=>{
            res.json().then(courses=>{
                setCourses(courses); 
            });
        })
        fetch('/api/resources').then(res=>{
            res.json().then(resource=>{
                setResources(resource);
            })
        })
    },[]);
    return (
        <section>
            {courses?.length > 0 && courses.map(c => (
                <div key={c._id} >
                <div className="text-center">
                <h1 className="text-3xl text-blue-700  mb-5 " >{c.name}</h1>
                </div>
                <div className="grid sm:grid-cols-3 gap-4 mt-6 mb-12">
                    {resources.filter(item => item.course === c._id).map(item => (
                        <MenuItem key={item._id} {...item} />
                    ))}
                </div>
                </div>
            ))}
        </section>
    )
}