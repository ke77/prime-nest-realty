'use client';

import type { FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';

// shared field classes
const labelClass =
  'mb-2 block text-xs uppercase tracking-[0.15em] text-gray-700';
const fieldClass =
  'block w-full min-w-0 rounded-sm border-0 bg-linen/60 px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold/40 sm:text-sm';


const ContactForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='min-w-0'>
      <div className='flex items-center gap-3 sm:gap-4'>
        <span className='h-px w-8 shrink-0 bg-gold sm:w-10' />
        <p className='text-[11px] font-semibold uppercase tracking-[0.25em] text-gold sm:text-xs'>
          Start Your Journey
        </p>
      </div>

      <h2 className='mt-5 font-serif text-[2rem] leading-[1.15] text-ink sm:mt-6 sm:text-4xl lg:text-[2.75rem]'>
        Let&apos;s Find Your{' '}
        <span className='italic text-gold'>Perfect</span> Home
      </h2>

      <p className='mt-5 max-w-md text-base leading-[1.8] text-gray-600 sm:mt-6'>
        Fill out the form below and one of our dedicated agents will contact
        you within 24 hours.
      </p>

         <form onSubmit={handleSubmit} className='mt-8 space-y-10'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          <div className='min-w-0'>
            <label htmlFor='fullName' className={labelClass}>
              Full Name
            </label>
            <input
              id='fullName'
              name='fullName'
              type='text'
              autoComplete='name'
              placeholder='John Doe'
              className={fieldClass}
            />
          </div>

          <div className='min-w-0'>
            <label htmlFor='email' className={labelClass}>
              Email Address
            </label>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              placeholder='johndoe@gmail.com'
              className={fieldClass}
            />
          </div>
        </div>

        {/* phone */}
        <div>
          <label htmlFor='phone' className={labelClass}>
            Phone Number
          </label>
          <input
            id='phone'
            name='phone'
            type='tel'
            autoComplete='tel'
            placeholder='+233 XX XXX XXXX'
            className={fieldClass}
          />
        </div>

        {/* message */}
        <div>
          <label htmlFor='message' className={labelClass}>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={4}
            placeholder='How can we help you?'
            className={`${fieldClass} resize-none`}
          />
        </div>

        <button
          type='submit'
          className='w-full rounded-md bg-navy px-8 py-4 text-xs uppercase tracking-[0.15em] text-white transition-colors hover:bg-navy/90 sm:w-auto'
        >
          Send Inquiry
        </button>
      </form>
    </div>
  )
}

export default ContactForm;