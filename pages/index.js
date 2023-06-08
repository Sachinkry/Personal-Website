
import Navbar from '../components/Navbar'
import ImagePic from '../components/Image'
import LastUpdate from '../components/LastUpdate'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Home() {
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    axios.get("api/admin").then((res) => {
      const adminData = res.data[0];
      setAdminData(adminData);
      // console.log(adminData);
    })
  }, [])

  
  return (

    <div className="flex flex-col space-y-12 items-center justify-start px-8 py-16 bg-white  max-w-xl mx-auto">
      <Navbar />
    <div className="flex flex-col space-y-10 items-start justify-center">
        
        <ImagePic />
        <div className="flex flex-col space-y-4 items-center justify-center w-full ">
            <p className="">Hi there  👋, this is <span className='font-semibold'>Sachin Yadav</span>. It&apos;s great to have you here. Come on in and explore my digital realm to your heart&apos;s content.</p>
            
            <p className="">I cherish the fondness I developed for coding last year to create useful and fun projects. This year, I would explore AI and ML: LLMs, and share my learnings, insights and random musings. </p>
           
            <p className="">When I am not coding I read <a href={adminData.goodreads} className='text-mediumGreen underline'>[book-shelf]</a>, listen to <a href={adminData.music} className='text-mediumGreen underline'>music</a>, watch anime, <a href={adminData.drawing} className='text-mediumGreen underline'>draw</a> simple stuffs, or scribble down my thoughts.</p>
            
            <p className="">If you would like to get in touch or just wanna say &apos;how u doin...&apos;[Joey-Friends], reach out to me on the bird app <a href={adminData.twitter} className='text-mediumGreen underline'>@SachinKry</a> or mail me: <a href={`mailto:${adminData.email}`} className='text-mediumGreen underline'>heysachinky@gmail.com</a></p>
        </div>
    </div>
    
      <LastUpdate />
    
</div>
  )
}

