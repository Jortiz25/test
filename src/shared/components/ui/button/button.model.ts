interface IButtonVariants {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'sm' | 'lg' | 'icon';
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonVariants {
  asChild?: boolean;
}
