export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'btn-small' | 'btn-medium' | 'btn-large'
  variant?:
    | 'btn-primary'
    | 'btn-secondary'
    | 'btn-danger'
    | 'btn-warning'
    | 'btn-success'
  center?: boolean
  asChild?: boolean
}
