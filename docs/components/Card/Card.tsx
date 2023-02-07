import cn from 'clsx';
import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  image?: string;
  arrow?: boolean;
  href: string;
}

export function Card({ children, title, icon, image, arrow, href }: CardProps) {
  const animatedArrow = arrow ? (
    <span className={cn('transition-transform duration-75', 'group-hover:translate-x-[2px]')}>
      →
    </span>
  ) : null;

  if (image) {
    return (
      <Link
        href={href}
        className={cn(
          'group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-gray-100 text-current no-underline shadow shadow-gray-100 transition-all duration-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-50 dark:shadow-none',
          'hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100 dark:hover:border-neutral-500 dark:hover:bg-neutral-700 dark:hover:shadow-none',
          'active:shadow-sm active:shadow-gray-200'
        )}
      >
        {children}
        <span
          className={cn(
            'flex items-start font-bold',
            'gap-2 p-4 text-gray-700 dark:text-gray-300',
            'hover:text-gray-900 dark:hover:text-gray-100'
          )}
        >
          {icon}
          <span className="flex gap-1">
            {title}
            {animatedArrow}
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-transparent text-current no-underline shadow-sm shadow-gray-100 transition-all duration-200 dark:border-neutral-800 dark:shadow-none',
        'hover:border-gray-300 hover:bg-slate-50 hover:shadow-md hover:shadow-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-900 dark:hover:shadow-none',
        'active:shadow-sm active:shadow-gray-200'
      )}
    >
      <span
        className={cn(
          'flex items-start font-bold',
          'gap-2 p-4 text-gray-700 dark:text-neutral-200',
          'hover:text-gray-900 dark:hover:text-neutral-50'
        )}
      >
        {icon}
        {title}
        {animatedArrow}
      </span>
    </Link>
  );
}
