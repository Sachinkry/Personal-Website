
import ImagePic from '../components/Image'
import LastUpdate from '../components/LastUpdate'
import axios from 'axios'
import { useState, useEffect } from 'react'
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
      <div className="flex flex-col space-y-8 items-start  ">
        
          <ImagePic />
          
        <div className="flex flex-col space-y-4 items-center justify-center w-full ">
            <p className=" dark:text-gray-500 ">Hi there  👋, this is <span className='font-semibold'>Sachin Yadav</span>. It&apos;s great to have you here. Come on in and explore my digital realm to your heart&apos;s content.</p>
            
            <p className=" dark:text-gray-500">I cherish the fondness I developed for coding last year to create useful and fun projects. This year, I would explore AI and ML: LLMs, and share my learnings, insights and random musings. </p>
           
            <p className=" dark:text-gray-500">When I do not code, I read <a href={adminData.goodreads} className='text-mediumGreen '>books</a>, listen to <a href={adminData.music} className='text-mediumGreen '>music</a>, watch anime, <a href={adminData.drawing} className='text-mediumGreen '>draw</a> simple stuffs, or scribble down my thoughts.</p>
            
            <p className=" dark:text-gray-500">If you would like to get in touch or just wanna say &apos;hello&apos;, reach out to me on the bird app <a href={adminData.twitter} className="text-mediumGreen ">@SachinKry</a> or mail me: <a href={`mailto:${adminData.email}`} className="text-mediumGreen" >heysachinky@gmail.com</a></p>
        </div>
      </div>
      <LastUpdate />
      {/* <iframe src="https://sagepanda.substack.com/embed" className='bg-gray w-full h-80 ring-1 ring-mediumGreen rounded-md' ></iframe> */}
    </Layout>
  )
}

