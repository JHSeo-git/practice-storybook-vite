import * as RadixDialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface DialogProps extends RadixDialog.DialogProps {
  /**
   * The controlled open state of the dialog. Must be used in conjunction with `onOpenChange`.
   */
  open?: RadixDialog.DialogProps['open'];
  /**
   * Event handler called when the open state of the dialog changes.
   */
  onOpenChange?: RadixDialog.DialogProps['onOpenChange'];
  /**
   * The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: RadixDialog.DialogProps['defaultOpen'];
  /**
   * The modality of the dialog. When set to `true`, interaction with outside elements will be disabled and only dialog content will be visible to screen readers. Defaults to `true`.
   */
  modal?: RadixDialog.DialogProps['modal'];
}
export const Dialog = (props: DialogProps) => {
  return <RadixDialog.Root {...props} />;
};

interface DialogTriggerProps extends RadixDialog.DialogTriggerProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixDialog.DialogTriggerProps['asChild'];
}
export const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Trigger>,
  DialogTriggerProps
>((props, forwardedRef) => {
  return <RadixDialog.Trigger ref={forwardedRef} {...props} />;
});
DialogTrigger.displayName = RadixDialog.Trigger.displayName;

interface DialogPortalProps extends RadixDialog.DialogPortalProps {
  /**
   * className of the `<alert-dialog-portal>`
   */
  className?: string;
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by `Dialog.Overlay` and `Dialog.Content`.
   */
  forceMount?: RadixDialog.DialogPortalProps['forceMount'];
  /**
   * Specify a container element to portal the content into. Defaults to `document.body`.
   */
  container?: RadixDialog.DialogPortalProps['container'];
}
const DialogPortal = ({ className, children, ...props }: DialogPortalProps) => {
  return (
    <RadixDialog.Portal className={className} {...props}>
      <div className={cn('fixed inset-0 z-50 flex items-start justify-center', 'sm:items-center')}>
        {children}
      </div>
    </RadixDialog.Portal>
  );
};

interface DialogOverlayProps extends RadixDialog.DialogOverlayProps {
  /**
   * className of the `<alert-dialog-overlay>`
   */
  className?: string;
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `Dialog.Portal`.
   */
  forceMount?: RadixDialog.DialogOverlayProps['forceMount'];
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixDialog.DialogOverlayProps['asChild'];
}
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Overlay>,
  DialogOverlayProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixDialog.Overlay
      ref={forwardedRef}
      className={cn(
        'fixed inset-0 z-50 bg-base-hi/50 backdrop-blur-sm transition-opacity animate-in fade-in',
        className
      )}
      {...props}
    />
  );
});
DialogOverlay.displayName = RadixDialog.Overlay.displayName;

interface DialogContentProps extends RadixDialog.DialogContentProps {
  /**
   * className of the `<alert-dialog-content>`
   */
  className?: string;
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `AlertDialog.Portal`.
   */
  forceMount?: RadixDialog.DialogContentProps['forceMount'];
  /**
   * Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`.
   */
  onOpenAutoFocus?: RadixDialog.DialogContentProps['onOpenAutoFocus'];
  /**
   * Event handler called when focus moves to the trigger after closing. It can be prevented by calling `event.preventDefault`.
   */
  onCloseAutoFocus?: RadixDialog.DialogContentProps['onCloseAutoFocus'];
  /**
   * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`.
   */
  onEscapeKeyDown?: RadixDialog.DialogContentProps['onEscapeKeyDown'];
  /**
   * Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onPointerDownOutside?: RadixDialog.DialogContentProps['onPointerDownOutside'];
  /**
   * Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onInteractOutside?: RadixDialog.DialogContentProps['onInteractOutside'];
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixDialog.DialogContentProps['asChild'];
  /**
   * Specify a container element to portal the content into. Defaults to `document.body`.
   */
  container?: RadixDialog.DialogPortalProps['container'];
}
export const DialogContent = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Content>,
  DialogContentProps
>(({ className, children, container, ...props }, forwardedRef) => {
  return (
    <DialogPortal container={container}>
      <DialogOverlay />
      <RadixDialog.Content
        ref={forwardedRef}
        className={cn(
          'fixed z-50 grid w-full scale-100 gap-4 bg-base-lo p-6 opacity-100 animate-in fade-in-90 slide-in-from-bottom-10',
          'sm:max-w-lg sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0',
          className
        )}
        {...props}
      >
        {children}
        <RadixDialog.Close
          className={cn(
            'absolute top-4 right-4 rounded-sm opacity-70 transition-opacity',
            'hover:opacity-100',
            'focus:outline-none focus:ring-2 focus:ring-base-7 focus:ring-offset-2'
          )}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </RadixDialog.Close>
      </RadixDialog.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = RadixDialog.Content.displayName;

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * className of the `<alert-dialog-header>`
   */
  className?: string;
}
export const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
  return (
    <div
      className={cn('flex flex-col space-y-2 text-center', 'sm:text-left', className)}
      {...props}
    />
  );
};

interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * className of the `<alert-dialog-footer>`
   */
  className?: string;
}
export const DialogFooter = ({ className, ...props }: DialogFooterProps) => {
  return (
    <div
      className={cn('flex flex-col-reverse', 'sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...props}
    />
  );
};

interface DialogTitleProps extends RadixDialog.DialogTitleProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixDialog.DialogTitleProps['asChild'];
}
export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Title>,
  DialogTitleProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixDialog.Title
      ref={forwardedRef}
      className={cn('text-title3Bold text-base-hi', className)}
      {...props}
    />
  );
});
DialogTitle.displayName = RadixDialog.Title.displayName;

interface DialogDescriptionProps extends RadixDialog.DialogDescriptionProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixDialog.DialogDescriptionProps['asChild'];
}
export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof RadixDialog.Description>,
  DialogDescriptionProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixDialog.Description
      ref={forwardedRef}
      className={cn('text-bodyNormal2Regular text-base-weak', className)}
      {...props}
    />
  );
});
DialogDescription.displayName = RadixDialog.Description.displayName;
