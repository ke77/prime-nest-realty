import { Quote, Star } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  review: string;
  rating: number;
}

type TestimonialCardProps = Omit<Testimonial, 'id'>;

const TestimonialCard = ({ name, role, review, rating }: TestimonialCardProps) => {
  return (
    <article className='flex h-full min-w-0 flex-col rounded-lg bg-white px-7 pb-9 pt-8 shadow-[0_4px_24px_-8px_rgba(11,31,75,0.08)] sm:px-9 sm:pb-10 sm:pt-10'>
      {/* gold quote icon */}
      <Quote
        aria-hidden='true'
        className='size-9 fill-gold text-gold sm:size-10'
      />

      <p className='mt-6 font-serif text-base italic leading-[1.9] text-gray-600 sm:text-[17px]'>
        {review}
      </p>

      <span className='mt-8 block h-px w-12 bg-gold' />

      <div
        className='mt-7 flex gap-1'
        role='img'
        aria-label={`${rating} out of 5 stars`}
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            className={`size-4 ${
              n <= rating ? 'fill-gold text-gold' : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>

      <div className='mt-auto pt-6'>
        <p className='font-sans text-base font-bold text-navy sm:text-lg'>
          {name}
        </p>
        {role && (
          <p className='mt-1 text-sm text-gray-500'>{role}</p>
        )}
      </div>
    </article>
  )
}

export default TestimonialCard;