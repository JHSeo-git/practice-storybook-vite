import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils/styleUtils';

type ButtonVariant = VariantProps<typeof buttonVariants>;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariant {
  /**
   * The intent of the `<button>`
   */
  intent?: NonNullable<ButtonVariant['intent']>;
  /**
   * The variant of the `<button>`
   */
  variant?: NonNullable<ButtonVariant['variant']>;
  /**
   * The size of the `<button>`
   */
  size?: NonNullable<ButtonVariant['size']>;
  /**
   * children of the `<button>`
   */
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, variant, size, ...props }, forwardedRef) => {
    return (
      <button
        ref={forwardedRef}
        className={cn(buttonVariants({ intent, variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded-md text-bodyRelaxed2Regular font-medium transition-colors',
    'focus:ring-gray-7 focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      intent: {
        neutral: ['bg-base-12 hover:bg-base-11 focus:ring-base-11'],
        primary: ['bg-primary-base hover:bg-primary-11 focus:ring-primary-11'],
        danger: ['bg-danger-base hover:bg-danger-11 focus:ring-danger-11'],
        success: ['bg-success-base hover:bg-success-11 focus:ring-success-11'],
        info: ['bg-info-base hover:bg-info-11 focus:ring-info-11'],
        warning: ['bg-warning-base hover:bg-warning-10 focus:ring-warning-10'],
      },
      variant: {
        solid: ['text-base-lo'],
        subtle: [],
        ghost: ['bg-transparent'],
        outline: ['border'],
      },
      size: {
        small: ['h-9 px-2'],
        medium: ['h-10 px-4'],
        large: ['h-11 px-8'],
      },
    },
    compoundVariants: [
      // solid
      {
        intent: 'warning',
        variant: 'solid',
        className: 'text-black',
      },
      // subtle
      {
        intent: 'neutral',
        variant: 'subtle',
        className: 'bg-base-4 text-base-hi hover:bg-base-5 focus:ring-base-6 active:bg-base-6',
      },
      {
        intent: 'primary',
        variant: 'subtle',
        class: [
          'bg-primary-4 text-primary-hi hover:bg-primary-5 focus:ring-primary-6 active:bg-primary-6',
        ],
      },
      {
        intent: 'danger',
        variant: 'subtle',
        class: [
          'bg-danger-4 text-danger-hi hover:bg-danger-5 focus:ring-danger-6 active:bg-danger-6',
        ],
      },
      {
        intent: 'success',
        variant: 'subtle',
        class: [
          'bg-success-4 text-success-hi hover:bg-success-5 focus:ring-success-6 active:bg-success-6',
        ],
      },
      {
        intent: 'info',
        variant: 'subtle',
        class: ['bg-info-4 text-info-hi hover:bg-info-5 focus:ring-info-6 active:bg-info-6'],
      },
      {
        intent: 'warning',
        variant: 'subtle',
        class: [
          'bg-warning-4 text-warning-11 hover:bg-warning-5 focus:ring-warning-6 active:bg-warning-6',
        ],
      },
      // ghost
      {
        intent: 'neutral',
        variant: 'ghost',
        class: ['text-base-hi hover:bg-base-4 focus:ring-base-5 active:bg-base-5'],
      },
      {
        intent: 'primary',
        variant: 'ghost',
        class: ['text-primary-hi hover:bg-primary-4 focus:ring-primary-5 active:bg-primary-5'],
      },
      {
        intent: 'danger',
        variant: 'ghost',
        class: ['text-danger-hi hover:bg-danger-4 focus:ring-danger-5 active:bg-danger-5'],
      },
      {
        intent: 'success',
        variant: 'ghost',
        class: ['text-success-hi hover:bg-success-4 focus:ring-success-5 active:bg-success-5'],
      },
      {
        intent: 'info',
        variant: 'ghost',
        class: ['text-info-hi hover:bg-info-4 focus:ring-info-5 active:bg-info-5'],
      },
      {
        intent: 'warning',
        variant: 'ghost',
        class: ['text-warning-11 hover:bg-warning-4 focus:ring-warning-5 active:bg-warning-5'],
      },
      // outline
      {
        intent: 'neutral',
        variant: 'outline',
        class: [
          'border-base-7 bg-base-1 text-base-hi hover:border-base-8 hover:bg-base-3 focus:ring-base-8',
        ],
      },
      {
        intent: 'primary',
        variant: 'outline',
        class: [
          'border-primary-7 bg-primary-1 text-primary-hi hover:border-primary-8 hover:bg-primary-3 focus:ring-primary-8',
        ],
      },
      {
        intent: 'danger',
        variant: 'outline',
        class: [
          'border-danger-7 bg-danger-1 text-danger-hi hover:border-danger-8 hover:bg-danger-3 focus:ring-danger-8',
        ],
      },
      {
        intent: 'success',
        variant: 'outline',
        class: [
          'border-success-7 bg-success-1 text-success-hi hover:border-success-8 hover:bg-success-3 focus:ring-success-8',
        ],
      },
      {
        intent: 'info',
        variant: 'outline',
        class: [
          'border-info-7 bg-info-1 text-info-hi hover:border-info-8 hover:bg-info-3 focus:ring-info-8',
        ],
      },
      {
        intent: 'warning',
        variant: 'outline',
        class: [
          'border-warning-7 bg-warning-1 text-warning-11 hover:border-warning-8 hover:bg-warning-3 focus:ring-warning-8',
        ],
      },
    ],
    defaultVariants: {
      intent: 'neutral',
      variant: 'solid',
      size: 'medium',
    },
  }
);
