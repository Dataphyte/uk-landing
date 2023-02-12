import React from 'react';

const Projects = () => {
  return (
    <section className='w-full h-auto flex flex-col gap-10 items-center'>
      <h2 className='mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white'>
        Our Projects
      </h2>
      <div className='w-full max-w-7xl min-h-[800px] h-[100vh] gap-10 px-5 mx-auto py-8 grid grid-cols-6 grid-rows-4 justify-items-center'>
        {/* -- details card */}
        <div className=' col-span-2 row-span-3 w-full relative isolate overflow-hidden bg-gray-900 rounded-xl shadow-2xl border border-gray-400/10'>
          Hello
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1024 1024'
            className='absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]'
            aria-hidden='true'
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='url(#8d958450-c69f-4251-94bc-4e091a323369)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient id='8d958450-c69f-4251-94bc-4e091a323369'>
                <stop stopColor='#302e93' />
                <stop offset={1} stopColor='#222C47' />
              </radialGradient>
            </defs>
          </svg>
        </div>
        {/* -- screenshots */}
        <div className='bg-red-400/20 col-span-4 row-span-3 w-full'>
          Screenshots
        </div>
        {/* -- selector */}
        <div className='bg-red-400/20 col-span-6 row-span-1 w-full'>
          Selector
        </div>
      </div>
    </section>
  );
};

export default Projects;
