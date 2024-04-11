import Link from "next/link"
export default function MenuItem(menuItem) {
  const {
    title,link,description
  } = menuItem;
 
  return (
    <>
      
        <div 
          className="border-2  rounded-lg bg-blue-200 flex items-center justify-center content-center">
          <div
            className="my-8 bg-blue-200 p-2 rounded-lg max-w-md">

            <div
              className=" p-2"
              style={{maxHeight:'calc(100vh - 100px)'}}>
                
              <h2 className="text-lg font-bold text-center mb-2">Title: {title}</h2>
              <div className="flex gap-2">
                <h2>Link: </h2> 
                <Link href={link} target="_blank" className="text-blue-500">Link</Link>
              </div>
              <div className="flex gap-2">
                <h2>Description: </h2>
                <p className="text-center text-black text-sm mb-2 ">
                  {description}
                </p>  
              </div>
              
            </div>
        </div>
        </div>
    </>
  );
}