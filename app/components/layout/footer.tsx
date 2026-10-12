import { Suspense } from 'react';
import Link from 'next/link';
import CurrentYear from './currentYear';

interface FooterLink {
  label: string;
  href: string;
}

const links: FooterLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Propeerties', href: '/properties' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

const Footer = () => {

  return (
    <footer className='w-full bg-black text-white'>
      <div className='section-inner-container py-10 sm:py-12 flex flex-col gap-8 md:flex-row md:gap-6 md:justify-between md:items-center md:py-7'>
        {/* logo */}
        <div className='text-center md:text-left'>
          <Link
            href='/'
            className='font-serif text-lg transition-colors hover:text-gold-dark'
          >
            Prime<span className='text-gold'>Nest</span> Realty
          </Link>
        </div>


        <nav aria-label='Footer'>
          <ul className='grid grid-cols-2 gap-x-6 gap-y-4 text-center sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8 md:gap-x-6 lg:gap-x-9'>
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className='text-sm tracking-[0.15em] text-gray-400 transition-colors hover:text-white'
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>


        <div className='border-t border-white/10 pt-6 text-center md:border-t-0 md:pt-0 md:text-right'>
          <p className='text-xs leading-relaxed tracking-[0.12em] text-gray-400'>
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