import React from 'react'
import LastUpdate from '../components/LastUpdate'
import Navbar from '../components/Navbar'
import TwitterThreads from '../components/TwitterThreads'

function Reads() {
  return (
    <div className='flex flex-col space-y-12   items-center justify-start px-8 py-16 bg-white max-w-xl mx-auto '>
      <Navbar />

      <div className="flex flex-col items-start justify-start bg-white leading-snug w-full">
        <div className="flex flex-col space-y-5 items-start justify-start bg-white leading-snug">
          <div className="space-y-5 flex justify-start">
             <p className="w-full text-4xl font-semibold leading-snug text-gray-600 capitalize mb-10">Summaries</p>
             <div className="space-y-5">
             </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Reads