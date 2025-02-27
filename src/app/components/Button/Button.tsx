import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.css'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'btn' | 'link'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  as,
  className,
  fullWidth,
  variant = 'btn',
  ...restProps
}: ButtonProps<T>) => {
  const Component = as ?? 'button'

  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...restProps}
    />
  )
}
