import * as RadixPopover from '@radix-ui/react-popover';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface PopoverProps extends RadixPopover.PopoverProps {
  /**
   * The open state of the popover when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: RadixPopover.PopoverProps['defaultOpen'];
  /**
   * The controlled open state of the popover. Must be used in conjunction with onOpenChange.
   */
  open?: RadixPopover.PopoverProps['open'];
  /**
   * Event handler called when the open state of the popover changes.
   */
  onOpenChange?: RadixPopover.PopoverProps['onOpenChange'];
  /**
   * The modality of the popover. When set to `true`, interaction with outside elements will be disabled and only popover content will be visible to screen readers.
   */
  modal?: RadixPopover.PopoverProps['modal'];
}
export const Popover = ({ ...props }: PopoverProps) => {
  return <RadixPopover.Root {...props} />;
};

interface PopoverTriggerProps extends RadixPopover.PopoverTriggerProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixPopover.PopoverTriggerProps['asChild'];
}
export const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof RadixPopover.PopoverTrigger>,
  PopoverTriggerProps
>(({ ...props }, forwardedRef) => {
  return <RadixPopover.Trigger ref={forwardedRef} {...props} />;
});
PopoverTrigger.displayName = RadixPopover.Trigger.displayName;

interface PopoverContentProps extends RadixPopover.PopoverContentProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixPopover.PopperContentProps['asChild'];
  /**
   * Event handler called when focus moves into the component after opening. It can be prevented by calling `event.preventDefault`.
   */
  onOpenAutoFocus?: RadixPopover.PopoverContentProps['onOpenAutoFocus'];
  /**
   * Event handler called when focus moves to the trigger after closing. It can be prevented by calling `event.preventDefault`.
   */
  onCloseAutoFocus?: RadixPopover.PopoverContentProps['onCloseAutoFocus'];
  /**
   * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`.
   */
  onEscapeKeyDown?: RadixPopover.PopoverContentProps['onEscapeKeyDown'];
  /**
   * Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onPointerDownOutside?: RadixPopover.PopoverContentProps['onPointerDownOutside'];
  /**
   * Event handler called when focus moves outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onFocusOutside?: RadixPopover.PopoverContentProps['onFocusOutside'];
  /**
   * Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onInteractOutside?: RadixPopover.PopoverContentProps['onInteractOutside'];
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `Popover.Portal`.
   */
  forceMount?: RadixPopover.PopoverContentProps['forceMount'];
  /**
   * The preferred side of the anchor to render against when open. Will be reversed when collisions occur and `avoidCollisions` is enabled.
   * @type "top" | "right" | "bottom" | "left"
   * @default "bottom"
   */
  side?: RadixPopover.PopoverContentProps['side'];
  /**
   * The distance in pixels from the anchor.
   * @default 5
   */
  sideOffset?: RadixPopover.PopoverContentProps['sideOffset'];
  /**
   * The preferred alignment against the anchor. May change when collisions occur.
   * @type "start" | "center" | "end"
   * @default "center"
   */
  align?: RadixPopover.PopoverContentProps['align'];
  /**
   * An offset in pixels from the `"start"` or `"end"` alignment options.
   * @default 0
   */
  alignOffset?: RadixPopover.PopoverContentProps['alignOffset'];
  /**
   * When `true`, overrides the side and `align` preferences to prevent collisions with boundary edges.
   * @default true
   */
  avoidCollisions?: RadixPopover.PopoverContentProps['avoidCollisions'];
  /**
   * The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.
   * @type Element | null | Array<Element | null>
   * @default []
   */
  collisionBoundary?: RadixPopover.PopoverContentProps['collisionBoundary'];
  /**
   * The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: `{ top: 20, left: 20 }`.
   * @type number | Partial<Record<Side, number>>
   * @default 0
   */
  collisionPadding?: RadixPopover.PopoverContentProps['collisionPadding'];
  /**
   * The padding between the arrow and the edges of the content. If your content has `border-radius`, this will prevent it from overflowing the corners.
   */
  arrowPadding?: RadixPopover.PopoverContentProps['arrowPadding'];
  /**
   * The sticky behavior on the align axis. `"partial"` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst `"always"` will keep the content in the boundary regardless.
   * @type "partial" | "always"
   * @default "partial"
   */
  sticky?: RadixPopover.PopoverContentProps['sticky'];
  /**
   * Whether to hide the content when the trigger becomes fully occluded.
   * @default false
   */
  hideWhenDetached?: RadixPopover.PopoverContentProps['hideWhenDetached'];
}
export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof RadixPopover.PopoverContent>,
  PopoverContentProps
>(({ className, sideOffset = 5, ...props }, forwardedRef) => {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        ref={forwardedRef}
        className={cn(
          'z-50 rounded-md border border-base-7 bg-base-lo p-4 shadow-md outline-none animate-in',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
          'data-[state=closed]:animate-hide',
          className
        )}
        sideOffset={sideOffset}
        {...props}
      />
    </RadixPopover.Portal>
  );
});
PopoverContent.displayName = RadixPopover.Content.displayName;

interface PopoverCloseProps extends RadixPopover.PopoverCloseProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixPopover.PopoverCloseProps['asChild'];
}
export const PopoverClose = React.forwardRef<
  React.ElementRef<typeof RadixPopover.PopoverClose>,
  PopoverCloseProps
>(({ ...props }, forwardedRef) => {
  return <RadixPopover.Close ref={forwardedRef} {...props} />;
});
PopoverClose.displayName = RadixPopover.Close.displayName;
