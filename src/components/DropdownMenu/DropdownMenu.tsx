import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface DropdownMenuProps extends RadixDropdownMenu.DropdownMenuProps {
  /**
   * The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: RadixDropdownMenu.DropdownMenuProps['defaultOpen'];
  /**
   * The controlled open state of the dropdown menu. Must be used in conjunction with `onOpenChange`.
   */
  open?: RadixDropdownMenu.DropdownMenuProps['open'];
  /**
   * Event handler called when the open state of the dropdown menu changes.
   */
  onOpenChange?: RadixDropdownMenu.DropdownMenuProps['onOpenChange'];
  /**
   * The reading direction of submenus when applicable. If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode.
   * @type "ltr" | "rtl"
   */
  dir?: RadixDropdownMenu.DropdownMenuProps['dir'];
  /**
   * The modality of the dropdown menu. When set to `true`, interaction with outside elements will be disabled and only menu content will be visible to screen readers.
   * @default true
   */
  modal?: RadixDropdownMenu.DropdownMenuProps['modal'];
}
export const DropdownMenu = (props: DropdownMenuProps) => {
  return <RadixDropdownMenu.Root {...props} />;
};

interface DropdownMenuTriggerProps extends RadixDropdownMenu.DropdownMenuTriggerProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixDropdownMenu.DropdownMenuTriggerProps['asChild'];
}
export const DropdownMenuTrigger = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Trigger>,
  DropdownMenuTriggerProps
>((props, forwardedRef) => {
  return <RadixDropdownMenu.Trigger ref={forwardedRef} {...props} />;
});
DropdownMenuTrigger.displayName = RadixDropdownMenu.Trigger.displayName;

interface DropdownMenuGroupProps extends RadixDropdownMenu.DropdownMenuGroupProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixDropdownMenu.DropdownMenuGroupProps['asChild'];
}
export const DropdownMenuGroup = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.Group>,
  DropdownMenuGroupProps
>((props, forwardedRef) => {
  return <RadixDropdownMenu.Group ref={forwardedRef} {...props} />;
});
DropdownMenuGroup.displayName = RadixDropdownMenu.Group.displayName;

interface DropdownMenuPortalProps extends RadixDropdownMenu.DropdownMenuPortalProps {
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by `DropdownMenu.Content` and `DropdownMenu.SubContent` respectively.
   */
  forceMount?: RadixDropdownMenu.DropdownMenuPortalProps['forceMount'];
  /**
   * Specify a container element to portal the content into.
   * @type HTMLElement
   * @default document.body
   */
  container?: RadixDropdownMenu.DropdownMenuPortalProps['container'];
}
export const DropdownMenuPortal = ({ ...props }: DropdownMenuPortalProps) => {
  return <RadixDropdownMenu.Portal {...props} />;
};

interface DropdownMenuSubProps extends RadixDropdownMenu.DropdownMenuSubProps {
  /**
   * The open state of the submenu when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: RadixDropdownMenu.DropdownMenuSubProps['defaultOpen'];
  /**
   * The controlled open state of the submenu. Must be used in conjunction with `onOpenChange`.
   */
  open?: RadixDropdownMenu.DropdownMenuSubProps['open'];
  /**
   * Event handler called when the open state of the submenu changes.
   */
  onOpenChange?: RadixDropdownMenu.DropdownMenuSubProps['onOpenChange'];
}
export const DropdownMenuSub = ({ ...props }: DropdownMenuSubProps) => {
  return <RadixDropdownMenu.Sub {...props} />;
};

interface DropdownMenuSubTriggerProps extends RadixDropdownMenu.DropdownMenuSubTriggerProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixDropdownMenu.DropdownMenuSubTriggerProps['asChild'];
  /**
   * When `true`, prevents the user from interacting with the item.
   */
  disabled?: RadixDropdownMenu.DropdownMenuSubTriggerProps['disabled'];
  /**
   * Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. Use this when the content is complex, or you have non-textual content inside.
   */
  textValue?: RadixDropdownMenu.DropdownMenuSubTriggerProps['textValue'];
  /**
   * When `true`, apply inset styles
   */
  inset?: boolean;
}
export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ className, inset, children, ...props }, forwardedRef) => {
  return (
    <RadixDropdownMenu.SubTrigger
      ref={forwardedRef}
      className={cn(
        'text-label4Regular flex cursor-default select-none items-center rounded-sm py-1.5 px-2 outline-none',
        'focus:bg-base-3',
        'data-[state=open]:bg-base-3',
        inset && 'pl-8',
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </RadixDropdownMenu.SubTrigger>
  );
});
DropdownMenuSubTrigger.displayName = RadixDropdownMenu.SubTrigger.displayName;

interface DropdownMenuSubContentProps extends RadixDropdownMenu.DropdownMenuSubContentProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixDropdownMenu.DropdownMenuSubContentProps['asChild'];
  /**
   * When `true`, keyboard navigation will loop from last item to first, and vice versa.
   * @default false
   */
  loop?: RadixDropdownMenu.DropdownMenuSubContentProps['loop'];
  /**
   * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefaul`t
   */
  onEscapeKeyDown?: RadixDropdownMenu.DropdownMenuSubContentProps['onEscapeKeyDown'];
  /**
   * Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onPointerDownOutside?: RadixDropdownMenu.DropdownMenuSubContentProps['onPointerDownOutside'];
  /**
   * Event handler called when focus moves outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onFocusOutside?: RadixDropdownMenu.DropdownMenuSubContentProps['onFocusOutside'];
  /**
   * Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onInteractOutside?: RadixDropdownMenu.DropdownMenuSubContentProps['onInteractOutside'];
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `DropdownMenu.Portal`.
   */
  forceMount?: RadixDropdownMenu.DropdownMenuSubContentProps['forceMount'];
  /**
   * The distance in pixels from the trigger.
   * @default 0
   */
  sideOffset?: RadixDropdownMenu.DropdownMenuSubContentProps['sideOffset'];
  /**
   * An offset in pixels from the `"start"` or `"end"` alignment options.
   * @default 0
   */
  alignOffset?: RadixDropdownMenu.DropdownMenuSubContentProps['alignOffset'];
  /**
   * When `true`, overrides the `side` and `align` preferences to prevent collisions with boundary edges.
   * @default true
   */
  avoidCollisions?: RadixDropdownMenu.DropdownMenuSubContentProps['avoidCollisions'];
  /**
   * The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.
   * @type Element | null | Array<Element | null>
   * @default []
   */
  collisionBoundary?: RadixDropdownMenu.DropdownMenuSubContentProps['collisionBoundary'];
  /**
   * The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: `{ top: 20, left: 20 }`.
   * @type number | Partial<Record<Side, number>>
   * @default 0
   */
  collisionPadding?: RadixDropdownMenu.DropdownMenuSubContentProps['collisionPadding'];
  /**
   * The padding between the arrow and the edges of the content. If your content has `border-radius`, this will prevent it from overflowing the corners.
   * @default 0
   */
  arrowPadding?: RadixDropdownMenu.DropdownMenuSubContentProps['arrowPadding'];
  /**
   * The sticky behavior on the align axis. `"partial"` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst `"always"` will keep the content in the boundary regardless.
   * @type "partial" | "always"
   * @default "partial"
   */
  sticky?: RadixDropdownMenu.DropdownMenuSubContentProps['sticky'];
  /**
   * Whether to hide the content when the trigger becomes fully occluded.
   * @default false
   */
  hideWhenDetached?: RadixDropdownMenu.DropdownMenuSubContentProps['hideWhenDetached'];
}
export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.DropdownMenuSubContent>,
  DropdownMenuSubContentProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixDropdownMenu.SubContent
      ref={forwardedRef}
      className={cn(
        'border-base-7 bg-base-lo text-base-weak animate-in slide-in-from-left-1 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
        className
      )}
      {...props}
    />
  );
});
DropdownMenuSubContent.displayName = RadixDropdownMenu.SubContent.displayName;

interface DropdownMenuContentProps extends RadixDropdownMenu.DropdownMenuContentProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixDropdownMenu.DropdownMenuContentProps['asChild'];
  /**
   * When `true`, keyboard navigation will loop from last item to first, and vice versa.
   * @default false
   */
  loop?: RadixDropdownMenu.DropdownMenuContentProps['loop'];
  /**
   * Event handler called when focus moves to the trigger after closing. It can be prevented by calling `event.preventDefault`.
   */
  onCloseAutoFocus?: RadixDropdownMenu.DropdownMenuContentProps['onCloseAutoFocus'];
  /**
   * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefaul`t
   */
  onEscapeKeyDown?: RadixDropdownMenu.DropdownMenuContentProps['onEscapeKeyDown'];
  /**
   * Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onPointerDownOutside?: RadixDropdownMenu.DropdownMenuContentProps['onPointerDownOutside'];
  /**
   * Event handler called when focus moves outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onFocusOutside?: RadixDropdownMenu.DropdownMenuContentProps['onFocusOutside'];
  /**
   * Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onInteractOutside?: RadixDropdownMenu.DropdownMenuContentProps['onInteractOutside'];
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `DropdownMenu.Portal`.
   */
  forceMount?: RadixDropdownMenu.DropdownMenuContentProps['forceMount'];
  /**
   * The preferred side of the trigger to render against when open. Will be reversed when collisions occur and `avoidCollisions` is enabled.
   * @type "top" | "right" | "bottom" | "left"
   * @default "bottom"
   */
  side?: RadixDropdownMenu.DropdownMenuContentProps['side'];
  /**
   * The distance in pixels from the trigger.
   * @default 5
   */
  sideOffset?: RadixDropdownMenu.DropdownMenuContentProps['sideOffset'];
  /**
   * The preferred alignment against the trigger. May change when collisions occur.
   * @type "start" | "center" | "end"
   * @default "center"
   */
  align?: RadixDropdownMenu.DropdownMenuContentProps['align'];
  /**
   * An offset in pixels from the `"start"` or `"end"` alignment options.
   * @default 0
   */
  alignOffset?: RadixDropdownMenu.DropdownMenuContentProps['alignOffset'];
  /**
   * When `true`, overrides the `side` and `align` preferences to prevent collisions with boundary edges.
   * @default true
   */
  avoidCollisions?: RadixDropdownMenu.DropdownMenuContentProps['avoidCollisions'];
  /**
   * The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.
   * @type Element | null | Array<Element | null>
   * @default []
   */
  collisionBoundary?: RadixDropdownMenu.DropdownMenuContentProps['collisionBoundary'];
  /**
   * The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: `{ top: 20, left: 20 }`.
   * @type number | Partial<Record<Side, number>>
   * @default 0
   */
  collisionPadding?: RadixDropdownMenu.DropdownMenuContentProps['collisionPadding'];
  /**
   * The padding between the arrow and the edges of the content. If your content has `border-radius`, this will prevent it from overflowing the corners.
   * @default 0
   */
  arrowPadding?: RadixDropdownMenu.DropdownMenuContentProps['arrowPadding'];
  /**
   * The sticky behavior on the align axis. `"partial"` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst `"always"` will keep the content in the boundary regardless.
   * @type "partial" | "always"
   * @default "partial"
   */
  sticky?: RadixDropdownMenu.DropdownMenuContentProps['sticky'];
  /**
   * Whether to hide the content when the trigger becomes fully occluded.
   * @default false
   */
  hideWhenDetached?: RadixDropdownMenu.DropdownMenuContentProps['hideWhenDetached'];
}
export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.DropdownMenuContent>,
  DropdownMenuContentProps
>(({ className, sideOffset = 5, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPortal>
      <RadixDropdownMenu.DropdownMenuContent
        ref={forwardedRef}
        sideOffset={sideOffset}
        className={cn(
          'border-base-7 bg-base-lo text-base-weak animate-in z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </DropdownMenuPortal>
  );
});
DropdownMenuContent.displayName = RadixDropdownMenu.DropdownMenuContent.displayName;

interface DropdownMenuItemProps extends RadixDropdownMenu.DropdownMenuItemProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixDropdownMenu.DropdownMenuItemProps['asChild'];
  /**
   * When `true`, prevents the user from interacting with the item.
   */
  disabled?: RadixDropdownMenu.DropdownMenuItemProps['disabled'];
  /**
   * Event handler called when the user selects an item (via mouse or keyboard). Calling `event.preventDefault` in this handler will prevent the dropdown menu from closing when selecting that item.
   */
  onSelect?: RadixDropdownMenu.DropdownMenuItemProps['onSelect'];
  /**
   * Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. Use this when the content is complex, or you have non-textual content inside.
   */
  textValue?: RadixDropdownMenu.DropdownMenuItemProps['textValue'];
  /**
   * When `true`, apply inset styles
   */
  inset?: boolean;
}
export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.DropdownMenuItem>,
  DropdownMenuItemProps
>(({ className, inset, ...props }, forwardedRef) => {
  return (
    <RadixDropdownMenu.DropdownMenuItem
      ref={forwardedRef}
      className={cn(
        'text-label4Regular relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 outline-none',
        'focus:bg-base-3',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  );
});
DropdownMenuItem.displayName = RadixDropdownMenu.DropdownMenuItem.displayName;

interface DropdownMenuCheckboxItemProps extends RadixDropdownMenu.DropdownMenuCheckboxItemProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixDropdownMenu.DropdownMenuCheckboxItemProps['asChild'];
  /**
   * The controlled checked state of the item. Must be used in conjunction with `onCheckedChange`.
   * @type boolean | 'indeterminate'
   */
  checked?: RadixDropdownMenu.DropdownMenuCheckboxItemProps['checked'];
  /**
   * Event handler called when the checked state changes.
   */
  onCheckedChange?: RadixDropdownMenu.DropdownMenuCheckboxItemProps['onCheckedChange'];
  /**
   * When `true`, prevents the user from interacting with the item.
   */
  disabled?: RadixDropdownMenu.DropdownMenuCheckboxItemProps['disabled'];
  /**
   * Event handler called when the user selects an item (via mouse or keyboard). Calling `event.preventDefault` in this handler will prevent the dropdown menu from closing when selecting that item.
   */
  onSelect?: RadixDropdownMenu.DropdownMenuCheckboxItemProps['onSelect'];
  /**
   * Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. Use this when the content is complex, or you have non-textual content inside.
   */
  textValue?: RadixDropdownMenu.DropdownMenuCheckboxItemProps['textValue'];
}
export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.DropdownMenuCheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <RadixDropdownMenu.DropdownMenuCheckboxItem
      ref={forwardedRef}
      className={cn(
        'text-label4Regular relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none',
        'focus:bg-base-3',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <RadixDropdownMenu.ItemIndicator>
          <Check className="h-4 w-4" />
        </RadixDropdownMenu.ItemIndicator>
      </span>
      {children}
    </RadixDropdownMenu.DropdownMenuCheckboxItem>
  );
});
DropdownMenuCheckboxItem.displayName = RadixDropdownMenu.DropdownMenuCheckboxItem.displayName;

interface DropdownMenuRadioItemProps extends RadixDropdownMenu.DropdownMenuRadioItemProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixDropdownMenu.DropdownMenuRadioItemProps['asChild'];
  /**
   * The unique value of the item.
   */
  value: RadixDropdownMenu.DropdownMenuRadioItemProps['value'];
  /**
   * When `true`, prevents the user from interacting with the item.
   */
  disabled?: RadixDropdownMenu.DropdownMenuRadioItemProps['disabled'];
  /**
   * Event handler called when the user selects an item (via mouse or keyboard). Calling `event.preventDefault` in this handler will prevent the dropdown menu from closing when selecting that item.
   */
  onSelect?: RadixDropdownMenu.DropdownMenuRadioItemProps['onSelect'];
  /**
   * Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. Use this when the content is complex, or you have non-textual content inside.
   */
  textValue?: RadixDropdownMenu.DropdownMenuRadioItemProps['textValue'];
}
export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.DropdownMenuRadioItem>,
  DropdownMenuRadioItemProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <RadixDropdownMenu.DropdownMenuRadioItem
      ref={forwardedRef}
      className={cn(
        'text-label4Regular relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 outline-none',
        'focus:bg-base-3',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <RadixDropdownMenu.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </RadixDropdownMenu.ItemIndicator>
      </span>
      {children}
    </RadixDropdownMenu.DropdownMenuRadioItem>
  );
});
DropdownMenuRadioItem.displayName = RadixDropdownMenu.DropdownMenuRadioItem.displayName;

interface DropdownMenuRadioGroupProps extends RadixDropdownMenu.DropdownMenuRadioGroupProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixDropdownMenu.DropdownMenuRadioGroupProps['asChild'];
  /**
   * The value of the selected item in the group.
   */
  value?: RadixDropdownMenu.DropdownMenuRadioGroupProps['value'];
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: RadixDropdownMenu.DropdownMenuRadioGroupProps['onValueChange'];
}
export const DropdownMenuRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.RadioGroup>,
  DropdownMenuRadioGroupProps
>((props, forwardedRef) => {
  return <RadixDropdownMenu.RadioGroup ref={forwardedRef} {...props} />;
});
DropdownMenuRadioGroup.displayName = RadixDropdownMenu.RadioGroup.displayName;

interface DropdownMenuLabelProps extends RadixDropdownMenu.DropdownMenuLabelProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixDropdownMenu.DropdownMenuLabelProps['asChild'];
  /**
   * When `true`, the label will be inset.
   */
  inset?: boolean;
}
export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.DropdownMenuLabel>,
  DropdownMenuLabelProps
>(({ className, inset, ...props }, forwardedRef) => {
  return (
    <RadixDropdownMenu.DropdownMenuLabel
      ref={forwardedRef}
      className={cn('text-label4Bold text-base-hi px-2 py-1.5', inset && 'pl-8', className)}
      {...props}
    />
  );
});
DropdownMenuLabel.displayName = RadixDropdownMenu.DropdownMenuLabel.displayName;

interface DropdownMenuSeparatorProps extends RadixDropdownMenu.DropdownMenuSeparatorProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixDropdownMenu.DropdownMenuSeparatorProps['asChild'];
}
export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof RadixDropdownMenu.DropdownMenuSeparator>,
  DropdownMenuSeparatorProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixDropdownMenu.DropdownMenuSeparator
      ref={forwardedRef}
      className={cn('bg-base-7 -mx-1 my-1 h-px', className)}
      {...props}
    />
  );
});
DropdownMenuSeparator.displayName = RadixDropdownMenu.DropdownMenuSeparator.displayName;

interface DropdownMenuShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * className to apply to the shortcut element.
   */
  className?: string;
}
export const DropdownMenuShortcut = ({ className, ...props }: DropdownMenuShortcutProps) => {
  return (
    <span
      className={cn('text-label5Regular text-base-9 ml-auto tracking-widest', className)}
      {...props}
    />
  );
};
