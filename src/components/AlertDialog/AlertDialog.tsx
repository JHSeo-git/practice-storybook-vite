import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface AlertDialogProps extends RadixAlertDialog.AlertDialogProps {
  /**
   * className of the `<alert-dialog>`
   */
  className?: string;
  /**
   * The controlled open state of the dialog. Must be used in conjunction with `onOpenChange`.
   */
  open?: RadixAlertDialog.AlertDialogProps['open'];
  /**
   * Event handler called when the open state of the dialog changes.
   */
  onOpenChange?: RadixAlertDialog.AlertDialogProps['onOpenChange'];
  /**
   * The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: RadixAlertDialog.AlertDialogProps['defaultOpen'];
}
/**
 * @see https://www.radix-ui.com/docs/primitives/components/alert-dialog#root
 */
export const AlertDialog = (props: AlertDialogProps) => {
  return <RadixAlertDialog.Root {...props} />;
};

interface AlertDialogTriggerProps extends RadixAlertDialog.AlertDialogTriggerProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixAlertDialog.AlertDialogTriggerProps['asChild'];
}
export const AlertDialogTrigger = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Trigger>,
  AlertDialogTriggerProps
>((props, forwardedRef) => {
  return <RadixAlertDialog.Trigger ref={forwardedRef} {...props} />;
});
AlertDialogTrigger.displayName = RadixAlertDialog.Trigger.displayName;

interface AlertDialogPortalProps extends RadixAlertDialog.AlertDialogPortalProps {
  /**
   * className of the `<alert-dialog-portal>`
   */
  className?: string;
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. If used on this part, it will be inherited by `AlertDialog.Overlay` and `AlertDialog.Content`.
   */
  forceMount?: RadixAlertDialog.AlertDialogPortalProps['forceMount'];
  /**
   * Specify a container element to portal the content into. Defaults to `document.body`.
   */
  container?: RadixAlertDialog.AlertDialogPortalProps['container'];
}
const AlertDialogPortal = ({ className, children, ...props }: AlertDialogPortalProps) => {
  return (
    <RadixAlertDialog.Portal className={className} {...props}>
      <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
        {children}
      </div>
    </RadixAlertDialog.Portal>
  );
};

interface AlertDialogOverlayProps extends RadixAlertDialog.AlertDialogOverlayProps {
  /**
   * className of the `<alert-dialog-overlay>`
   */
  className?: string;
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `AlertDialog.Portal`.
   */
  forceMount?: RadixAlertDialog.AlertDialogOverlayProps['forceMount'];
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixAlertDialog.AlertDialogOverlayProps['asChild'];
}
const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Overlay>,
  AlertDialogOverlayProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixAlertDialog.Overlay
      ref={forwardedRef}
      className={cn(
        'bg-base-hi/50 animate-in fade-in fixed inset-0 z-50 backdrop-blur-sm transition-opacity',
        className
      )}
      {...props}
    />
  );
});
AlertDialogOverlay.displayName = RadixAlertDialog.Overlay.displayName;

interface AlertDialogContentProps extends RadixAlertDialog.AlertDialogContentProps {
  /**
   * className of the `<alert-dialog-content>`
   */
  className?: string;
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. It inherits from `AlertDialog.Portal`.
   */
  forceMount?: RadixAlertDialog.AlertDialogContentProps['forceMount'];
  /**
   * Event handler called when focus moves to the destructive action after opening. It can be prevented by calling `event.preventDefault`.
   */
  onOpenAutoFocus?: RadixAlertDialog.AlertDialogContentProps['onOpenAutoFocus'];
  /**
   * Event handler called when focus moves to the trigger after closing. It can be prevented by calling `event.preventDefault`.
   */
  onCloseAutoFocus?: RadixAlertDialog.AlertDialogContentProps['onCloseAutoFocus'];
  /**
   * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`.
   */
  onEscapeKeyDown?: RadixAlertDialog.AlertDialogContentProps['onEscapeKeyDown'];
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixAlertDialog.AlertDialogContentProps['asChild'];
  /**
   * Specify a container element to portal the content into. Defaults to `document.body`.
   */
  container?: RadixAlertDialog.AlertDialogPortalProps['container'];
}
export const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Content>,
  AlertDialogContentProps
>(({ className, container, ...props }, forwardedRef) => {
  return (
    <AlertDialogPortal container={container}>
      <AlertDialogOverlay />
      <RadixAlertDialog.Content
        ref={forwardedRef}
        className={cn(
          'bg-base-lo animate-in fade-in-90 slide-in-from-bottom-10 fixed z-50 grid w-full max-w-lg scale-100 gap-4 p-6 opacity-100',
          'sm:zoom-in-90 sm:slide-in-from-bottom-0 sm:rounded-lg',
          className
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
});
AlertDialogContent.displayName = RadixAlertDialog.Content.displayName;

interface AlertDialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * className of the `<alert-dialog-header>`
   */
  className?: string;
}
export const AlertDialogHeader = ({ className, ...props }: AlertDialogHeaderProps) => {
  return (
    <div className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
  );
};

interface AlertDialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * className of the `<alert-dialog-footer>`
   */
  className?: string;
}
export const AlertDialogFooter = ({ className, ...props }: AlertDialogFooterProps) => {
  return (
    <div
      className={cn('flex flex-col-reverse', 'sm:flex-row sm:justify-end sm:space-x-2', className)}
      {...props}
    />
  );
};

interface AlertDialogTitleProps extends RadixAlertDialog.AlertDialogTitleProps {
  /**
   * className of the `<alert-dialog-title>`
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixAlertDialog.AlertDialogTitleProps['asChild'];
}
export const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Title>,
  AlertDialogTitleProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixAlertDialog.Title
      ref={forwardedRef}
      className={cn('text-title3Bold text-base-hi', className)}
      {...props}
    />
  );
});
AlertDialogTitle.displayName = RadixAlertDialog.Title.displayName;

interface AlertDialogDescriptionProps extends RadixAlertDialog.AlertDialogDescriptionProps {
  /**
   * className of the `<alert-dialog-description>`
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixAlertDialog.AlertDialogDescriptionProps['asChild'];
}
export const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Description>,
  AlertDialogDescriptionProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixAlertDialog.Description
      ref={forwardedRef}
      className={cn('text-bodyNormal2Regular text-base-weak', className)}
      {...props}
    />
  );
});
AlertDialogDescription.displayName = RadixAlertDialog.Description.displayName;

interface AlertDialogActionProps extends RadixAlertDialog.AlertDialogActionProps {
  /**
   * className of the `<alert-dialog-action>`
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixAlertDialog.AlertDialogActionProps['asChild'];
}
export const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Action>,
  AlertDialogActionProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixAlertDialog.Action
      ref={forwardedRef}
      className={cn(
        'bg-base-hi text-label4Bold text-base-lo inline-flex h-10 items-center justify-center rounded-md py-2 px-4 transition-colors',
        'hover:bg-base-weak',
        'focus:ring-base-7 focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
});
AlertDialogAction.displayName = RadixAlertDialog.Action.displayName;

interface AlertDialogCancelProps extends RadixAlertDialog.AlertDialogCancelProps {
  /**
   * className of the `<alert-dialog-cancel>`
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: RadixAlertDialog.AlertDialogCancelProps['asChild'];
}
export const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof RadixAlertDialog.Cancel>,
  AlertDialogCancelProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixAlertDialog.Cancel
      ref={forwardedRef}
      className={cn(
        'border-base-7 text-label4Bold text-base-hi mt-2 inline-flex h-10 items-center justify-center rounded-md border bg-transparent py-2 px-4 transition-colors',
        'sm:mt-0',
        'hover:bg-base-3',
        'focus:ring-base-7 focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
});
AlertDialogCancel.displayName = RadixAlertDialog.Cancel.displayName;
