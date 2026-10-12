'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Properties', href: '/properties' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Exclusives', href: '/exclusives' },
  { label: 'Concierge', href: '/concierge' },
  { label: 'About', href: '/about' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className='absolute inset-x-0 top-0 z-40 w-full bg-mist'>
      <nav className='section-inner-container flex h-16 items-center justify-between gap-4 lg:h-18'>
        {/* logo */}
        <Link
          href='/'
          onClick={() => setOpen(false)}
          className='shrink-0 font-serif text-lg font-bold tracking-wider text-ink'
        >
          PRIMENEST
        </Link>

        {/* desktop links: only from lg, there isn't room below that */}
        <ul className='hidden items-center gap-6 lg:flex xl:gap-10'>
          {links.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`border-b pb-0.5 text-xs uppercase tracking-[0.15em] transition-colors ${
                    active
                      ? 'border-gold text-copper'
                      : 'border-transparent text-gray-500 hover:text-ink'
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* desktop cta */}
        <Link
          href='/book'
          className='hidden shrink-0 bg-gold px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:bg-gold-dark lg:inline-block'
        >
          Book a viewing
        </Link>

        {/* mobile and tablet toggle */}
        <button
          type='button'
          aria-label='Toggle menu'
          aria-expanded={open}
          onClick={() => setOpen((open) => !open)}
          className='-mr-2 p-2 text-ink lg:hidden'
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile and tablet menu */}
      {open && (
        <div className='border-t border-black/5 bg-mist lg:hidden'>
          <div className='section-inner-container pb-6'>
            <ul className='flex flex-col pt-2'>
              {links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-sm uppercase tracking-[0.15em] ${
                      pathname === href ? 'text-copper' : 'text-gray-600'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href='/book'
              onClick={() => setOpen(false)}
              className='mt-4 block bg-gold py-3 text-center text-xs uppercase tracking-[0.15em] text-ink sm:inline-block sm:px-6'
            >
              Book a viewing
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar;