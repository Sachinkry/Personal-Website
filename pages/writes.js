import React from 'react'
import LastUpdate from '../components/LastUpdate'
import Navbar from '../components/Navbar'
import TwitterThreads from '../components/TwitterThreads'

function Writes() {
  return (
    <div className='flex flex-col space-y-12   items-center justify-start px-8 py-16 bg-white max-w-xl mx-auto '>
      <Navbar />

      {/* // do not load the page until the thread data is fetched */}
      <TwitterThreads />
      
    </div>
  )
}

export default Writes