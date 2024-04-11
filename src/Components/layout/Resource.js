import { useEffect, useState } from "react";
export default function ResourceForm({onSubmit,resource}){
    const [title,setTitle]=useState(resource?.title || '');
    const [link,setLink]=useState(resource?.link || '');
    const [description,setDescription]=useState(resource?.description || '');
    const [course,setCourse]=useState(resource?.course || '');
    const [courses,setCourses]=useState([]);
    // console.log('courses: ', courses);
    useEffect(()=>{
        fetch('/api/courses').then(res=>{
            res.json().then(course=>{
                setCourses(course)
            });
        })
    },[])
    return (
        <form className="mt-4 max-w-2xl mx-auto" onSubmit={ev=> onSubmit(ev,{title,link,description,course})} >
                <div className="flex items-center  gap-2">
                    <div className="grow">
                        <label >Title</label>
                        <input type="text" placeholder="Title Name" value={title} onChange={(ev)=> setTitle(ev.target.value) }/>
                        <label >Subject</label>
                        <select value={course} onChange={ev => setCourse(ev.target.value)}>
                        <option value="">Select Course</option>
                        {courses.map(c => (
                            <option key={c._id} value={c._id}>{c.name}</option>
                        ))}
                        </select>
                        <label >Link</label>
                        <input type="text" placeholder="Link" value={link} onChange={(ev)=> setLink(ev.target.value)}/>
                        <label >Description</label>
                        <input type="text" placeholder="Description" value={description} onChange={(ev)=> setDescription(ev.target.value)}/>
                        <button type="submit" value="Upload">Save</button>
                        
                       
                    </div>
                </div>
            </form>
    )
}   