import Link from 'next/link';
import Navbar from '../layout/navbar';

interface Stat {
  value: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: '500', suffix: '+', label: 'Home Sold' },
  { value: '12', suffix: '', label: 'Years Experience' },
  { value: '98', suffix: '%', label: 'Client Satisfaction' },
];

const HeroSection = () => {
  return (
    <section className='relative flex min-h-[640px] w-full flex-col overflow-hidden bg-[url(/hero_image.png)] bg-cover bg-center bg-no-repeat lg:min-h-screen'>
      <div className='absolute inset-0 bg-linear-to-r from-overlay/85 from-0% via-overlay/55 via-45% to-overlay/15 to-100%' />
      <div className='absolute inset-0 bg-linear-to-b from-overlay/20 via-transparent to-overlay/30' />

      <Navbar />

      <div className='section-inner-container relative flex flex-1 items-center pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40'>
        <div className='max-w-[36rem]'>
          <div className='flex items-center gap-3 sm:gap-4'>
            <span className='h-px w-8 shrink-0 bg-gold sm:w-12' />
            <p className='text-[11px] font-medium uppercase tracking-[0.25em] text-gold sm:text-xs'>
              Premier Real Estate &middot; Accra
            </p>
          </div>


          <h1 className='mt-6 font-serif text-5xl font-normal leading-[1.05] text-white sm:mt-7 sm:text-6xl lg:text-7xl'>
            Your Dream Home
            <span className='mt-1 block text-gold'>Starts Here</span>
          </h1>

          <p className='mt-6 max-w-md text-sm leading-[1.7] text-white/85 sm:mt-7 sm:text-base'>
            Discover premium properties across Accra&apos;s most sought-after
            neighbourhoods &mdash; with expert guidance every step of the way.
          </p>

          <div className='mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4'>
            <Link
              href='/properties'
              className='bg-gold px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-dark sm:px-7'
            >
              Browse Properties
            </Link>
            <Link
              href='/about'
              className='border border-white/60 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10 sm:px-7'
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      <div className='section-inner-container relative pb-10 sm:pb-12 lg:pb-14'>
        <dl className='grid max-w-md grid-cols-3 items-end gap-6 border-t border-white/15 pt-6 sm:gap-10 lg:ml-auto lg:max-w-[32rem] lg:border-t-0 lg:pt-0'>
          {stats.map(({ value, suffix, label }) => (
            <div
              key={label}
              className='flex min-w-0 flex-col items-center text-center'
            >
              <p className='font-serif text-3xl leading-none text-white sm:text-4xl lg:text-[2.75rem]'>
                {value}
                <span className='text-gold'>{suffix}</span>
              </p>
              <p className='mt-2 text-[10px] uppercase leading-tight tracking-[0.18em] text-white/75 sm:mt-3 sm:text-[11px]'>
                {label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default HeroSection;