import Link from "next/link";
import Image from "next/image";
export default function HomeMenu(){
    return(
        <section>
            
             <div className="text-center" id="about">
                <h3 className="text-blue-600 font-bold text-4xl italic mt-6" >About us</h3>
                
                <p className=" text-lg  text-white mt-5 max-w-3xl mx-auto" >
                
                Your one-stop destination for comprehensive lab manuals and
                invaluable resources throughout your academic journey.
                <br />
                At Edulab, we are committed to empowering students from their first
                year to the fourth year with easy access to high-quality lab manuals
                and a wealth of educational materials.
                <br />
                Our mission is to enhance your learning experience by providing
                meticulously crafted lab manuals tailored to each academic year.{" "}
                <br />
                Whether you are a freshman exploring the wonders of science or a
                senior diving into advanced experiments, Edulab is here to guide you
                every step of the way.
                <br />
                Here, knowledge knows no bounds, and success is within reach. Edulab
                - where education meets innovation.
                </p>
                <h3  className="text-blue-600 font-bold text-4xl italic mt-10">Objective</h3>
                  
                <p className=" text-lg text-white mt-5 max-w-2xl mx-auto" >
                    To create a user-friendly website that provides students with easy
                    access to lab manuals over the internet, assignments, <br /> and video
                    references, enhancing their learning experience and academic success.
                    <br />
                    To offer teachers the ability to seamlessly login and upload
                    course-specific study materials for their <br />respective subjects,
                    fostering efficient content management and enhancing the teaching
                    process.
                </p> 
             </div>
             <section className="text-center my-16">
        <div className="text-center">
          <h1 className="text-blue-900 font-bold text-4xl italic mt-10">Meet Our Team</h1>
          
          <p className="text-lg  text-white mt-5 max-w-2xl mx-auto">Meet the dedicated team of Edulab, revolutionizing the way we farm with beautiful,innovative and sustainable solutions for easy Lab Manual access.</p>
        </div>
        
        {/* under the guidance of  */}
        <div className="mt-10 flex justify-center ">
          <div>
            <h1 className="text-3xl text-blue-600  mb-5">UNDER THE GUIDANCE OF</h1>
            <div className="image flex justify-center">
              <Image src="/sir.png" width={300} height={200} alt={"mentor"}></Image>
              <div className="content">
                <h3 className="text-2xl text-yellow-300 font-serif font-bold mb-5">Mr. Vijayendra Gaikwad</h3>
                <p className="text-sm text-white mb-5">Assistant Professor</p>
                <p className="text-sm text-white ">Entrusted with planning, implementation and evaluation.</p>
              </div>
            </div>
            
          </div>
        </div>

        {/* developers */}
        <div className="mt-10 " id="Contact" >
          <h1 className="text-3xl text-blue-700  mb-5 " >DEVELOPERS</h1>
        </div>
        <div className="flex gap-20 flex-wrap justify-center my-10">
        
        <div className="image">
          <Image src="/sarthik.png" alt="sarthikpic" width={300} height={200}/>
            <div className="content">
              <h3 className="text-2xl text-yellow-300 font-serif font-bold mb-5">Sarthik Bangroo</h3>
              <p className="text-md text-white ">FullStack Developer </p>
              <Link className="mt-10" href="https://www.linkedin.com/in/sarthik-bangroo-b877a4250/" target='_blank'>
              <p className=" text-white ">Computer Engineering</p>
              <p className="text-white mb-2">2025</p>
              <div  className="flex justify-center"  style={{ cursor: 'pointer' }}>
                <Image className='linkedinLogo' src="/linkedin.png" alt="linkedin" width={30} height={30}/>
              </div>
              </Link>
            </div>
      </div>
        <div className="image">
          <Image src="/Chirag.png" alt="chiragsiroya" width={300} height={200}/>
            <div className="content">
              <h3 className="text-2xl text-yellow-300 font-serif font-bold  mb-5">Chirag Siroya</h3>
              <p className="text-md text-white ">Back End Developer</p>
              <Link className="mt-10" href="https://www.linkedin.com/in/chirag-siroya-64785222a/" target='_blank'>
              <p className=" text-white ">Computer Engineering </p>
              <p className="text-white mb-2">2025</p>
              <div className="flex justify-center"  style={{ cursor: 'pointer' }}>
                <Image className='linkedinLogo' src="/linkedin.png" alt="linkedin" width={30} height={30}/>
              </div>
            </Link>
            </div>
        </div>
        </div>
      </section>



        </section>
    )
}