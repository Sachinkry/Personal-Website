import Head from 'next/head'
import Navbar from '../components/Navbar'
import projects from '../data/projects'
import Image from 'next/image'

export default function Home() {
 
  // recommend kro yaar you are my friend
  return (
    <div className='bg- mt-10 max-w-2xl mx-auto'>
      <header className="bg-white ">
        <Image 
          src='/pfp-sac.jpg'
          alt='pfp-sachin'
          width={200}
          height={200}
          className=' mx-5 h-40 w-40 border-1 border--200 shadow-lg'
        />
        {/* <Navbar /> */}

      </header>
      {/* Main body */}
      <main>

        <div className="container mx-auto mt-10   tracking-tight ">
          <p className=" mx-4 text-xl text-gray-600 leading-tight mt-5">
            Hi there 👋, This is <span className='font-bold'>Sachin</span>. I treasure the fondness I developed for coding last year to create stuffs that are useful, and fun to build <span className='font-semibold'>&#91;</span>umm.. actually involves smashing head on the keyboard & some &apos;aha&apos; moments<span className='font-semibold'>&#93;</span>. 
          </p>
          {/* <br></br> */}
          <p className='mx-4 mt-5 text-xl text-gray-600 leading-tight'>
            This year I am exploring AI and ML stuffs like NLP, LLMs and others to build cool shits.
          </p>
          
          <p className='mx-4 mt-5 text-xl text-gray-600 leading-tight'>
            When I am not coding I enjoy <a 
            href='https://www.goodreads.com/user/show/148280232?ref=nav_profile_l' 
            className='underline'>reading</a>, listening to <a href='https://youtube.com/playlist?list=PLX3ti02JFmSGG71oOKr7N760J8QTHkjKy ' className='underline'>music</a>, watching <a  className=''>animes</a> and <a 
            href='https://twitter.com/SachinKry/status/1497952709890035712?s=20&t=wVn3EJJZOaLy-TjpWSjuNg' className='underline'>drawing</a> simple stuffs.
          </p>
          
          {/* projects */}
          <div className=''>

              <p className='mx-4 mt-5 mb-1 text-xl text-gray-600 '>Here are some of my recent builds:</p>
              {projects.map((project, index) => {
                return (
                      <p key={index} className='mx-4 my-2 text-xl text-gray-600 px-2 leading-tight' >
                        <a href={project.url} > • <span className='underline font-bold '>{project.name}</span></a>
                        &#x2c; {project.description}
                      </p>

                )
              })}
              
          </div>         

          {/* contact and other links */}         
          <p className='mx-4 mt-5 text-xl text-gray-600 leading-tight mb-4'>
            If you would like to get in touch with me or just wanna say &apos;how u doin...&apos;[Joey-Friends],  reach out to me on the bird app <a href='https://twitter.com/SachinKry' className='underline font-semibold'>@SachinKry</a> or mail me: <a href='mailto:heysachinkry@gmail.com' className='underline font-semibold'>heysachinkry@gmail.com</a>
          </p>
        </div>
      </main>
      <footer className="bg-gray-100 py-5">
        <div className="container mx-auto">
          <p className="text-center text-gray-600">Last Updated: 3 Feb, 2023 </p>
        </div>
      </footer>
      
    </div>
  )
}
