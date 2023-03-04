import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className=''>
        <motion.div 
        className='h-80 flex flex-col  text-center text-md  max-w-5xl justify-evenly mx-auto items-center space-y-16  px-10'
        initial={{
            y: 200,
            opacity: 0,
        }}
        
        transition={{
            duration: 1.2 ,
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
            <p className='my-16'>If you want to discuss the latest tech trends, or more about coding, books, anime, music or anything else, I would love to hear from you on bird app <a href='https://twitter.com/SachinKry' className='underline decoration-sky-700 text-sky-700/80'>@SachinKry</a> or mail me: <a href='mailto:heysachinkry@gmail.com' className='underline decoration-sky-700 text-sky-700/80'>heysachinky@gmail.com</a>. Cheers!</p>
            
            {/* <div className='flex justify-center  w-full'>
              <div className='border border-black w-1/2 '/>
            </div> */}
            {/* <div className='w-full absolute bottom-[-40%] bg-blue-400/20 left-0 h-[100px] -skew-y-12' /> */}
        </motion.div>
    </div>
  )
}

export default Contact