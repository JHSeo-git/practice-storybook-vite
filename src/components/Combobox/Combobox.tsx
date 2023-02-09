import { Combobox as HeadlessCombobox } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

import { fruits } from './Combobox.sample';

export function Demo() {
  const [query, setQuery] = React.useState('');

  const filtered =
    query === ''
      ? fruits
      : fruits.filter((f) => {
          return f.textValue.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <HeadlessCombobox defaultValue={fruits[0]}>
      <div className="relative">
        <HeadlessCombobox.Input
          className={cn(
            'flex h-10 w-full items-center justify-between rounded-md border border-base-7 bg-transparent py-2 pl-3 pr-10 text-label4Regular placeholder:text-base-9',
            'focus:outline-none focus:ring-2 focus:ring-base-7 focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50'
          )}
          onChange={(e) => setQuery(e.target.value)}
        />
        <HeadlessCombobox.Button className="absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDown className="h-4 w-4 opacity-50" />
        </HeadlessCombobox.Button>
        <HeadlessCombobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
          {filtered.length === 0 && query !== '' ? (
            <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
              Nothing found.
            </div>
          ) : (
            filtered.map((fruit) => (
              <HeadlessCombobox.Option
                className={({ active }) =>
                  cn(
                    'relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900',
                    active && 'bg-teal-600 text-white'
                  )
                }
                key={fruit.value}
                value={fruit.textValue}
              >
                {({ selected, active }) => (
                  <>
                    <span className={cn('block truncate', selected && 'font-semibold')}>
                      {fruit.textValue}
                    </span>
                    {selected && (
                      <span
                        className={cn(
                          'absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600',
                          active && 'text-white'
                        )}
                      >
                        <Check className="h-5 w-5" />
                      </span>
                    )}
                  </>
                )}
              </HeadlessCombobox.Option>
            ))
          )}
        </HeadlessCombobox.Options>
      </div>
    </HeadlessCombobox>
  );
}
