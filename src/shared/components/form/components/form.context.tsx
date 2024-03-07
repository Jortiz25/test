import React from 'react'
import {
  type FormItemContextValue,
  type FormFieldContextValue,
} from '../form.model'

export const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

export const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)
