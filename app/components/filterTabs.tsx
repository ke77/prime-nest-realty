interface Tab<T extends string> {
  label: string;
  value: T;
}

interface FilterTabsProps<T extends string> {
  tabs: Tab<T>[];
  active: T;
  onChange: (value: T) => void;
}

const FilterTabs = <T extends string>({
  tabs,
  active,
  onChange,
}: FilterTabsProps<T>) => {
  return (
    <div
      className='flex shrink-0 flex-wrap gap-2 sm:gap-3'
      role='tablist'
    >
      {tabs.map(({ label, value }) => {
        const isActive = active === value;
        return (
          <button
            key={value}
            type='button'
            role='tab'
            aria-selected={isActive}
            onClick={() => onChange(value)}
            className={`rounded-full border px-5 py-2 text-xs font-medium transition-colors sm:px-6 ${
              isActive
                ? 'border-navy bg-navy text-white'
                : 'border-gold/40 bg-transparent text-gold hover:border-gold hover:bg-gold/5'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  )
}

export default FilterTabs;