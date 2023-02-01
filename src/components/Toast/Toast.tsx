import * as RadixToast from '@radix-ui/react-toast';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

export type ToastViewPortLocation =
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left';
export type ToastSwipeDirection = NonNullable<RadixToast.ToastProviderProps['swipeDirection']>;

interface ToastProviderProps extends RadixToast.ToastProviderProps {
  /**
   * The time in milliseconds that should elapse before automatically closing each toast.
   * @default 5000
   */
  duration?: RadixToast.ToastProviderProps['duration'];
  /**
   * An author-localized label for each toast. Used to help screen reader users associate the interruption with a toast.
   * @default "Notification"
   */
  label?: RadixToast.ToastProviderProps['label'];
  /**
   * The direction of the pointer swipe that should close the toast.
   * @type "right" | "left" | "up" | "down"
   * @default "right"
   */
  swipeDirection?: RadixToast.ToastProviderProps['swipeDirection'];
  /**
   * The distance in pixels that the swipe gesture must travel before a close is triggered.
   * @default 50
   */
  swipeThreshold?: RadixToast.ToastProviderProps['swipeThreshold'];
  /**
   * The location of the toast viewport.
   */
  viewPort?: ToastViewPortLocation;
}
export const ToastProvider = ({ children, viewPort, ...props }: ToastProviderProps) => {
  return (
    <RadixToast.Provider {...props}>
      {children}
      <ToastViewPort viewPort={viewPort} />
    </RadixToast.Provider>
  );
};

interface ToastViewPortProps extends RadixToast.ToastViewportProps {
  /**
   * The class name to apply to the toast viewport.
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixToast.ToastViewportProps['asChild'];
  /**
   * The keys to use as the keyboard shortcut that will move focus to the toast viewport. Use event.code value for each key from keycode.info. For meta keys, use `ctrlKey`, `shiftKey`, `altKey` and/or `metaKey`.
   * @type string[]
   * @default ["F8"]
   */
  hotkey?: RadixToast.ToastViewportProps['hotkey'];
  /**
   * An author-localized label for the toast region to provide context for screen reader users when navigating page landmarks. The available `{hotkey}` placeholder will be replaced for you.
   * @default "Notifications ({hotkey})"
   */
  label?: RadixToast.ToastViewportProps['label'];
  /**
   * The location of the toast viewport.
   * @type "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left"
   * @default "bottom-right"
   */
  viewPort?: ToastViewPortLocation;
}
export const ToastViewPort = React.forwardRef<
  React.ElementRef<typeof RadixToast.Viewport>,
  ToastViewPortProps
>(({ className, viewPort = 'bottom-right', ...props }, forwardedRef) => {
  return (
    <RadixToast.Viewport
      ref={forwardedRef}
      className={cn(
        'fixed z-50 flex max-w-[100vw] flex-col gap-2 p-6',
        viewPort === 'bottom-right' && 'bottom-0 right-0',
        viewPort === 'bottom-center' && 'bottom-0 left-1/2 -translate-x-1/2',
        viewPort === 'bottom-left' && 'bottom-0 left-0',
        viewPort === 'top-right' && 'top-0 right-0',
        viewPort === 'top-center' && 'top-0 left-1/2 -translate-x-1/2',
        viewPort === 'top-left' && 'top-0 left-0',
        className
      )}
      {...props}
    />
  );
});
ToastViewPort.displayName = RadixToast.ToastViewport.displayName;

interface ToastProps extends RadixToast.ToastProps {
  /**
   *  The class name to apply to the toast.
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixToast.ToastProps['asChild'];
  /**
   * Control the sensitivity of the toast for accessibility purposes. For toasts that are the result of a user action, choose `foreground`. Toasts generated from background tasks should use `background`.
   * @type "foreground" | "background"
   * @default "foreground"
   */
  type?: RadixToast.ToastProps['type'];
  /**
   * The time in milliseconds that should elapse before automatically closing the toast. This will override the value supplied to the provider.
   */
  duration?: RadixToast.ToastProps['duration'];
  /**
   * The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.
   * @default true
   */
  defaultOpen?: RadixToast.ToastProps['defaultOpen'];
  /**
   * The controlled open state of the dialog. Must be used in conjunction with onOpenChange.
   */
  open?: RadixToast.ToastProps['open'];
  /**
   * Event handler called when the open state of the dialog changes.
   */
  onOpenChange?: RadixToast.ToastProps['onOpenChange'];
  /**
   * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`.
   */
  onEscapeKeyDown?: RadixToast.ToastProps['onEscapeKeyDown'];
  /**
   * Event handler called when the dismiss timer is paused. This occurs when the pointer is moved over the viewport, the viewport is focused or when the window is blurred.
   */
  onPause?: RadixToast.ToastProps['onPause'];
  /**
   * Event handler called when the dismiss timer is resumed. This occurs when the pointer is moved away from the viewport, the viewport is blurred or when the window is focused.
   */
  onResume?: RadixToast.ToastProps['onResume'];
  /**
   * Event handler called when starting a swipe interaction. It can be prevented by calling `event.preventDefault`.
   */
  onSwipeStart?: RadixToast.ToastProps['onSwipeStart'];
  /**
   * Event handler called during a swipe interaction. It can be prevented by calling `event.preventDefault`.
   */
  onSwipeMove?: RadixToast.ToastProps['onSwipeMove'];
  /**
   * Event handler called at the end of a swipe interaction. It can be prevented by calling event.preventDefault.
   */
  onSwipeEnd?: RadixToast.ToastProps['onSwipeEnd'];
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
   */
  forceMount?: RadixToast.ToastProps['forceMount'];
}
export const Toast = React.forwardRef<React.ElementRef<typeof RadixToast.Root>, ToastProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <RadixToast.Root
        ref={forwardedRef}
        className={cn(
          'rounded-md bg-base-lo p-4 shadow-md',
          'data-[state=closed]:animate-toast-hide',
          'data-[swipe=cancel]:transition-transform',
          'data-[swipe-direction=right]:data-[state=open]:animate-toast-slide-in-right',
          'data-[swipe-direction=right]:data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
          'data-[swipe-direction=right]:data-[swipe=cancel]:translate-x-0',
          'data-[swipe-direction=right]:data-[swipe=end]:animate-toast-swipe-out-x',
          'data-[swipe-direction=down]:data-[state=open]:animate-toast-slide-in-down',
          'data-[swipe-direction=down]:data-[swipe=move]:translate-y-[var(--radix-toast-swipe-move-y)]',
          'data-[swipe-direction=down]:data-[swipe=cancel]:translate-y-0',
          'data-[swipe-direction=down]:data-[swipe=end]:animate-toast-swipe-out-y',
          'data-[swipe-direction=left]:data-[state=open]:animate-toast-slide-in-left',
          'data-[swipe-direction=left]:data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
          'data-[swipe-direction=left]:data-[swipe=cancel]:translate-x-0',
          'data-[swipe-direction=left]:data-[swipe=end]:animate-toast-swipe-out-x-reverse',
          'data-[swipe-direction=up]:data-[state=open]:animate-toast-slide-in-up',
          'data-[swipe-direction=up]:data-[swipe=move]:translate-y-[var(--radix-toast-swipe-move-y)]',
          'data-[swipe-direction=up]:data-[swipe=cancel]:translate-y-0',
          'data-[swipe-direction=up]:data-[swipe=end]:animate-toast-swipe-out-y-reverse',
          className
        )}
        {...props}
      />
    );
  }
);
Toast.displayName = RadixToast.Toast.displayName;

interface ToastTitleProps extends RadixToast.ToastTitleProps {
  /**
   *  The class name to apply to the toast title.
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixToast.ToastTitleProps['asChild'];
}
export const ToastTitle = React.forwardRef<
  React.ElementRef<typeof RadixToast.Title>,
  ToastTitleProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixToast.Title
      ref={forwardedRef}
      className={cn('text-subtitle1Bold text-base-hi', className)}
      {...props}
    />
  );
});
ToastTitle.displayName = RadixToast.ToastTitle.displayName;

interface ToastDescriptionProps extends RadixToast.ToastDescriptionProps {
  /**
   *  The class name to apply to the toast description.
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixToast.ToastDescriptionProps['asChild'];
}
export const ToastDescription = React.forwardRef<
  React.ElementRef<typeof RadixToast.Description>,
  ToastDescriptionProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixToast.Description
      ref={forwardedRef}
      className={cn('text-bodyNormal2Regular text-base-weak', className)}
      {...props}
    />
  );
});
ToastDescription.displayName = RadixToast.ToastDescription.displayName;

interface ToastActionProps extends RadixToast.ToastActionProps {
  /**
   * The class name to apply to the toast action.
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixToast.ToastActionProps['asChild'];
  /**
   * Describe an alternative way to achieve the action for screen reader users who cannot access the toast easily.
   */
  altText: RadixToast.ToastActionProps['altText'];
}
export const ToastAction = React.forwardRef<
  React.ElementRef<typeof RadixToast.Action>,
  ToastActionProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixToast.Action
      ref={forwardedRef}
      className={cn(
        'inline-flex h-6 items-center justify-center rounded-md bg-base-hi py-1 px-3 text-label5Bold text-base-lo transition-colors',
        'hover:bg-base-weak',
        'focus:outline-none focus:ring-2 focus:ring-base-7 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
});
ToastAction.displayName = RadixToast.ToastAction.displayName;

interface ToastCloseProps extends RadixToast.ToastCloseProps {
  /**
   * The class name to apply to the toast action.
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixToast.ToastCloseProps['asChild'];
}
export const ToastClose = React.forwardRef<
  React.ElementRef<typeof RadixToast.Close>,
  ToastCloseProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixToast.Close
      ref={forwardedRef}
      className={cn(
        'inline-flex h-6 items-center justify-center rounded-md border border-base-7 bg-transparent py-1 px-3 text-label5Bold text-base-hi transition-colors',
        'sm:mt-0',
        'hover:bg-base-3',
        'focus:outline-none focus:ring-2 focus:ring-base-7 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
});
ToastClose.displayName = RadixToast.ToastClose.displayName;
