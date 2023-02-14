'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import classes from '@/utils/classes';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// -- image imports  -->

// -- Goloka -->
import GolokaImg_1 from '../assets/images/screenshots/goloka/goloka_1.png';
import GolokaImg_2 from '../assets/images/screenshots/goloka/goloka_2.png';
import GolokaImg_3 from '../assets/images/screenshots/goloka/goloka_3.png';
import GolokaImg_4 from '../assets/images/screenshots/goloka/goloka_4.png';
import GolokaImg_5 from '../assets/images/screenshots/goloka/goloka_5.png';

// -- nubia -->
import NubiaImg_1 from '../assets/images/screenshots/nubia/nubia_1.png';
import NubiaImg_2 from '../assets/images/screenshots/nubia/nubia_2.png';
import NubiaImg_3 from '../assets/images/screenshots/nubia/nubia_3.png';
import NubiaImg_4 from '../assets/images/screenshots/nubia/nubia_4.png';
import NubiaImg_5 from '../assets/images/screenshots/nubia/nubia_5.png';

// -- anfani -->
import AnfaniImg_1 from '../assets/images/screenshots/anfani/anfani_1.png';
import AnfaniImg_2 from '../assets/images/screenshots/anfani/anfani_2.png';
import AnfaniImg_3 from '../assets/images/screenshots/anfani/anfani_3.png';
import AnfaniImg_4 from '../assets/images/screenshots/anfani/anfani_4.png';
import AnfaniImg_5 from '../assets/images/screenshots/anfani/anfani_5.png';

// -- dataplex -->
import DataplexImg_1 from '../assets/images/screenshots/dataplex/dataplex_1.png';
import DataplexImg_2 from '../assets/images/screenshots/dataplex/dataplex_2.png';
import DataplexImg_3 from '../assets/images/screenshots/dataplex/dataplex_3.png';
import DataplexImg_4 from '../assets/images/screenshots/dataplex/dataplex_4.png';
import DataplexImg_5 from '../assets/images/screenshots/dataplex/dataplex_5.png';

// -- election -->
import ElectionImg_1 from '../assets/images/screenshots/election/election_1.png';
import ElectionImg_2 from '../assets/images/screenshots/election/election_2.png';
import ElectionImg_3 from '../assets/images/screenshots/election/election_3.png';
import ElectionImg_4 from '../assets/images/screenshots/election/election_4.png';
import ElectionImg_5 from '../assets/images/screenshots/election/election_5.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectList[0]);
  const [showList, setShowList] = useState(false);

  return (
    <section className='w-full h-auto flex flex-col gap-10 items-center'>
      <h2 className='mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white'>
        Projects
      </h2>

      <button
        className='-mt-2 -mb-8 py-2 px-8 rounded-lg shadow-lg bg-indigo-500 text-gray-100 md:hidden'
        onClick={() => setShowList(true)}
      >
        Project List
      </button>

      {/* -- #################################### */}
      {/* -- mobile prject list */}
      {/* -- #################################### */}
      <div
        className={classes(
          'md:hidden absolute w-[90%] bg-gray-900 h-auto py-20 px-3  border border-gray-300/30 z-10 rounded-lg items-center justify-center flex-wrap gap-4 duration-300 ease-out transition-all flex',
          showList
            ? ' translate-y-0 opacity-100 pointer-events-auto'
            : ' -translate-y-[50px] opacity-0 pointer-events-none'
        )}
      >
        <button
          className='absolute top-4 py-1 px-5 rounded-sm bg-rose-500 text-gray-100'
          onClick={() => setShowList(false)}
        >
          close
        </button>
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className={classes(
              'w-24 h-20 border rounded-lg shadow-xl shadow-indigo-500/5  transition-all ease-out duration-300 bg-white/5 cursor-pointer flex items-center justify-center p-2 text-center',
              selectedProject.name === project.name
                ? 'text-indigo-500 text-sm border-gray-100/60 shadow-indigo-500/50'
                : 'text-gray-200 text-base border-gray-100/30'
            )}
            onClick={() => {
              setSelectedProject(project);
              setShowList(false);
            }}
          >
            <p>{project.name}</p>
          </div>
        ))}
      </div>

      <div className='w-full max-w-7xl min-h-[800px] h-[90vh] gap-10 px-5 mx-auto py-8 grid grid-cols-6 grid-rows-4 justify-items-center'>
        {/* -- details card */}
        <div className='col-span-6 md:col-span-2 row-span-3 w-full relative isolate overflow-hidden bg-gray-800 rounded-2xl shadow-2xl border border-gray-400/10 py-4 px-8 flex flex-col gap-10'>
          {/* -- title */}
          <h3 className='text-3xl font-bold text-gray-100'>
            {selectedProject.name}
          </h3>
          <p className='text-gray-300/90 h-2/3 w-full overflow-hidden text-clip'>
            {selectedProject.desc}
          </p>

          <Link
            href={selectedProject.url}
            target='_blank'
            className='text-indigo-400 hover:text-indigo-300 transition-all duration-300 ease-out'
          >
            Try this project out &rarr;
          </Link>
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
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: false }}
          autoplay={true}
          loop
          draggable={false}
          preventClicks={true}
          className='col-span-6 md:col-span-4 row-span-3 w-full shadow-2xl rounded-2xl flex items-center shadow-indigo-500/20 justify-center'
        >
          {selectedProject.images.map((img, idx) => (
            <SwiperSlide
              className='w-full h-full flex items-center justify-center relative p-3'
              key={idx}
            >
              <Image
                src={img}
                fill
                className='object-cover object-center'
                alt='project screenshot'
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* -- selector */}
        <div className=' hidden md:col-span-6 row-span-1 w-full md:flex items-center justify-evenly p-5 gap-6'>
          {projectList.map((project, idx) => (
            <div
              key={idx}
              className={classes(
                'w-full h-full border rounded-lg shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-indigo-500/50 hover:-translate-y-2 transition-all ease-out duration-300 bg-white/5 cursor-pointer flex items-center justify-center p-2 text-center',
                selectedProject.name === project.name
                  ? 'text-indigo-500 text-2xl border-gray-100/60 shadow-indigo-500/50'
                  : 'text-gray-200 text-xl border-gray-100/30'
              )}
              onClick={() => setSelectedProject(project)}
            >
              <p className=' font-bold tracking-wide'>{project.name}</p>
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
    url: 'https://goloka.io',
    desc: 'Goloka is a cost-effective and AI-powered research design and verification solution that provides real-time, highly-localised and spatially-enriched insights to organisations crowdsourcing data globally.',
    images: [GolokaImg_1, GolokaImg_2, GolokaImg_3, GolokaImg_4, GolokaImg_5],
  },
  {
    name: 'Nubia',
    url: 'https://nubia.ai',
    desc: 'AI-powered data journalism news agency offering high-quality, unbiased and accurate news coverage to a wide range of audiences. At Nubia AI, we use advanced algorithms and machine learning techniques to analyse and interpret data to produce high-quality, informative, engaging news stories.',
    images: [NubiaImg_1, NubiaImg_2, NubiaImg_3, NubiaImg_4, NubiaImg_5],
  },
  {
    name: 'Anfani',
    url: 'https://anfani.org',
    desc: 'is a powerful beneficial ownership transparency platform that connects the invisible dots between public procurement and private sector contractors in Nigeria. Journalists and other civic actors can make speedy and personalised search & discovery experiences that are powered by AI.Dataphyte Africa: Building on the vision of Dataphyte in Nigeria, Dataphyte Africa is a unique media platform providing a fresh perspective on Africa rooted in facts and data. We offer personalised news articles that cater to the interests of our target audience, making it easier for them to stay informed about their countries of origin. By bridging the gap between Africa and the diaspora community, we aim to empower individuals and communities to make informed decisions and drive positive change in Africa.',
    images: [AnfaniImg_1, AnfaniImg_2, AnfaniImg_3, AnfaniImg_4, AnfaniImg_5],
  },
  {
    name: 'Dataplex',
    url: 'https://dataplex.dataphyte.com/',
    desc: 'Our proprietary data are well curated and ready for insights, analysis, and location intelligence documentation you won’t find anywhere. Our datasets are in machine-readable formats useful for the various needs of journalists, researchers and policy analysts. Check out our datasets on subjects like Economy, Education, Energy, Environment, Extractive, Finance, Health, Markets, Military, Police, SDGs, Security, Transportation and Water. ',
    images: [
      DataplexImg_1,
      DataplexImg_2,
      DataplexImg_3,
      DataplexImg_4,
      DataplexImg_5,
    ],
  },
  {
    name: 'Election Platform',
    url: 'https://elections.dataphyte.com/',
    desc: 'Portal is the largest repository of election data in Nigeria. From incidence tracking to results across all 774 local governments, DEP is a one-stop shop for elections data from national elections to elections at the subnational level from the governorship to state houses of assemblies. Need data on political players and the elections they won and lost? The port provides a map linking political history to present-day players.',
    images: [
      ElectionImg_1,
      ElectionImg_2,
      ElectionImg_3,
      ElectionImg_4,
      ElectionImg_5,
    ],
  },
  {
    name: 'IGBA',
    url: 'https://elections.dataphyte.com/',
    desc: 'IGBA is a location intelligence platform that transforms hyperlocal data into geospatial intelligence and analysis that help SMEs and development sectors drive strategy, product launch and programs evaluations.',
    images: [
      ElectionImg_1,
      ElectionImg_2,
      ElectionImg_3,
      ElectionImg_4,
      ElectionImg_5,
    ],
  },
];
