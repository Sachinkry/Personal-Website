import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LastUpdate from '../components/LastUpdate';
import Layout from '../components/Layout';

function Builds() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    
    axios.get('api/project')
      .then((res) => {
        if (!isCancelled) {
          setProjects(res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (!isCancelled) {
          console.log('Error:', error);
        }
      });
      
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <Layout>

      {isLoading ? (
        <div className="flex flex-col items-center justify-start  leading-snug">
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        </div>
      ) : (
        <div className="space-y-12">
          <div className="flex flex-col items-center justify-start  leading-snug w-full">
            <div className="inline-flex flex-col space-y-5 items-center justify-start  leading-snug">
              <div className="space-y-5">
                <p className="w-full text-4xl font-semibold leading-snug text-gray-600 dark:text-gray-700 capitalize mb-10">Projects</p>
                <div className="projects space-y-5">
                  {projects.map((project, i) => (
                    <div key={i}>
                      <p className="w-full leading-snug text-darkGray dark:text-gray-500">
                        <span>
                          <a className="text-mediumGreen  underline-offset-2 cursor-pointer" href={project.url}>
                            {project.name}
                          </a>
                        </span>
                        , {project.description}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-mediumGreen">
                  <a className="" href="https://github.com/Sachinkry">See more on GitHub...</a>
                </p>
              </div>
            </div>
          </div>
          <LastUpdate />
        </div>
      )}
    </Layout>
  );
}

export default Builds;
