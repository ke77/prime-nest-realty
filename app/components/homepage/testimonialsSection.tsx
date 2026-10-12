import TestimonialCard from '../testimonialCard';
import type { Testimonial } from '../testimonialCard';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Kofi Mensah',
    role: 'Homeowner, Airport Residential',
    review:
      'PrimeNest handled my acquisition with the utmost professionalism. They found a gem in Airport Residential that wasn’t even on the market.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Osei Bonsu',
    role: 'Cantonments, Accra',
    review:
      'The level of discretion and service provided by the Concierge team was unparalleled. They didn’t just find a house, they found a lifestyle.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Nana Akua Mensah',
    role: 'Airport Residential',
    review:
      'Investing in Accra was a daunting prospect until I met the PrimeNest team. Their data-driven approach gave me total confidence.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className='w-full bg-sand'>
      <div className='section-inner-container py-16 sm:py-20 lg:py-24'>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-16'>
          <div className='min-w-0 lg:col-span-3'>
            {/* eyebrow */}
            <div className='flex items-center gap-3 sm:gap-4'>
              <span className='h-px w-8 shrink-0 bg-gold sm:w-10' />
              <p className='text-[11px] font-semibold uppercase tracking-[0.25em] text-gold sm:text-xs'>
                Client Stories
              </p>
            </div>

            <h2 className='mt-5 font-serif text-[2rem] leading-tight text-ink sm:mt-6 sm:text-4xl lg:text-5xl'>
              What Our{' '}
              <span className='italic text-gold'>Clients</span> Say
            </h2>
          </div>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3'>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection;