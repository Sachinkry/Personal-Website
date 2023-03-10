import React from 'react'
import { motion } from 'framer-motion'
import projects from '../../data/projects'
import Image from 'next/image'
import ImagePic from '../Image'

function Projects() {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 space-y-16'>
        <h3 className='mt-10 absolute top-10  text-gray-500 text-2xl ' 
        >
          Recent Builds
        </h3>
      <motion.div 
        className='relative w-full flex overflow-x-scroll overflow-y-hidden md:overflow-hidden snap-x snap-mandatory z-20'
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
        {projects.map((project, i) => {
          return (
            <div 
              className=''
              key={i}
            >
              <motion.div 
                className='w-96 text-center flex flex-col snap-center space-y-4 items-center  flex-shrink-0 justify-center p-16 md:p-44 h-90 max-w-5xl'
                
              >
                <Image 
                  src='/proto.jpg'
                  alt='proto'
                  width={200}
                  height={200}
                  className=' rounded-md mx-auto h-40 w-60 border-1 border--200 shadow-lg mt-16 '
                />
                <h3 className='underline font-bold decoration-sky-500 text-sky-600/80 text-xl'>{project.name}</h3>
                <p className=''>{project.description}</p>
              </motion.div>
              
            </div>
          )
        })}
      </motion.div>
      {/* <div className='w-full absolute top-[18%] bg-blue-400/20 left-0 h-[235px] -skew-y-12' /> */}
      <div className='flex justify-center  w-full'>
          <div className='border border-gray-200 w-1/2 '/>
      </div>
    </div>
  )
}

export default Projects