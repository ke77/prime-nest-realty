import Link from 'next/link';

const PrimaryCTA = ({ label }: { label: string }) => {
     return (
          <Link
               href='/book'
               className='bg-[#c9a45c] px-6 py-3 text-[13px] uppercase tracking-[0.15em] text-[#0b1220] rounded-sm transition-colors hover:bg-[#b8924a]'
          >
               {label}
          </Link>
     )
}


const SecondaryCTA = () => {
     return (
          <Link
               href='/about'
               className='border border-white/40 px-8 py-3 text-[13px] uppercase tracking-[0.15em] text-white rounded-md transition-colors hover:bg-white/10'
          >
               Our story
          </Link>
     )
}

export { PrimaryCTA, SecondaryCTA };