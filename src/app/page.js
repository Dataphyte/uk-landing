import { Inter } from '@next/font/google';
import {
  AcademicCapIcon,
  ChartPieIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import Footer from '@/components/footer';
import Projects from '@/components/projects';
import BgGrad1 from '@/components/bg-gradient-1';
import HeroImg from '@/assets/images/hero_img_1.webp';

// -- team image import -->
import JoshuaImg from '@/assets/images/team/joshua.jpg';
import AdenikeImg from '@/assets/images/team/adenike.jpg';
import CharlesImg from '@/assets/images/team/charles.jpg';
import EmmanuelImg from '@/assets/images/team/emmanuel.jpg';
import OluseyiImg from '@/assets/images/team/oluseyi.jpg';
import AyantolaImg from '@/assets/images/team/ayantola.jpg';
import HanifaImg from '@/assets/images/team/hanifa.jpg';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='w-full flex flex-col items-center'>
      {/* -- ##################################### */}
      {/* -- HERO SECTION */}
      {/* -- ##################################### */}
      <div className='mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8 isolate relative'>
        <BgGrad1 />
        <div className='mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8'>
          <h1 className='text-3xl font-bold text-blue-400'>
            DATAPHYTE BUSINESS
          </h1>

          <h1 className='mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            Socioeconomic Questions, Answered With Data.
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            We are a research and data analytics company offering media,
            research and data analytics service for public and private sector
            growth.
          </p>
          <div className='mt-10 flex items-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-indigo-500 px-3.5 py-1.5 text-base transition-all duration-300 ease-out font-semibold leading-7 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
            >
              Request a call
            </a>
            <a
              href='https://dataphyte.com'
              target='_blank'
              rel='noreferrer'
              className='text-base font-semibold leading-7 text-white group duration-200 transition-all ease-out hover:text-blue-200'
            >
              View updates&nbsp;
              <span
                aria-hidden='true'
                className='group-hover:ml-2  duration-200 transition-all ease-out'
              >
                &rarr;
              </span>
            </a>
          </div>
        </div>
        <div className='mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32'>
          <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none relative'>
            <Image
              src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
              // src={HeroImg}
              alt='App screenshot'
              width={1432}
              height={802}
              className='w-[78rem] rounded-md bg-white/5 shadow-2xl shadow-indigo-500/10 ring-1 ring-white/10'
            />
            <div className='absolute w-full h-full bg-gradient-to-tl from-[#181E37]/20 to-[#222C47]/10 top-0' />
          </div>
        </div>
      </div>

      {/* -- ##################################### */}
      {/* -- ABOUT SECTION */}
      {/* -- ##################################### */}
      <div className='relative py-16 sm:py-24 w-full'>
        <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8'>
          <div className='relative sm:py-16 lg:py-0'>
            <div
              aria-hidden='true'
              className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
            >
              <div className='absolute inset-y-0 right-1/2 w-full rounded-r-3xl ring-1 ring-inset ring-white/10 bg-gradient-to-br from-white/10 to-white/5 lg:right-72 shadow-xl' />
              <svg
                className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
                width={404}
                height={392}
                fill='none'
                viewBox='0 0 404 392'
              >
                <defs>
                  <pattern
                    id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-400'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
                />
              </svg>
            </div>
            <div className='relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20'>
              {/* Testimonial card*/}
              <div className='relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-2xl shadow-indigo-600/10'>
                <img
                  className='absolute inset-0 h-full w-full object-cover'
                  src='https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100'
                  // src={HeroImg}
                  alt=''
                />
                <div className='absolute inset-0 bg-indigo-600 mix-blend-multiply' />
                <div className='absolute inset-0 bg-gradient-to-t from-[#1B2230] via-[#212936] opacity-90' />
                <div className='relative px-8'>
                  <div>
                    <h1 className='text-3xl font-bold text-gray-100'>
                      DATAPHYTE
                    </h1>
                  </div>
                  <blockquote className='mt-8'>
                    <div className='relative text-lg font-medium text-white md:flex-grow'>
                      <svg
                        className='absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400'
                        fill='currentColor'
                        viewBox='0 0 32 32'
                        aria-hidden='true'
                      >
                        <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                      </svg>
                      <p className='relative text-gray-200'>
                        Without data, you&apos;re just another person with an
                        opinion.
                      </p>
                    </div>

                    <footer className='mt-4'>
                      <p className='text-base font-semibold text-indigo-200'>
                        Edwards Deming, Statistician
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className='relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0'>
            {/* Content area */}
            <div className='pt-12 sm:pt-16 lg:pt-20'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl'>
                Welcome to Dataphyte
              </h2>
              <p className='mt-2 text-gray-200'>
                Where Data Meets Storytelling.
              </p>
              <div className='mt-6 space-y-6 text-gray-300'>
                <p className='text-lg'>
                  In today&apos;s fast-paced world, it&apos;s crucial to be
                  informed and up-to-date on current events. That&apos;s why we
                  specialize in providing our clients with compelling and
                  informative data-driven journalism that educates and engages
                  audiences across all platforms.
                </p>
                <p className='text-base leading-7'>
                  We are a team of dedicated data analysts and journalists, who
                  combine our skills and expertise to provide our clients with
                  accurate, reliable and engaging insights. With years of
                  experience in data analysis and storytelling, we have a deep
                  understanding of how to extract insights from complex data
                  sets and present them in a way that is easy to understand and
                  actionable.
                </p>
                <p className='text-base leading-7'>
                  Our approach to data analysis and journalism is rooted in
                  rigorous research and a commitment to accuracy. We understand
                  that data is the lifeblood of modern decision-making, and we
                  are passionate about using it to help our clients make
                  informed decisions. At <em>Dataphyte</em>, we understand the
                  importance of data security and privacy. We use the latest
                  technology and security protocols to ensure that your data is
                  always protected.
                </p>
              </div>
            </div>{' '}
            <div className='mt-10'>
              <a
                href='https://www.dataphyte.com/topics/latest-reports/special-report/'
                className='text-base font-medium text-indigo-400'
                target='_blank'
                rel='noreferrer'
              >
                Learn more about how we&apos;re changing the world
                <span aria-hidden='true'> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* -- ##################################### */}
      {/* -- PREMIUM OFFERING */}
      {/* -- ##################################### */}
      <div className='mx-auto w-full max-w-[1200px] py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center md:shadow-2xl shadow-indigo-400/20 sm:rounded-3xl sm:px-16 border border-gray-400/10'>
          <h2 className='mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white'>
            Access Our Premium Offerings
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300'>
            Unlock exclusive features and take your experience to the next level
            with our premium subscription. Gain access to a wide range of
            benefits
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              Get started
            </a>
          </div>
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
              fill='url(#827591b1-ce8c-4110-b064-7cb85a0b1217)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient id='827591b1-ce8c-4110-b064-7cb85a0b1217'>
                <stop stopColor='#7775D6' />
                <stop offset={1} stopColor='#E935C1' />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* -- ##################################### */}
      {/* -- SERVICES */}
      {/* -- ##################################### */}
      <div className='relative isolate overflow-hidden  py-24 sm:py-32 w-[90%] rounded-2xl shadow-3xl mb-24'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              Services
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'>
            {servicesCards.map((card) => (
              <div
                key={card.name}
                className='flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 hover:-translate-y-[10px] transition-all duration-300 ease-out hover:shadow-2xl cursor-pointer'
              >
                <card.icon
                  className='h-7 w-5 flex-none text-indigo-500'
                  aria-hidden='true'
                />
                <div className='text-base leading-7'>
                  <h3 className='font-semibold text-white'>{card.name}</h3>
                  <p className='mt-2 text-gray-300 text-sm'>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* -- ##################################### */}
      {/* -- PROJECTS */}
      {/* -- ##################################### */}
      <Projects />

      {/* -- ##################################### */}
      {/* -- MEET THE TEAM*/}
      {/* -- ##################################### */}
      <div className='w-full py-32'>
        <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
          <div className='mx-auto max-w-2xl'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'>
              Meet the <b className='text-indigo-500'>team</b>
            </h2>
            <p className='mt-4 text-lg leading-8 text-gray-300'>
              We&apos;re a dynamic group of individuals who are passionate about
              what we do.
            </p>
          </div>
          <ul
            role='list'
            className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'
          >
            {people.map((person) => (
              <li key={person.name}>
                <Image
                  className='mx-auto h-56 w-56 rounded-full object-cover'
                  src={person.imageUrl}
                  width='224'
                  height='224'
                  alt=''
                />
                <h3 className='mt-6 text-base font-semibold leading-7 tracking-tight text-gray-100'>
                  {person.name}
                </h3>
                <p className='text-sm leading-6 text-gray-300'>{person.role}</p>
                <ul role='list' className='mt-6 flex justify-center gap-x-6'>
                  <li>
                    <a
                      href={person.twitterUrl}
                      className='text-gray-400 hover:text-gray-100'
                    >
                      <span className='sr-only'>Twitter</span>
                      <svg
                        className='h-5 w-5'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className='text-gray-400 hover:text-gray-100'
                    >
                      <span className='sr-only'>LinkedIn</span>
                      <svg
                        className='h-5 w-5'
                        aria-hidden='true'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* -- ##################################### */}
      {/* -- FOOTER */}
      {/* -- ##################################### */}
      <Footer />
    </main>
  );
}

const servicesCards = [
  {
    name: 'Data Collection',
    description:
      'We deploy combine human agency and technology to gather primary and secondary data needed for business, policy, and development decisions. Our thousands of field agents are on standby to conduct surveys, focus groups, and monitor projects to give you bespoke analysis and desired results. ',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Training',
    description:
      'Dataphyte Academy offers (both) physical and virtual classes in data science and data journalism, tailored to help individuals and organisations learn to use data analytics skills for insights, storytelling and smart decisions. ',
    icon: AcademicCapIcon,
  },
  {
    name: 'Design',
    description:
      'We help organisations present both data and reports in easy-to-digest and visually compelling ways. We use state-of-the-art design tools and location intelligence software to deliver the passion and purpose your reports deserve. ',
    icon: ChartPieIcon,
  },
];

const people = [
  {
    name: 'Joshau Olufemi',
    role: 'CEO',
    imageUrl: JoshuaImg,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Adenike Aloba',
    role: 'Program Director',
    imageUrl: AdenikeImg,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Charles Mba',
    role: 'Program Manager',
    imageUrl: CharlesImg,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Hanifa Babsadiq',
    role: 'Communications Specialist',
    imageUrl: HanifaImg,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Emmanuel Alawode',
    role: 'Software Developer',
    imageUrl: EmmanuelImg,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Ayantola Ayanlade',
    role: 'Data Journalist',
    imageUrl: AyantolaImg,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Oluseyi Olufemi',
    role: 'Research Lead',
    imageUrl: OluseyiImg,
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
];

const stats = [
  { label: 'Founded', value: '2018' },
  { label: 'Employees', value: '50' },
  { label: 'Users', value: '15,213' },
  { label: 'Products', value: '7+' },
];
