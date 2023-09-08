import axios from 'axios';
import { useState, useEffect } from "react";
import LastUpdate from "./LastUpdate";

export default function TwitterThreads() {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/thread');
        setThreads(res.data);
      } catch (error) {
        console.error('Error from threads-api:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start  leading-snug   w-full ">
      {loading ? (
        <div className="flex flex-col items-center justify-start  leading-snug">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-mediumGreen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" />
        </div>
      ) : (
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl font-semibold leading-snug text-gray-600">Threads</h1>
            </div>
            <div className="space-y-6 pb-4">
              
              {threads.map((thread, i) => (
                <div key={i}>
                  <a href={thread.url}>
                    <p className="text-mediumGreen">{thread.title}</p>
                  </a>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mb-2">{thread.date}</p>
                  <hr className="border-t-1 border-gray-200" />
                </div>
              ))}
            </div>
            <LastUpdate />
          </div>
      )}
    </div>
  );
}
