import Head from 'next/head'

import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Hobbies from '../components/Hobbies'
import Contact from '../components/Contact'

export default function Home() {
  const isDark = false
 

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white': ''} snap-y snap-mandatory h-screen overflow-scroll z-0`}>
      
      <Head>
        <title>Sachin's Portfolio</title>
      </Head>


      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center '>
        <About />
      </section>

      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      <section id='hobbies' className='snap-center'>
        <Hobbies />
      </section>

      <section id='contact' className='snap-end'>
        <Contact />
        <footer className="bg-gray-100 py-5">
          <div className="container mx-auto">
            <p className="text-center text-gray-600">Last Updated: 4 Mar 2023 </p>
          </div>
        </footer>
      </section>

    </div>
  )
}

