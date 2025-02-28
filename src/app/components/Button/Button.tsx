import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.css'
import clsx from 'clsx'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'btn' | 'link'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  as,
  className,
  variant = 'btn',
  ...restProps
}: ButtonProps<T>) => {
  const Component = as ?? 'button'
  const finalClass = clsx(s.button, s[variant], className)
  return <Component className={finalClass} {...restProps} />
}
