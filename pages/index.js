
import Navbar from '../components/Navbar'
import ImagePic from '../components/Image'
import LastUpdate from '../components/LastUpdate'
import axios from 'axios'
import { useState, useEffect } from 'react'
import DarkMode from '../components/DarkMode'
import Layout from '../components/Layout'

export default function Home() {
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    try {
      axios.get("api/admin").then((res) => {
        const adminData = res.data[0];
        setAdminData(adminData);
        // console.log(adminData);
      })
    } catch (error) {
      console.log("error from admin-api:::::", error);
    }
  }, [])
  // here the html code for quote is written
  // you need to convert - into 
  const quote = <p className="text-sm text-gray-400 mb-2  ">&quot;For the sake of winning, I should destroy everything about myself. I shall be reborn as many times as I need.&quot; <span className='ml-2 text-semibold '>&ndash; Yoichi Isagi</span></p>

  
  return (
    <Layout>
      <div className="flex flex-col space-y-10 items-start justify-center">
        
        <div className='w-full flex text-4xl'>
          <ImagePic />
          {/* {quote} */}
          {/* <h1 className='text-4xl font-semibold leading-snug text-gray-600'>Me</h1> */}
        </div>
        <div className="flex flex-col space-y-4 items-center justify-center w-full ">
            <p className="">Hi there  👋, this is <span className='font-semibold'>Sachin Yadav</span>. It&apos;s great to have you here. Come on in and explore my digital realm to your heart&apos;s content.</p>
            
            <p className="">I cherish the fondness I developed for coding last year to create useful and fun projects. This year, I would explore AI and ML: LLMs, and share my learnings, insights and random musings. </p>
           
            <p className="">When I do not code, I read <a href={adminData.goodreads} className='text-mediumGreen underline'>books</a>, listen to <a href={adminData.music} className='text-mediumGreen underline'>music</a>, watch anime, <a href={adminData.drawing} className='text-mediumGreen underline'>draw</a> simple stuffs, or scribble down my thoughts.</p>
            
            <p className="">If you would like to get in touch or just wanna say &apos;how u doin...&apos;, reach out to me on the bird app <a href={adminData.twitter} className='text-mediumGreen underline'>@SachinKry</a> or mail me: <a href={`mailto:${adminData.email}`} className='text-mediumGreen underline'>heysachinky@gmail.com</a></p>
        </div>
      </div>
      <LastUpdate />
      {/* <iframe src="https://sagepanda.substack.com/embed" className='bg-gray w-full h-80 ring-1 ring-mediumGreen rounded-md' ></iframe> */}
    </Layout>
  )
}

