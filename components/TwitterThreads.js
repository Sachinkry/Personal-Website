import Link from "next/link";
import axios from 'axios';
import { useState, useEffect } from "react";
import LastUpdate from "./LastUpdate";

export default function TwitterThreads() {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      axios.get("/api/thread").then((res) => {
        const threads = res.data;
        setThreads(threads);
        setLoading(false);
      });
    } catch (error) {
      console.log("Error from threads-api:", error);
      setLoading(false);
    }
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
            <div className="space-y-4 pb-6">
              {/* <Link href="/subPages/addNewThread">
                <p className="bg-gray-300 rounded-lg px-4 py-2 text-sm hover:bg-gray-400 shadow-md hover:text-white">
                  Add new thread
                </p>
              </Link> */}
              {threads.map((thread, i) => (
                <div key={i}>
                  <a href={thread.url}>
                    <p className="text-mediumGreen">{thread.title}</p>
                  </a>
                  <p className="text-sm text-gray-400 mb-3">{thread.date}</p>
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
