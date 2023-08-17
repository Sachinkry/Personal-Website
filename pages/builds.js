import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import LastUpdate from '../components/LastUpdate';
import Layout from '../components/Layout';

function Builds() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      axios.get('api/project').then((res) => {
        const projects = res.data;
        setProjects(projects);
        setIsLoading(false);
      });
    } catch (error) {
      console.log('Error from projects-api:', error);
    }
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
                <p className="w-full text-4xl font-semibold leading-snug text-gray-600 capitalize mb-10">Projects</p>
                <div className="space-y-5">
                  {projects.map((project, i) => (
                    <div key={i}>
                      <p className="w-full leading-snug text-darkGray">
                        <span>
                          <a className="text-mediumGreen underline underline-offset-2 cursor-pointer" href={project.url}>
                            {project.name}
                          </a>
                        </span>
                        , {project.description}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-mediumGreen">
                  See more on GitHub... <a className="underline underline-offset-2" href="https://github.com/Sachinkry">[here]</a>
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
