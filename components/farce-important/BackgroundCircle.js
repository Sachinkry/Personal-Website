import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

function BackgroundCircle() {
  return (
    <motion.div 
        initial={{
            y: -500,
            opacity: 0,
        }}
        animate={{
            y: 0,
            scale: 1,
            opacity: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='relative flex flex-col justify-center items-center'
    >
        <div className='absolute border border-[#222] rounded-md h-[90px] w-[90px]  md:animate-ping md:inline-block hidden'/>
        {/* <div className='absolute border border-[#333333] rounded-md h-[300px] w-[300px] '/> */}
        {/* <div className='absolute border border-[#333333] rounded-md h-[500px] w-[500px] '/> */}
        {/* <div className='absolute rounded-md border border-[#F7AB0A] opacity-20 h-[500px] w-[500px]  animate-pulse'/> */}
        {/* <div className='absolute border border-[#333333] rounded-full h-[700px] w-[700px] '/> */}
        <Image 
                  src='/pfp-sac.jpg'
                  alt='pfp-sachin'
                  width={200}
                  height={200}
                  className=' rounded-md mx-auto h-32 w-32 border-1 border--200 shadow-lg '
                  />

    </motion.div>
  )
}

export default BackgroundCircle