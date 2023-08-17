import React from 'react'
import LastUpdate from '../components/LastUpdate'
import Navbar from '../components/Navbar'
import TwitterThreads from '../components/TwitterThreads'
import Layout from '../components/Layout'

function Writes() {
  return (
    <Layout>

      {/* // do not load the page until the thread data is fetched */}
      <TwitterThreads />
      
    </Layout>
  )
}

export default Writes