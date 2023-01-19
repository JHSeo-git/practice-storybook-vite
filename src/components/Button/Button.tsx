import { cva } from 'class-variance-authority';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Is this the principal call to action on the page?
   */
  intent: 'primary' | 'secondary';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ intent, size = 'medium', label, ...props }: ButtonProps) => {
  return (
    <button type="button" className={button({ intent, size })} {...props}>
      {label}
    </button>
  );
};

const button = cva(
  ['font-semibold', 'border', 'rounded', 'inline-flex items-center justify-center'],
  {
    variants: {
      intent: {
        primary: ['bg-blue-500', 'text-white', 'border-blue-500'],
        secondary: ['bg-white', 'text-blue-500', 'border-blue-500'],
      },
      size: {
        small: ['text-sm', 'h-8', 'py-1', 'px-2'],
        medium: ['text-base', 'h-10', 'py-2', 'px-4'],
        large: ['text-lg', 'h-12', 'py-3', 'px-6'],
      },
      defaultVariants: {
        intent: 'primary',
        size: 'medium',
      },
    },
  }
);
