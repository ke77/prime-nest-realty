import { Suspense } from 'react';
import Link from 'next/link';
import CurrentYear from './currentYear';

interface FooterLink {
  label: string;
  href: string;
}

const links: FooterLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Properties', href: '/properties' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

const Footer = () => {
  return (
    <footer className='w-full bg-black text-white'>
      <div className='section-inner-container py-10 sm:py-12'>
        <div className='flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-6'>
          <Link
            href='/'
            className='shrink-0 font-serif text-lg transition-colors hover:text-gold-dark'
          >
            Prime<span className='text-gold'>Nest</span> Realty
          </Link>

          <nav aria-label='Footer'>
            <ul className='grid grid-cols-2 gap-x-8 gap-y-3 text-center sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8 md:gap-x-6 lg:gap-x-9'>
              {links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className='text-sm tracking-[0.15em] text-gray-300 transition-colors hover:text-white'
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='mt-8 border-t border-white/10 pt-6 text-center sm:mt-10 sm:pt-8'>
          <p className='text-[11px] leading-relaxed tracking-[0.12em] text-gray-400 sm:text-xs'>
            &copy;{' '}
            <Suspense fallback='2026'>
              <CurrentYear />
            </Suspense>{' '}
            PrimeNest Realty. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;