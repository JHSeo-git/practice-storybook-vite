import * as RadixAvatar from '@radix-ui/react-avatar';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

interface AvatarProps extends RadixAvatar.AvatarProps {
  /**
   * className to be applied
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixAvatar.AvatarProps['asChild'];
}
export const Avatar = React.forwardRef<React.ElementRef<typeof RadixAvatar.Root>, AvatarProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <RadixAvatar.Root
        ref={forwardedRef}
        className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
        {...props}
      />
    );
  }
);
Avatar.displayName = RadixAvatar.Avatar.displayName;

interface AvatarImageProps extends RadixAvatar.AvatarImageProps {
  /**
   * className to be applied
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixAvatar.AvatarImageProps['asChild'];
  /**
   * A callback providing information about the loading status of the image. This is useful in case you want to control more precisely what to render as the image is loading.
   */
  onLoadingStatusChange?: RadixAvatar.AvatarImageProps['onLoadingStatusChange'];
}
export const AvatarImage = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Image>,
  AvatarImageProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixAvatar.Image
      ref={forwardedRef}
      className={cn('aspect-squre h-full w-full object-cover', className)}
      {...props}
    />
  );
});
AvatarImage.displayName = RadixAvatar.AvatarImage.displayName;

interface AvatarFallbackProps extends RadixAvatar.AvatarFallbackProps {
  /**
   * className to be applied
   */
  className?: string;
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixAvatar.AvatarFallbackProps['asChild'];
  /**
   * Useful for delaying rendering so it only appears for those with slower connections.
   */
  delayMs?: number;
}
export const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof RadixAvatar.Fallback>,
  AvatarFallbackProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadixAvatar.Fallback
      ref={forwardedRef}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-base-3',
        className
      )}
      {...props}
    />
  );
});
AvatarFallback.displayName = RadixAvatar.AvatarFallback.displayName;
