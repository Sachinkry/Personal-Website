import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"

export default function Header() {
    return (
        <header className="sticky top-0 flex flex-row justify-between px-5 py-1 max-w-4xl mx-auto z-20 bg-gray-800 xl:items-center" >
            <motion.div 
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center "
            >
                {/* social icons */}
                <SocialIcon 
                  url="https://twitter.com/SachinKry" network="twitter" 
                  fgColor="white" 
                  bgColor="transparent" 
                  style={{height: 30, width: 30}}
                  className='mr-3'
                  />
                <SocialIcon 
                  url="https://twitter.com/SachinKry" network="github" 
                  fgColor="white" 
                  bgColor="transparent" 
                  style={{height: 30, width: 30}}
                  />
            </motion.div>

            <motion.div 
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}

                className="flex flex-row items-center  cursor-pointer"
            >
                <SocialIcon 
                  url="https://twitter.com/SachinKry" network="mailto" 
                  fgColor="white" 
                  bgColor="transparent" 
                  style={{height: 30, width: 30}}
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ml-3">
                    Get in touch!
                </p>
            </motion.div>
        </header>
    )
}