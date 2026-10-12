import Link from 'next/link';
import { MapPin } from 'lucide-react';
import Badge from '../components/badge';
import type { Property } from '@/app/lib/db/properties';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'featured';
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { id, name, price, location, image, badge, specs, status } = property;
  const { beds, baths, sqm } = specs;

  const priceSuffix = status === 'rent' ? '/mo' : '';

  const stats = [
    { value: beds, label: 'Beds' },
    { value: baths, label: 'Baths' },
    { value: sqm, label: 'Sqm' },
  ];

  return (
    <article className='flex h-full min-w-0 flex-col overflow-hidden rounded-md bg-white shadow-sm'>
      <div
        className='relative aspect-[4/3] bg-gray-200 bg-cover bg-center'
        style={{ backgroundImage: image ? `url(${image})` : undefined }}
      >
        {badge && <Badge variant={badge} className='absolute left-3 top-3' />}
      </div>

      <div className='flex flex-1 flex-col p-5 sm:p-6'>
        <p className='font-serif text-xl text-navy sm:text-2xl'>
          GH₵ {price.toLocaleString()}
          {priceSuffix && (
            <span className='text-base text-navy/70 sm:text-lg'>
              {priceSuffix}
            </span>
          )}
        </p>

        <h3 className='mt-1 text-base text-gray-700 sm:text-lg'>{name}</h3>

        <p className='mt-3 flex items-center gap-1.5 text-sm text-gray-500'>
          <MapPin className='size-4 shrink-0 text-gold' />
          <span className='min-w-0'>{location}</span>
        </p>

        {/* stats row */}
        <div className='mt-5 grid grid-cols-3 border-t border-gray-100 pt-4'>
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`flex min-w-0 flex-col items-center gap-0.5 text-center ${
                i > 0 ? 'border-l border-gray-200' : ''
              }`}
            >
              <span className='text-base font-semibold text-navy'>{value}</span>
              <span className='text-[11px] uppercase tracking-wider text-gray-500'>
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className='mt-auto pt-5'>
          <Link
            href={`/properties/${id}`}
            className='block border border-navy/30 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-navy transition-colors hover:bg-navy hover:text-white'
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}

export default PropertyCard;