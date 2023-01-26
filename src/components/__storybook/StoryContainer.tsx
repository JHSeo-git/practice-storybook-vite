import { cn } from '@/lib/utils/styleUtils';

interface StoryContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function StoryContainer({ className, children }: StoryContainerProps) {
  return (
    <div className="mx-auto max-w-sm">
      <div className={cn('flex min-h-[300px] items-center justify-center py-10', className)}>
        {children}
      </div>
    </div>
  );
}
