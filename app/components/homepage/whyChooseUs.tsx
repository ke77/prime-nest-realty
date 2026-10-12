import { MapPin, ShieldCheck, Headphones, Lock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: MapPin,
    title: 'Local Expertise',
    description:
      '12+ years navigating Accra’s real estate market with deep neighbourhood knowledge and trusted connections.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Listings',
    description:
      'Every property is personally vetted for authenticity, legal clarity, and quality before it reaches you.',
  },
  {
    icon: Headphones,
    title: 'End-to-End Support',
    description:
      'From your first search to signing day, our dedicated agents handle all paperwork and negotiations.',
  },
  {
    icon: Lock,
    title: 'Transparent Pricing',
    description:
      'No hidden fees. No surprises. Just honest, clear transactions you can trust completely.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className='w-full bg-navy-deep'>
      <div className='section-inner-container py-16 sm:py-20 lg:py-24'>
        {/* header: heading left, supporting paragraph right from lg */}
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-16'>
          <div className='min-w-0 lg:col-span-3'>
            {/* eyebrow */}
            <div className='flex items-center gap-3 sm:gap-4'>
              <span className='h-px w-8 shrink-0 bg-gold sm:w-10' />
              <p className='text-[11px] font-semibold uppercase tracking-[0.25em] text-gold sm:text-xs'>
                Our Difference
              </p>
            </div>

            {/* heading */}
            <h2 className='mt-5 font-serif text-[2rem] leading-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl'>
              Why Choose{' '}
              <span className='italic text-gold'>PrimeNest</span>
            </h2>
          </div>

          <p className='text-base leading-[1.8] text-white/70 lg:col-span-2 lg:self-end'>
            We combine deep local knowledge with unmatched dedication to make
            your real estate journey seamless and rewarding.
          </p>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4'>
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className='min-w-0 border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-gold/40 sm:p-7'
            >
              <Icon
                size={32}
                strokeWidth={1.5}
                className='text-gold'
                aria-hidden='true'
              />
              <h3 className='mt-5 font-serif text-xl text-white sm:text-2xl'>
                {title}
              </h3>
              <p className='mt-3 text-sm leading-[1.75] text-white/65'>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs;