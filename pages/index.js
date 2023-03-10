import Head from 'next/head'

import Projects from '../components/farce-important/Projects'

import Navbar from '../components/Navbar'
import ImagePic from '../components/Image'
import Footer from '../components/Footer'
import LastUpdate from '../components/LastUpdate'

export default function Home() {
  const isDark = false
  
 

  return (

    <div className="flex flex-col space-y-12 items-center justify-start px-9 py-16 bg-white  max-w-2xl mx-auto">
      <Navbar />
    <div className="flex flex-col space-y-10 items-start justify-center">
        {/* <img className="w-32 h-1/6 rounded-sm" src="https://via.placeholder.com/130x138.3485870361328"/> */}
        <ImagePic />
        <div className="flex flex-col space-y-2.5 items-center justify-center w-full pr-1.5">
            <p className="w-full text-lg leading-snug text-gray-600">Hi there  👋, this is <span className='font-semibold'>Sachin Yadav</span>. </p>
            <p className="w-full text-lg leading-snug text-gray-600">It&apos;s great to have you here. Come on in and explore my digital realm to your heart&apos;s content.</p>
        </div>
        <div className="flex flex-col space-y-2.5 items-center justify-center w-full pr-1.5">
            <p className="w-full text-lg leading-snug text-gray-600">I cherish the fondness I developed for coding last year to create useful and fun projects.</p>
            <p className="w-full text-lg leading-snug text-gray-600">This year, I would explore AI and ML: LLMs, and share my learnings, experiences, insights and random musings. </p>
        </div>
        <div className="flex flex-col space-y-2.5 items-center justify-center pr-1.5">
            <p className="w-full text-lg leading-snug text-gray-600">When I am not coding I enjoy <a href='https://www.goodreads.com/user/show/148280232?ref=nav_profile_l' className='text-lightBrown underline'>reading</a> - some of my recent read includes <span className='font-light'>Losing my Virginity</span> by Richard Branson and <span className='font-light'>Dune</span> by Frank Herbert.</p>
            <p className="w-full text-lg leading-snug text-gray-600">I also enjoy listening to <a href='https://www.youtube.com/playlist?list=PLX3ti02JFmSGG71oOKr7N760J8QTHkjKy' className='text-lightBrown underline'>music</a>, watching anime, <a href='https://twitter.com/SachinKry/status/1525873919579676673?s=20' className='text-lightBrown underline'>drawing</a> simple stuffs, and recently to write as well.</p>
        </div>
        <p className="w-full text-lg leading-snug text-gray-600">If you would like to get in touch or just wanna say 'how u doin...'[Joey-Friends], reach out to me on the bird app <a href='https://twitter.com/SachinKry/' className='text-lightBrown underline'>@SachinKry</a> or mail me: <a href='mailto:hey@sachinkry.in' className='text-lightBrown underline'>hey@sachinkry.in</a></p>
    </div>
    <LastUpdate />
    
</div>
  )
}

