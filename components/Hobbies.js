import React from 'react'
import { motion } from 'framer-motion'

function Hobbies() {
  return (
    <div className='h-screen'>
        <motion.div 
        className='h-screen flex flex-col relative text-center text-md  max-w-5xl justify-evenly mx-auto items-center space-y-16  px-10'
        initial={{
            y: 200,
            opacity: 0,
        }}
        
        transition={{
            duration: 1.5 ,
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        viewport={{ once: true}}
    >
        {/* <h3 className='absolute top-8  uppercase tracking-[20px] text-gray-500 text-2xl ' 
        >
          Hobbies
        </h3> */}
        <p className='mt-16'>Apart from coding, I love reading books - some of my recent reads include <span className='text-sky-600/70'>Losing My Virginity</span> by Richard Branson and <span className='text-sky-600/70'>Dune</span> by Frank Herbert which I would recommend for sure. </p>
        <p>I also enjoy listening to music, and I have a curated playlist-<a href='https://youtube.com/playlist?list=PLX3ti02JFmSGG71oOKr7N760J8QTHkjKy ' className='underline decoration-sky-700 text-sky-700/80'>[caboodle]</a> on YouTube that I listen to often.   </p>
        <p>And, I am a big fan of anime. Some of my all-time favorites are Naruto, Demon Slayer, One Punch Man, Jujutsu Kaisen. And have you checked out <a href='https://zoro.to/blue-lock-17889?ref=search' className='underline decoration-sky-700 text-sky-700/80'>Blue Lock</a> yet? Trust me, you wont regret it!</p>
        <div className='flex justify-center  w-full'>
          <div className='border border-gray-200 w-1/2 '/>
        </div>
        {/* <div className='w-full absolute top-[21%] bg-blue-400/20 left-0 h-[210px] -skew-y-12' /> */}
        </motion.div>
    </div>
  )
}

export default Hobbies