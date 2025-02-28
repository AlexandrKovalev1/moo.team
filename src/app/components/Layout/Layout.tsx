import { ComponentPropsWithoutRef } from 'react'
import Header from '../Header/Header.tsx'

type Props = ComponentPropsWithoutRef<'div'>
export const Layout = ({ children, ...props }: Props) => {
  return (
    <div {...props}>
      <Header />
      <main>{children}</main>
    </div>
  )
}
