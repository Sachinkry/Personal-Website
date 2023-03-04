import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div 
        className='h-screen flex flex-col relative text-center text-md  max-w-5xl justify-evenly mx-auto items-center space-y-16  px-12'
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
        <p className='mt-16 '>I cherish the fondness I developed for coding last year and since then, I have learned web development. Now I mostly use next.js and tailwind CSS to build my projects.</p>
        <p >This year, I am exploring AI and ML topics, such as NLP and LLMs. I am quite excited by recent developments in this field, such as GPT-3 and ChatGPT, which are changing many domains.</p>
        <p>I look forward to collaborating with like-minded individuals to bring out ideas to life and make a positive impact on the world.</p>
        <div className='flex justify-center  w-full'>
          <div className='border border-gray-200 w-1/2 '/>
        </div>
        {/* <div className='w-full absolute top-[23%] bg-blue-400/20 left-0 h-[230px] -skew-y-12' /> */}
    </motion.div>
  )
}

export default About