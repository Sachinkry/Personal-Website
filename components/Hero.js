import {Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import ImagePic from './Image'
import { motion } from 'framer-motion'

export default function Hero() {
    const [text, count] = useTypewriter({
        words: ["a 20 year old coder", "a bookworm", "music lover", "anime fan", "aspiring machine learning engineer" ],
        // loop: false,
        delaySpeed: 1000,
    })
    return (
        <motion.div 
            initial={{
                x: 500,
                opacity: 0,
            }}
            animate={{
                x: 0,
                scale: 1,
                opacity: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            className=' '
        >
            {/* <BackgroundCircle /> */}
            <div className='h-screen flex flex-col text-center  items-center justify-center px-10 text-md mx-auto space-y-16 '>
                
                <ImagePic />
                <p className=''>Hi there 👋, This is <span className='font-bold '>Sachin! </span>I am a 20-year-old web developer, bookworm, music lover, anime fan, and aspiring machine learning engineer.</p>
                <p className='px-5'
                >
                    Follow me on this journey as I 
                    share my experiences, insights, and random musings about life and tech.
                 </p>
                
                <div className='flex justify-center  w-full'>
                  <div className='border border-gray-200 w-1/2 '/>
                </div>
                
            </div>
            {/* <div className='flex flex-col w-1/2'>
                <button className='heroButton'>About</button>
                <button className='heroButton'>Experience</button>
                <button className='heroButton'>Skills</button>
                <button className='heroButton'>Projects</button>
            </div> */}
               
        </motion.div>
    )
}