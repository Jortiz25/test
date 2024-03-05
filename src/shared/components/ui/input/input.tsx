import * as React from 'react'
import { type InputProps } from './input.model'

import './input.style.css'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const combinedClasses = [className, 'input-field'].join(' ')
    return (
      <input type={type} className={combinedClasses} ref={ref} {...props} />
    )
  }
)

/**
 * React functional component for rendering an input label.
 *
 * @param {InputProps} label - The label to be displayed
 * @return {JSX.Element} The input label component
 */
const InputLabel: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="input-container">
      <label htmlFor="input-field" className="input-label">
        {label}
      </label>
      <Input label={label} {...props} />
    </div>
  )
}

Input.displayName = 'Input'
InputLabel.displayName = 'InputLabel'

export { Input, InputLabel }
