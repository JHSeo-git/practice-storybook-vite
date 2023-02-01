import * as RadixAspectRatio from '@radix-ui/react-aspect-ratio';
import * as React from 'react';

interface AspectRatioProps extends RadixAspectRatio.AspectRatioProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: RadixAspectRatio.AspectRatioProps['asChild'];
  /**
   * The desired ratio
   * @default 1
   */
  ratio?: RadixAspectRatio.AspectRatioProps['ratio'];
}

export const AspectRatio = React.forwardRef<
  React.ElementRef<typeof RadixAspectRatio.Root>,
  AspectRatioProps
>((props, forwardedRef) => {
  return <RadixAspectRatio.Root {...props} ref={forwardedRef} />;
});

AspectRatio.displayName = RadixAspectRatio.AspectRatio.displayName;
