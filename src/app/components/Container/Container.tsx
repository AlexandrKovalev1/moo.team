import s from './container.module.css'
import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'div'>
const Container = ({ className, ...props }: Props) => {
  return <div className={s.container + ' ' + className} {...props} />
}

export default Container
