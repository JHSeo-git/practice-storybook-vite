import cn from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface FeatureProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  index?: number;
}

export function Feature({ children, className, href, index = 0 }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: Math.min(0.25 + index * 0.2, 0.8) }}
      className={cn(
        'relative overflow-hidden rounded-3xl bg-white px-7 py-6 text-black',
        'shadow-lg',
        className
      )}
    >
      {children}
      {href ? (
        <Link
          className={cn(
            'absolute right-4 bottom-4 z-[2] flex h-10 w-10 items-center justify-center rounded-[50%] bg-black/40 text-white/90 shadow-md transition-all'
          )}
          href={href}
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      ) : null}
    </motion.div>
  );
}
