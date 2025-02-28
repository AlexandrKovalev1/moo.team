import { ComponentPropsWithoutRef, useId } from 'react'
import s from './textField.module.css'

type Props = ComponentPropsWithoutRef<'input'> & {
  label?: string
  description?: string
}

export const TextField = ({ id, label, description, ...props }: Props) => {
  const generatedId = useId()
  const finalId = id ?? generatedId
  return (
    <div className={s.wrapper}>
      {label && (
        <label htmlFor={finalId} className={s.label}>
          {label}
        </label>
      )}
      <input id={finalId} {...props} className={s.input} />
      {description && <small className={s.description}>{description}</small>}
    </div>
  )
}
