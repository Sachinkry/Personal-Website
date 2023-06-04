import twitterThreads from "../data/twitterThreads";

export default function TwitterThreads() {
    return (
        <div className='space-y-4'>
            
            {twitterThreads.map((project,i) => {
                // console.log(project);
                return (
                  <div key={i} className=''>
                    <p className='text-mediumGreen '>
                      {project.title}
                    </p>
                    <p className='text-sm text-gray-400 mb-3'>{project.date}</p>
                    <hr className="border-t-1 border-gray-200" />

                  </div>
                )
              })}
        </div>
    )
}