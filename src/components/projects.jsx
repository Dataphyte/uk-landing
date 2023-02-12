import React from 'react';

const Projects = () => {
  return (
    <section className='w-full h-auto flex flex-col gap-10 items-center'>
      <h2 className='mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white'>
        Our Projects
      </h2>
      <div className='w-full max-w-7xl min-h-[800px] h-[100vh] gap-10 px-5 mx-auto py-8 grid grid-cols-6 grid-rows-4 justify-items-center'>
        {/* -- details card */}
        <div className=' col-span-2 row-span-3 w-full relative isolate overflow-hidden bg-gray-900 rounded-xl shadow-2xl border border-gray-400/10 p-4'>
          <h3 className='text-3xl font-bold text-gray-100'>Goloka</h3>
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
        <div className='col-span-6 row-span-1 w-full flex items-center justify-evenly p-5 gap-6'>
          {projectList.map((project, idx) => (
            <div
              key={idx}
              className='w-full h-full border rounded-lg shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:-translate-y-2 transition-all ease-out duration-300 bg-white/5 cursor-pointer'
            >
              Hello
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const projectList = [
  {
    name: 'Goloka',
    url: 'https://goloka.i0',
    desc: 'Goloka is a cost-effective and AI-powered research design and verification solution that provides real-time, highly-localised and spatially-enriched insights to organisations crowdsourcing data globally.',
    images: [],
  },
  {
    name: 'Nubia',
    url: 'https://nubia.ai',
    desc: 'AI-powered data journalism news agency offering high-quality, unbiased and accurate news coverage to a wide range of audiences. At Nubia AI, we use advanced algorithms and machine learning techniques to analyse and interpret data to produce high-quality, informative, engaging news stories.',
    images: [],
  },
  {
    name: 'Anfani',
    url: 'https://anfani.org',
    desc: ' is a powerful beneficial ownership transparency platform that connects the invisible dots between public procurement and private sector contractors in Nigeria. Journalists and other civic actors can make speedy and personalised search & discovery experiences that are powered by AI.Dataphyte Africa: Building on the vision of Dataphyte in Nigeria, Dataphyte Africa is a unique media platform providing a fresh perspective on Africa rooted in facts and data. We offer personalised news articles that cater to the interests of our target audience, making it easier for them to stay informed about their countries of origin. By bridging the gap between Africa and the diaspora community, we aim to empower individuals and communities to make informed decisions and drive positive change in Africa.',
    images: [],
  },
  {
    name: 'Dataplex',
    url: 'https://dataplex.dataphyte.com/',
    desc: 'Our proprietary data are well curated and ready for insights, analysis, and location intelligence documentation you won’t find anywhere. Our datasets are in machine-readable formats useful for the various needs of journalists, researchers and policy analysts. Check out our datasets on subjects like Economy, Education, Energy, Environment, Extractive, Finance, Health, Markets, Military, Police, SDGs, Security, Transportation and Water. ',
    images: [],
  },
  {
    name: 'Election Platform',
    url: '',
    desc: '',
    images: [],
  },
];
