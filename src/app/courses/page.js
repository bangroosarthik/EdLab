'use client'
import UserTabs from "@/Components/layout/Tabs";
import {useProfile} from "@/Components/layout/UseProfile";
import { useEffect, useState } from "react";



export default function Courses(){
    const [CourseName,setCourseName]=useState('');
    const {loading:profileLoading,data:profileData}= useProfile();
    const [courses,setCourses]=useState([]);
    const [editedCourse,setEditedCourse]=useState(null);
    useEffect(()=>{
        fetchCourses(); 
    },[]);

    function fetchCourses(){
        fetch('/api/courses').then(res=>{
            res.json().then(courses=>{
                setCourses(courses);
            });
        }); 
    }


    async function handleCourseSubmit(ev){
        ev.preventDefault();
        const data={name:CourseName};
        if(editedCourse){
            data._id=editedCourse._id;
        }
         
        const response=await fetch('/api/courses',{
                
                method: editedCourse ?'PUT':'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(data)
            });
            setCourseName('');
            fetchCourses();
            setEditedCourse('');
            if(response.ok){
                alert(editedCourse ? 'Updated Course ! ✅': "Course Created 🚀")
            }
            else{
                alert('Error! Try Again ❌')
            }
    }

    async function handleDeleteClick(_id){
        await fetch('/api/courses?_id='+_id,{
            method:'DELETE',
            
        })


        fetchCourses();
    }
    if(profileLoading){
        return 'Loading Courses Info...';
    }

    if(!profileData.admin){
        return 'Not an admin!';
    }
    return (
        <section className="mt-8 max-w-lg mx-auto">
            <UserTabs isAdmin={true}/>
            <form className="mt-8" onSubmit={handleCourseSubmit}>
                <div className="flex gap-2 items-end text-white">
                    <div className="grow">
                        <label >{editedCourse?  'Update Course': 'Add New Course'} {editedCourse && (<>: <b>{editedCourse.name} </b> </>)}</label>
                        <input type="text" value={CourseName} onChange={ev=> setCourseName(ev.target.value)}/>
                    </div>
                    <div className="flex gap-2">
                        <button className="submit" type="submit">{editedCourse ? 'Update':'Create'}</button>
                        <button type="button" className="submit" onClick={()=> {{setEditedCourse(null)} setCourseName('')}}>Cancel</button>
                    </div>
                </div>  
            </form>

            <div >
                <h2 className="mt-6 text-sm text-blue-600 font-semibold "> Existing Courses: </h2>
                {
                    courses?.length >0 && courses.map(c=>(
                        <div className="bg-gray-100 rounded-xl px-4 p-2 flex gap-1 mb-1 text-black border-0 items-center" key={c._id}>
                            <div className="grow  cursor-pointer"  >{c.name}</div>
                            <div className="flex gap-1">
                                <button type="button" className="text-black" onClick={()=> {setEditedCourse(c); setCourseName(c.name);}}>Edit</button>
                                <button type="button" className="text-white bg-red-600" onClick={()=> handleDeleteClick(c._id)}>Delete</button>

                            </div>
                        </div>
                    ))
                }
            </div>

        </section> 
    )
}