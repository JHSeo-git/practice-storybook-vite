import * as RadixTabs from '@radix-ui/react-tabs';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface TabsProps extends RadixTabs.TabsProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixTabs.TabsProps['asChild'];
  /**
   * The controlled value of the tab to activate. Should be used in conjunction with `onValueChange`.
   */
  value?: RadixTabs.TabsProps['value'];
  /**
   * The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs.
   */
  defaultValue?: RadixTabs.TabsProps['defaultValue'];
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: RadixTabs.TabsProps['onValueChange'];
  /**
   * The orientation of the component.
   * @type "horizontal" | "vertical"
   * @default "horizontal"
   */
  orientation?: RadixTabs.TabsProps['orientation'];
  /**
   * The reading direction of the tabs. If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode.
   * @type "ltr" | "rtl"
   */
  dir?: RadixTabs.TabsProps['dir'];
  /**
   * When `automatic`, tabs are activated when receiving focus. When `manual`, tabs are activated when clicked.
   * @type "automatic" | "manual"
   * @default "automatic"
   * */
  activationMode?: RadixTabs.TabsProps['activationMode'];
}
export const Tabs = React.forwardRef<React.ElementRef<typeof RadixTabs.Root>, TabsProps>(
  ({ className, orientation = 'horizontal', ...props }, forwardedRef) => {
    return (
      <RadixTabs.Root
        ref={forwardedRef}
        className={cn(orientation === 'vertical' && 'flex items-start', className)}
        orientation={orientation}
        {...props}
      />
    );
  }
);
Tabs.displayName = RadixTabs.Tabs.displayName;

interface TabsListProps extends RadixTabs.TabsListProps {
  /**
   * The class name to apply to the TabsList element.
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixTabs.TabsListProps['asChild'];
  /**
   * When true, keyboard navigation will loop from last tab to first, and vice versa.
   * @default true
   */
  loop?: RadixTabs.TabsListProps['loop'];
}
export const TabsList = React.forwardRef<React.ElementRef<typeof RadixTabs.List>, TabsListProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <RadixTabs.List
        ref={forwardedRef}
        className={cn(
          'bg-base-3 inline-flex items-center justify-center rounded-md p-1',
          className
        )}
        {...props}
      />
    );
  }
);
TabsList.displayName = RadixTabs.TabsList.displayName;

interface TabsTriggerProps extends RadixTabs.TabsTriggerProps {
  /**
   * The class name to apply to the TabsTrigger element.
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixTabs.TabsTriggerProps['asChild'];
  /**
   * A unique value that associates the trigger with a content.
   */
  value: RadixTabs.TabsTriggerProps['value'];
  /**
   * When `true`, prevents the user from interacting with the tab.
   * @default false
   */
  disabled?: RadixTabs.TabsTriggerProps['disabled'];
}
export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Trigger>,
  TabsTriggerProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixTabs.Trigger
      ref={forwardedRef}
      className={cn(
        'text-label4Regular text-base-weak inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5 transition-all',
        'disabled:pointer-events-none disabled:opacity-50',
        'data-[state=active]:bg-base-lo data-[state=active]:text-base-hi data-[state=active]:shadow-sm',
        className
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = RadixTabs.TabsTrigger.displayName;

interface TabsContentProps extends RadixTabs.TabsContentProps {
  /**
   * The class name to apply to the TabsTrigger element.
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixTabs.TabsContentProps['asChild'];
  /**
   * A unique value that associates the content with a trigger.
   */
  value: RadixTabs.TabsContentProps['value'];
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
   */
  forceMount?: RadixTabs.TabsContentProps['forceMount'];
}
export const TabsContent = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Content>,
  TabsContentProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixTabs.Content
      ref={forwardedRef}
      className={cn('border-base-7 rounded-md border p-6', className)}
      {...props}
    />
  );
});
TabsContent.displayName = RadixTabs.TabsContent.displayName;
