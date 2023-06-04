import React from 'react'
import Navbar from '../components/Navbar'
import LastUpdate from '../components/LastUpdate'
import projects from '../data/projects'
import Footer from '../components/Footer'
import {adminData} from '../data/adminData'

function builds() {
  return (
    <div className='flex flex-col space-y-12   items-center justify-center px-9 py-16 bg-white max-w-2xl mx-auto '>
      <Navbar />
      <div className="inline-flex flex-col space-y-3.5 items-center justify-end   bg-white leading-snug">
        
        <div className="space-y-5">
            <p className="w-full text-4xl font-semibold  leading-snug text-gray-600 capitalize">Projects</p>
            <div className='space-y-5'>
              {projects.map((project,i) => {
                // console.log(project);
                return (

                  <div key={i}>
                    <p className='w-full text-lg leading-snug text-darkGray '><span><a className='text-mediumGreen underline underline-offset-2 cursor-ponter' href={project.url}>{project.name}</a></span>
                    ,  {project.description}
                    </p>
                  </div>
                )
              })}
            </div>
            <p className='text-mediumGreen'>See more on github... <a className='underline underline-offset-2' href={adminData.github}>[here]</a></p>
        </div>
      </div>
        <LastUpdate />
        {/* <Footer /> */}
    </div>
  )
}

export default builds