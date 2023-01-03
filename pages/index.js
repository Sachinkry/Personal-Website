import Head from 'next/head'
import styles from '../styles/Home.module.css'
import link from 'next/link'
export default function Home() {
  return (
    <div>
       <Head>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <header className="bg-white py-10">

        <div className="container mx-auto mt-20 max-w-2xl  ">
          {/* <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">Welcome to My Personal Website</h1> */}
          <p className=" mx-4 text-xl text-gray-600 leading-tight">
            Hi there 👋, My name is <span className='font-bold'>Sachin</span>. Treasuring the fondness I developed for coding the prev year to create stuffs that are fun to build and useful. 
          </p>
          <br></br>
          <p className='mx-4 text-xl text-gray-600 leading-tight'>
            This year I would be exploring AI and ML stuffs like NLP, LLMs and others to build cool shits.
          </p>
          <br></br>
          <p className='mx-4 text-xl text-gray-600 '>Here are some of my builds:</p>
          
          <p className='mx-4 text-xl text-gray-600 px-2 leading-tight'>
            <a href='https://github.com/Sachinkry/Discord-bots/tree/main/bot-1' > • <span className='underline font-bold '>Discord-faucet-bot </span></a>
            , a bot that can be used to send testnet tokens to discord users.
          </p>
          <p className='mx-4 text-xl text-gray-600 px-2 leading-tight'>
            <a href='https://github.com/Sachinkry/GPT-3-Email-writer-extension'> • <span className='underline font-bold color-blue'>MailGenie</span></a>
            , a gmail extension that uses GPT-3 to write emails based on user's inputs.
          </p>
          <br></br>
          <p className='mx-4 text-xl text-gray-600 leading-tight'>
            When I'm not coding I enjoy <a href='https://www.goodreads.com/user/show/148280232?ref=nav_profile_l' className='underline'>reading</a>, listening to <a href='https://youtube.com/playlist?list=PLX3ti02JFmSGG71oOKr7N760J8QTHkjKy ' className='underline'>music</a>, watching <a href='https://zoro.to/home' className='underline'>animes</a> and <a href='https://twitter.com/SachinKry/status/1497952709890035712?s=20&t=wVn3EJJZOaLy-TjpWSjuNg' className='underline'>drawing</a> simple stuffs.
          </p>

          {/* contact and other links */}
          <br></br>
          <br></br>
          <p className='mx-4 text-xl text-gray-600 leading-tight'>
            If you would like to get in touch with me or just wanna say 'how u doin...'[Joey-Friends], you can reach out to me on the bird app <a href='https://twitter.com/SachinKry' className='underline'>@SachinKry</a> or mail me: <a href='mailto:heysachinkry@gmail.com' className='underline'>heysachinkry@gmail.com</a>
          </p>
        </div>
      </header>
      <footer className="bg-gray-100 py-5">
        <div className="container mx-auto">
          <p className="text-center text-gray-600">Last Updated: 2 Jan, 2023 </p>
        </div>
      </footer>
      
    </div>
  )
}
