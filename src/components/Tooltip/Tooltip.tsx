import * as RadixTooltip from '@radix-ui/react-tooltip';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface TooltipProviderProps extends RadixTooltip.TooltipProviderProps {
  /**
   * The duration from when the mouse enters a tooltip trigger until the tooltip opens.
   * @default 700
   */
  delayDuration?: RadixTooltip.TooltipProviderProps['delayDuration'];
  /**
   * How much time a user has to enter another trigger without incurring a delay again.
   * @default 300
   */
  skipDelayDuration?: number;
  /**
   * Prevents `Tooltip.Content` from remaining open when hovering. Disabling this has accessibility consequences.
   */
  disableHoverableContent?: boolean;
}

export const TooltipProvider = ({ ...props }: TooltipProviderProps) => {
  return <RadixTooltip.Provider {...props} />;
};

interface TooltipProps extends RadixTooltip.TooltipProps {
  /**
   * The controlled open state of the tooltip. Must be used in conjunction with `onOpenChange`.
   */
  open?: RadixTooltip.TooltipProps['open'];
  /**
   * Event handler called when the open state of the tooltip changes.
   */
  onOpenChange?: RadixTooltip.TooltipProps['onOpenChange'];
  /**
   * The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: RadixTooltip.TooltipProps['defaultOpen'];
  /**
   * Override the duration given to the `Provider` to customise the open delay for a specific tooltip.
   * @default 700
   */
  delayDuration?: RadixTooltip.TooltipProps['delayDuration'];
  /**
   * Prevents `Tooltip.Content` from remaining open when hovering. Disabling this has accessibility consequences. Inherits from `Tooltip.Provider`.
   */
  disableHoverableContent?: RadixTooltip.TooltipProps['disableHoverableContent'];
}
export const Tooltip = ({ ...props }: TooltipProps) => {
  return <RadixTooltip.Root {...props} />;
};

interface TooltipTriggerProps extends RadixTooltip.TooltipTriggerProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixTooltip.TooltipTriggerProps['asChild'];
}
export const TooltipTrigger = ({ ...props }: TooltipTriggerProps) => {
  return <RadixTooltip.Trigger {...props} />;
};

interface TooltipContentProps extends RadixTooltip.TooltipContentProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixTooltip.TooltipContentProps['asChild'];
  /**
   * By default, screenreaders will announce the content inside the component. If this is not descriptive enough, or you have content that cannot be announced, use `aria-label` as a more descriptive label.
   */
  'aria-label'?: RadixTooltip.TooltipContentProps['aria-label'];
  /**
   * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`.
   */
  onEscapeKeyDown?: RadixTooltip.TooltipContentProps['onEscapeKeyDown'];
  /**
   * Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onPointerDownOutside?: RadixTooltip.TooltipContentProps['onPointerDownOutside'];
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `Tooltip.Portal`.
   */
  forceMount?: RadixTooltip.TooltipContentProps['forceMount'];
  /**
   * The preferred side of the trigger to render against when open. Will be reversed when collisions occur and `avoidCollisions` is enabled.
   * @default "top"
   */
  side?: RadixTooltip.TooltipContentProps['side'];
  /**
   * The distance in pixels from the trigger.
   * @default 5
   */
  sideOffset?: RadixTooltip.TooltipContentProps['sideOffset'];
  /**
   * The preferred alignment against the trigger. May change when collisions occur.
   * @default "center"
   */
  align?: RadixTooltip.TooltipContentProps['align'];
  /**
   * An offset in pixels from the `"start"` or `"end"` alignment options.
   * @default 0
   */
  alignOffset?: RadixTooltip.TooltipContentProps['alignOffset'];
  /**
   * When `true`, overrides the `side` and `align` preferences to prevent collisions with boundary edges.
   * @default true
   */
  avoidCollisions?: RadixTooltip.TooltipContentProps['avoidCollisions'];
  /**
   * The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.
   * @type: `Element | null | Array<Element | null>`
   * @default []
   */
  collisionBoundary?: RadixTooltip.TooltipContentProps['collisionBoundary'];
  /**
   * The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: `{ top: 20, left: 20 }`.
   * @type: `number | Partial<Padding>`
   * @default 0
   */
  collisionPadding?: RadixTooltip.TooltipContentProps['collisionPadding'];
  /**
   *The padding between the arrow and the edges of the content. If your content has `border-radius`, this will prevent it from overflowing the corners.
   * @default 0
   */
  arrowPadding?: RadixTooltip.TooltipContentProps['arrowPadding'];
  /**
   * The sticky behavior on the align axis. `"partial"` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst `"always"` will keep the content in the boundary regardless.
   * @type "partial" | "always"
   * @default "partial"
   */
  sticky?: RadixTooltip.TooltipContentProps['sticky'];
  /**
   * Whether to hide the content when the trigger becomes fully occluded.
   * @default false
   */
  hideWhenDetached?: RadixTooltip.TooltipContentProps['hideWhenDetached'];
}
export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof RadixTooltip.Content>,
  TooltipContentProps
>(({ className, sideOffset = 5, ...props }, forwardedRef) => {
  return (
    <RadixTooltip.Content
      ref={forwardedRef}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden rounded-md border border-base-7 bg-base-lo px-3 py-1.5 text-label4Regular text-base-weak shadow-md animate-in fade-in-50',
        'data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1',
        className
      )}
      {...props}
    />
  );
});
TooltipContent.displayName = RadixTooltip.Content.displayName;
