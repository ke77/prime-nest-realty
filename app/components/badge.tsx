import type { ReactNode } from 'react';
import type { BadgeVariant } from '@/app/lib/db/properties';

const variants: Record<BadgeVariant, { label: string; color: string }> = {
  featured: { label: 'Featured', color: 'bg-navy' },
  new: { label: 'New Listing', color: 'bg-badge-new' },
  hot: { label: 'Hot Deal', color: 'bg-badge-hot' },
};

interface BadgeProps {
  variant?: BadgeVariant;
  children?: ReactNode;
  className?: string;
}

const Badge = ({ variant = 'featured', children, className = '' }: BadgeProps) => {
  const { label, color } = variants[variant];

  return (
    <span
      className={`inline-block px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white ${color} ${className}`}
    >
      {children ?? label}
    </span>
  )
}

export default Badge;