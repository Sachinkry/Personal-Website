import Link from "next/link";
import axios from 'axios';
import { useState, useEffect } from "react";

export default function TwitterThreads() {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        axios.get('/api/thread').then((res) => {
            const threads = res.data;
            // console.log(threads);
            setThreads(threads);
        })
    }, []);

    return (
        <div className='space-y-4'>
            <Link 
               href='/subPages/addNewThread'
               className="hidden bg-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-400 shadow-md hover:text-white" 
            >
                Add new thread
            </Link>
            {threads && threads.map((thread,i) => {
                // console.log(thread);
                return (
                  <div key={i} className=''>
                    <a href={thread.url}>

                    <p className='text-mediumGreen '>
                      {thread.title}
                    </p>
                    </a>
                    <p className='text-sm text-gray-400 mb-3'>{thread.date}</p>
                    <hr className="border-t-1 border-gray-200" />
                  </div>
                )
              })}
        </div>
    )
}


