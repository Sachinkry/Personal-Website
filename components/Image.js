import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function ImagePic() {
  return (
    <motion.div
        initial={{
            y: -500,
            opacity: 0,
        }}
        animate={{
            y: 0,
            scale: 1,
            opacity: 1,
        }}
        transition={{
            duration: 1.5,
        }}
    >
        <Image 
          src='/pfp-sac.jpg'
          alt='pfp-sachin'
          width={200}
          height={200}
          className=' rounded-md mx-auto h-40 w-40 border-1 border--200 shadow-lg mt-16'
        />
    </motion.div>
  )
}

export default ImagePic