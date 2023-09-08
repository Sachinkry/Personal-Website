import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AddNewProject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [goToProjects, setGoToProjects] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (goToProjects) {
      router.push('/builds');
    }
  }, [goToProjects, router]);

  const createProject = async (e) => {
    e.preventDefault();
    router.push('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    // try {
    //   await axios.post('/api/project', { name, description, url });
    //   setGoToProjects(true);
    // } catch (error) {
    //   console.error('Failed to create project:', error);
    // }
  };

  return (
    <div className="flex flex-col m-3">
      <form className="bg-white p-4 rounded-lg" onSubmit={createProject}>
        <h1 className="text-gray-500 mb-2 text-xl">New Project Page</h1>
        <label className="text-gray-500 mb-1 font-semibold text-sm">Name</label>
        <input
          type="text"
          placeholder="Enter project name"
          className="border-2 border-gray-200 p-1 rounded-lg mb-4 text-sm text-gray-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="text-gray-500 mb-1 font-semibold text-sm">Description</label>
        <textarea
          placeholder="Enter project description"
          className="border-2 border-gray-200 p-1 rounded-lg mb-4 text-sm text-gray-600"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label className="text-gray-500 mb-1 font-semibold text-sm">URL</label>
        <input
          type="text"
          placeholder="Enter project URL"
          className="border-2 border-gray-200 p-1 rounded-lg mb-4 text-sm text-gray-600"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <div className="flex flex-start">
          <button
            className="bg-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-400 shadow-md hover:text-white"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
