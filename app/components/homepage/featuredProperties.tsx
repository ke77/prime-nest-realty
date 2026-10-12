'use client';

import { useState } from 'react';
import { properties } from '@/app/lib/db/properties';
import type { PropertyStatus } from '@/app/lib/db/properties';
import PropertyCard from '../propertyCard';
import FilterTabs from '../filterTabs';

type Filter = 'all' | PropertyStatus;

const tabs: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'For Sale', value: 'sale' },
  { label: 'For Rent', value: 'rent' },
];

const FeaturedProperties = () => {
  const [filter, setFilter] = useState<Filter>('all');

  // show at most three cards
  const visible = properties
    .filter((property) => filter === 'all' || property.status === filter)
    .slice(0, 3);

  return (
    <section className='w-full bg-sand'>
      <div className='section-inner-container py-16 sm:py-20'>
        <div className='flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10'>
          <div className='min-w-0'>
            {/* eyebrow */}
            <div className='flex items-center gap-3 sm:gap-4'>
              <span className='h-px w-8 shrink-0 bg-gold sm:w-10' />
              <p className='text-[11px] font-semibold uppercase tracking-[0.25em] text-gold sm:text-xs'>
                Curated Listings
              </p>
            </div>

            <h2 className='mt-5 font-serif text-[2rem] leading-tight text-ink sm:mt-6 sm:text-4xl lg:text-5xl'>
              Featured{' '}
              <span className='italic text-gold'>Properties</span>
            </h2>
          </div>

          <FilterTabs tabs={tabs} active={filter} onChange={setFilter} />
        </div>

        <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {visible.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              variant={property.badge === 'featured' ? 'featured' : 'default'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties;