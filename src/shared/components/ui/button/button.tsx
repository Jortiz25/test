import * as React from 'react';
import { type ButtonProps } from './button.model';
import './button.style.css';

const buttonVariants = {
  base: 'btn',
  variants: {
    variant: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      danger: 'btn-danger',
    },
    size: {
      sm: 'btn-small',
      md: 'btn-medium',
      lg: 'btn-large',
      icon: 'btn-large',
    },
  },
  defaultVariants: {
    variant: 'btn-primary',
    size: 'btn-medium',
  },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, size,variant, asChild = false, ...props },
    ref,
  ) => {
 

    const combinedClasses = [
        buttonVariants.base,
        variant ? buttonVariants.variants.variant[variant] : buttonVariants.defaultVariants.variant,
        size ? buttonVariants.variants.size[size] : buttonVariants.defaultVariants.size,
        className,
    ].join(' ');

    const Comp = asChild ? 'span' : 'button';
    
    return (
      <Comp
        className={combinedClasses}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
