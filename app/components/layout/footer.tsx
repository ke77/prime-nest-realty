import { Suspense } from 'react';
import Link from 'next/link';
import CurrentYear from './currentYear';

interface FooterLink {
  label: string;
  href: string;
}

const links: FooterLink[] = [
  { label: 'Legal Notice', href: '/legal' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Global Offices', href: '/offices' },
]

const Footer = () => {

  return (
    <footer className='w-full bg-black text-white'>
      <div className='section-inner-container py-12 sm:py-7 flex flex-row justify-between items-center'>
        {/* logo */}
        <div className='text-center'>
          <Link
            href='/'
            className='font-serif text-lg transition-colors hover:text-gold-dark'
          >
            Prime <span className='text-gold'>Nest</span> Realty
          </Link>
        </div>


        <nav aria-label='Footer'>
          <ul className='grid grid-cols-2 gap-x-6 gap-y-4 text-center sm:flex sm:flex-wrap sm:justify-center sm:gap-x-10 lg:gap-x-12'>
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className='text-xs tracking-[0.15em] text-gray-400 transition-colors hover:text-white'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>


        <div className='border-t border-white/10 text-center'>
          <p className='text-xs uppercase leading-relaxed tracking-[0.12em] text-gray-300'>
            &copy;
            <Suspense fallback='2026'>
              <CurrentYear />
            </Suspense>
            <span className='ml-1.5'>PrimeNest Realty. All Rights Reserved. </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;