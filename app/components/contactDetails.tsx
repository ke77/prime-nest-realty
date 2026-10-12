import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ContactLine {
  icon: LucideIcon;
  label: string;
  value: string | string[];
  href?: string;
}

const lines: ContactLine[] = [
  {
    icon: MapPin,
    label: 'Address',
    value: ['14 Independence Avenue', 'Accra, Ghana'],
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+233 30 277 0000',
    href: 'tel:+233302770000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@primenest.gh',
    href: 'mailto:hello@primenest.gh',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: ['Mon–Fri 8am–6pm', 'Saturday 9am–2pm'],
  },
];

const ContactDetails = () => {
  return (
    <div className='flex h-full min-w-0 flex-col rounded-t-sm bg-navy p-9 sm:p-9'>
      <div className='relative aspect-[16/10] overflow-hidden rounded-md bg-[url(/contact_office.png)] bg-cover bg-center'>
        <div className='absolute inset-0 bg-linear-to-t from-navy/95 via-navy/40 to-transparent' />
        <div className='absolute inset-x-0 bottom-0 px-5 pb-4 sm:px-6 sm:pb-5'>
          <p className='text-sm font-serif uppercase tracking-[0.2em] text-white sm:text-xl'>
            Our Accra Office
          </p>
          <p className='mt-3 text-[11px] uppercase tracking-[0.2em] text-white/70 sm:text-xs'>
            Open Mon-Sat
          </p>
        </div>
      </div>

      {/* contact lines */}
      <ul className='mt-8 space-y-7 px-2 sm:mt-10 sm:space-y-8 sm:px-3'>
        {lines.map(({ icon: Icon, label, value, href }) => {
          const Value = () => {
            if (Array.isArray(value)) {
              return (
                <>
                  {value.map((line, i) => (
                    <span key={i} className='block'>
                      {line}
                    </span>
                  ))}
                </>
              );
            }
            return <>{value}</>;
          };

          return (
            <li key={label} className='flex items-start gap-4'>
              <span className='flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold'>
                <Icon size={16} />
              </span>
              <div className='min-w-0 pt-1'>
                <p className='text-[11px] uppercase tracking-[0.22em] text-gold'>
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className='mt-1.5 block break-words text-sm leading-[1.6] text-white/90 transition-colors hover:text-white sm:text-[15px]'
                  >
                    <Value />
                  </a>
                ) : (
                  <p className='mt-1.5 text-sm leading-[1.6] text-white/90 sm:text-[15px]'>
                    <Value />
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default ContactDetails;