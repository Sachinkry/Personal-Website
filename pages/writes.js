import React from 'react'
import LastUpdate from '../components/LastUpdate'
import Navbar from '../components/Navbar'
import TwitterThreads from '../components/TwitterThreads'

function writes() {
  return (
    <div className='flex flex-col space-y-12   items-center justify-start px-9 py-16 bg-white max-w-2xl mx-auto '>
      <Navbar />
      <div className="flex flex-col space-y-3.5 items-center justify-start   bg-white leading-snug w-full">
      <div className="flex flex-col space-y-5 justify-start w-full">
        <h1 className="w-sm text-4xl font-semibold  leading-snug text-gray-600 ">Threads</h1>
        
        <TwitterThreads />
      </div>
      </div>
      <LastUpdate />
    </div>
  )
}

export default writes