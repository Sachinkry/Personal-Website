import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AddNewThread() {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [date, setDate] = useState('');
    const [goToThreads, setGoToThreads] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (goToThreads) {
          router.push('/writes');
        }
      }, [goToThreads, router]);
    
    const createThread = async (e) => {
      e.preventDefault();
      router.push('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    //   try {
    //     await axios.post('/api/thread', { title, url, date });
    //     setGoToThreads(true);
    //   } catch (error) {
    //     console.error('Failed to create thread:', error);
    //   }
    };

    return (
        <div className='flex flex-col m-3 '>
            <form 
                className="flex flex-col  bg-white leading-snug w-full"
                onSubmit={createThread}
            >
               <h1 className="text-gray-500 mb-2 text-xl ">New Thread Page</h1>
                <label className="text-gray-500 mb-1 font-semibold mx-1 text-sm">Title</label>
                <input 
                    type="text"
                    placeholder="On AutoGPTs and its concerns"
                    className='border-2 border-gray-200 p-1 rounded-lg mb-4 text-sm text-gray-400'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label className="text-gray-500 mb-1 mx-1 font-semibold text-sm">Url</label>
                <input
                    placeholder="https://twitter.com/SachinKry/status/..."
                    value={url}
                    className='border-2 border-gray-200 p-1 rounded-lg mb-4 text-sm text-gray-600'
                    onChange={(e) => setUrl(e.target.value)}
                />

                <label className="text-gray-500 mb-1 mx-1 font-semibold text-sm">Date</label>
                <input 
                    type="text"
                    placeholder="May 23, 2023"
                    className='border-2 border-gray-200 p-1 rounded-lg mb-4 text-sm text-gray-600'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <div className="flex flex-start">
                    <button   className="bg-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-400 shadow-md hover:text-white"
                    type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}