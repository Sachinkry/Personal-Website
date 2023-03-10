import React from 'react'
import LastUpdate from '../components/LastUpdate'
import Navbar from '../components/Navbar'

function writes() {
  return (
    <div className='flex flex-col space-y-12   items-center justify-start px-9 py-16 bg-white max-w-2xl mx-auto '>
      <Navbar />
      <div className="flex flex-col space-y-3.5 items-center justify-start   bg-white leading-snug w-full">
      <div className="flex flex-col space-y-5 justify-start w-full">
      <p className="w-sm text-4xl font-semibold  leading-snug text-gray-600 ">Writings</p>
            <div className='space-y-5'>
              <p className='w-full text-lg leading-snug text-darkGray '>[Empty]</p>
            </div>
      </div>
      </div>
      <LastUpdate />
    </div>
  )
}

export default writes