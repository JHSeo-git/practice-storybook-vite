import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface ScrollAreaProps extends RadixScrollArea.ScrollAreaProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixScrollArea.ScrollAreaProps['asChild'];
  /**
   * Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.
   * `"auto"` means that scrollbars are visible when content is overflowing on the corresponding orientation.
   * `"always"` means that scrollbars are always visible regardless of whether the content is overflowing.
   * `"scroll"` means that scrollbars are visible when the user is scrolling along its corresponding orientation.
   * "hover" when the user is scrolling along its corresponding orientation and when the user is hovering over the scroll area.
   * @type "auto" | "always" | "scroll" | "hover"
   * @default "hover"
   */
  type?: RadixScrollArea.ScrollAreaProps['type'];
  /**
   * If type is set to either `"scroll"` or `"hover"`, this prop determines the length of time, in milliseconds, before the scrollbars are hidden after the user stops interacting with scrollbars.
   * @default 600
   */
  scrollHideDelay?: RadixScrollArea.ScrollAreaProps['scrollHideDelay'];
  /**
   * The reading direction of the scroll area. If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode.
   * @type "ltr" | "rtl"
   */
  dir?: RadixScrollArea.ScrollAreaProps['dir'];
}
export const ScrollArea = React.forwardRef<
  React.ElementRef<typeof RadixScrollArea.Root>,
  ScrollAreaProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <RadixScrollArea.Root
      ref={forwardedRef}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <RadixScrollArea.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </RadixScrollArea.Viewport>
      <ScrollBar />
      <RadixScrollArea.Corner />
    </RadixScrollArea.Root>
  );
});
ScrollArea.displayName = RadixScrollArea.Root.displayName;

interface ScrollBarProps extends RadixScrollArea.ScrollAreaScrollbarProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixScrollArea.ScrollAreaScrollbarProps['asChild'];
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
   */
  forceMount?: RadixScrollArea.ScrollAreaScrollbarProps['forceMount'];
  /**
   * The orientation of the scrollbar.
   * @type "horizontal" | "vertical"
   * @default "vertical"
   */
  orientation?: RadixScrollArea.ScrollAreaScrollbarProps['orientation'];
}
export const ScrollBar = React.forwardRef<
  React.ElementRef<typeof RadixScrollArea.Scrollbar>,
  ScrollBarProps
>(({ className, orientation = 'vertical', ...props }, forwardedRef) => {
  return (
    <RadixScrollArea.Scrollbar
      ref={forwardedRef}
      className={cn(
        'flex touch-none select-none',
        'data-[state=visible]:animate-in data-[state=visible]:fade-in',
        'data-[state=hidden]:animate-hide',
        orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-px',
        orientation === 'horizontal' && 'h-2.5 border-t border-t-transparent p-px',
        className
      )}
      orientation={orientation}
      {...props}
    >
      <RadixScrollArea.ScrollAreaThumb className="relative flex-1 rounded-full bg-base-7" />
    </RadixScrollArea.Scrollbar>
  );
});
ScrollBar.displayName = RadixScrollArea.Scrollbar.displayName;
