import BgGrad1 from './bg-gradient-1';

const navigation = {
  solutions: [
    { name: 'Goloka', href: 'https://goloka.io' },
    { name: 'Dataplex', href: 'https://dataplex.dataphyte.com/' },
    { name: 'Nubia', href: 'https://nubia.ai' },
    { name: 'Election', href: 'https://elections.dataphyte.com/' },
  ],
  projects: [
    {
      name: 'Gender',
      href: 'https://www.dataphyte.com/topics/latest-reports/gender/',
    },
    { name: 'Open Data', href: 'https://open.dataphyte.com/' },
    {
      name: 'Elections',
      href: 'https://www.dataphyte.com/topics/latest-reports/elections/',
    },
    { name: 'End SARS', href: 'https://www.dataphyte.com/endsars/' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: 'https://dataphyte.com' },
    { name: 'Partners', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer
      className='bg-gray-900/60 w-full relative'
      aria-labelledby='footer-heading'
    >
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <BgGrad1 />
      <div className='mx-auto max-w-7xl px-6 py-4 sm:py-24 lg:px-8 lg:py-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <p className='text-2xl text-blue-500 font-bold tracking-wider'>
            DATAPHYTE
          </p>
          <div className='mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0'>
            <div className='text-white text-2xl col-span-1'>
              <p className='text-lg'>Contact Info</p>
              <p className='text-sm text-gray-200 mt-6'>
                Nigeria: 34, Okotie Eboh Street, Utako, Abuja, FCT 900108.
                (+234) 811 666 5321 partners@dataphyte.com
              </p>
              <p className='text-sm text-gray-200 mt-3'>
                UK: International House, 126 Colmore Row, Birmingham, B3 3AP
              </p>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  Solutions
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 text-gray-300 hover:text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  Projects
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.projects.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 text-gray-300 hover:text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-white'>
                  Company
                </h3>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-sm leading-6 text-gray-300 hover:text-white'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
