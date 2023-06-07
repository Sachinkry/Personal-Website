import React from 'react'
import Navbar from '../components/Navbar'
import LastUpdate from '../components/LastUpdate'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'

function builds() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("api/project").then((res) => {
      const projects = res.data;
      setProjects(projects);
      // console.log(projects);
    })
  } ,[])


  return (
    <div className='flex flex-col space-y-12   items-center justify-center px-9 py-16 bg-white max-w-2xl mx-auto '>
      <Navbar />
      <div className="inline-flex flex-col space-y-5 items-center justify-end   bg-white leading-snug">
        
        <div className="space-y-5">
            <p className="w-full text-4xl font-semibold  leading-snug text-gray-600 capitalize mb-10">Projects</p>
            <div className='space-y-5'>
            <Link 
              href="/subPages/addNewProject"
              className="bg-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-400 shadow-md hover:text-white hidden" 
            >
            Add new Product
            </Link>
              {projects.map((project,i) => {
                // console.log(project);
                return (

                  <div key={i} 
                    
                  >
                    <p className='w-full text-lg leading-snug text-darkGray '><span><a className='text-mediumGreen underline underline-offset-2 cursor-ponter' href={project.url}>{project.name}</a></span>
                    ,  {project.description}
                    </p>
                  </div>
                )
              })}
            </div>
            <p className='text-mediumGreen'>See more on github... <a className='underline underline-offset-2' href="https://github.com/Sachinkry">[here]</a></p>
        </div>
      </div>
        <LastUpdate />
        
    </div>
  )
}

export default builds