import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className='w-full bg-mist'>
      <div className='section-inner-container grid grid-cols-1 items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:py-24'>
        {/* text */}
        <div className='min-w-0'>
          <div className='flex items-center gap-3 sm:gap-4'>
            <span className='h-px w-8 shrink-0 bg-gold sm:w-10' />
            <p className='text-[11px] font-semibold uppercase tracking-[0.25em] text-gold sm:text-xs'>
              Who We Are
            </p>
          </div>

          <h2 className='mt-5 font-serif text-[2rem] leading-[1.2] text-ink sm:mt-6 sm:text-4xl lg:text-[2.75rem]'>
            Connecting People With{' '}
            <span className='italic text-gold'>Exceptional</span>{' '}
            Homes Since 2012
          </h2>

          <div className='mt-6 space-y-5 text-base leading-[1.9] text-gray-600 sm:mt-7'>
            <p>
              PrimeNest Realty has been connecting people with exceptional homes
              since 2012. Whether you&apos;re buying your first property,
              upgrading your lifestyle, or seeking a smart investment, our team
              brings local expertise, market insight, and genuine care to every
              transaction.
            </p>
            <p>
              We believe finding a home should be exciting &mdash; not
              stressful. That&apos;s why we&apos;re with you from the first
              search to the final handshake.
            </p>
          </div>

          <Link
            href='/book'
            className='mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:text-navy sm:mt-10'
          >
            Start your journey
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* image collage */}
        <div className='mx-auto w-full min-w-0 max-w-md px-[8%] pb-[12%] pt-[6%] lg:max-w-full lg:px-[6%]'>
          <div className='relative aspect-[341/323]'>
            <div className='absolute inset-0 rounded-lg bg-[url(/about_main.png)] bg-cover bg-center' />

            {/* stat card */}
            <div className='absolute -right-[6%] -top-[8%] z-10 flex aspect-[124/80] w-[42%] flex-col items-center justify-center rounded-md bg-navy px-[5%] text-center shadow-xl sm:w-[38%] lg:w-[36%]'>
              <span className='font-serif text-2xl leading-none text-gold sm:text-3xl'>
                98%
              </span>
              <span className='mt-1.5 text-[9px] uppercase leading-tight tracking-[0.12em] text-white/85 sm:text-[11px]'>
                Client Satisfaction
              </span>
            </div>

            <div className='absolute -bottom-[9%] -left-[6%] z-20 w-[45%] rounded-lg bg-white p-2 shadow-xl sm:w-[40%]'>
              <div className='aspect-[196/125] rounded-md bg-[url(/about_secondary.png)] bg-cover bg-center' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;