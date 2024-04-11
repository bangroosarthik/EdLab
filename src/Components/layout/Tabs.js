'use client';
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function UserTabs({isAdmin}){
    const path=usePathname();

    return (
        
            <div className="flex mx-auto gap-4 justify-center  tabs ">
                <Link className={path==='/profile'? 'active': ''} href="/profile">Profile</Link>
                {
                    isAdmin && (
                        <>
                            <Link className={path.includes('courses') ? 'active': ''} href="/courses">Courses</Link>
                            <Link  className={path==='/resource' ? 'active': ''} href="/resource">Upload Resource</Link>
                        </>
                    )
                }
            </div>
        
    )
}