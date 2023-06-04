import Head from 'next/head'

import Navbar from '../components/Navbar'
import ImagePic from '../components/Image'
import Footer from '../components/Footer'
import LastUpdate from '../components/LastUpdate'
import {adminData} from '../data/adminData'

export default function Home() {
  const isDark = false
  console.log(adminData)
  
  return (

    <div className="flex flex-col space-y-12 items-center justify-start px-9 py-16 bg-white  max-w-2xl mx-auto">
      <Navbar />
    <div className="flex flex-col space-y-10 items-start justify-center">
        {/* <img className="w-32 h-1/6 rounded-sm" src="https://via.placeholder.com/130x138.3485870361328"/> */}
        <ImagePic />
        <div className="flex flex-col space-y-2.5 items-center justify-center w-full pr-1.5">
            <p className="">Hi there  👋, this is <span className='font-semibold'>Sachin Yadav</span>. </p>
            <p className="">It&apos;s great to have you here. Come on in and explore my digital realm to your heart&apos;s content.</p>
        </div>
        <div className="flex flex-col space-y-2.5 items-center justify-center w-full pr-1.5">
            <p className="">I cherish the fondness I developed for coding last year to create useful and fun projects.</p>
            <p className="">This year, I would explore AI and ML: LLMs, and share my learnings, insights and random musings. </p>
        </div>
        <div className="flex flex-col space-y-2.5 items-center justify-center pr-1.5">
            <p className="">When I am not coding I read <a href={adminData.goodreads} className='text-mediumGreen underline'>[book-shelf]</a>.</p>
            <p className="">
              I also enjoy listening to <a href={adminData.music} className='text-mediumGreen underline'>music</a>, watching anime, <a href={adminData.drawing} className='text-mediumGreen underline'>drawing</a> simple stuffs, and to write as well.
            </p>
        </div>
        <p className="">If you would like to get in touch or just wanna say &apos;how u doin...&apos;[Joey-Friends], reach out to me on the bird app <a href={adminData.twitter} className='text-mediumGreen underline'>@SachinKry</a> or mail me: <a href={`mailto:${adminData.email}`} className='text-mediumGreen underline'>heysachinky@gmail.com</a></p>
    </div>
    
      <LastUpdate />
    
</div>
  )
}

