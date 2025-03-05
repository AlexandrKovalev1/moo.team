import { Dialog } from 'radix-ui'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import s from './modal.module.css'
import Container from '../Container/Container.tsx'

type Props = ComponentPropsWithoutRef<typeof Dialog.Root> & {
  setOpen?: (isOpen: boolean) => void
  trigger?: ReactNode
  close?: ReactNode
  title?: ReactNode
}

const Modal = ({ open, setOpen, trigger, close, children, title }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content aria-description={'promises'} aria-describedby={''} className={s.content}>
          <Container className={s.container}>
            {title && <Dialog.Title>{title}</Dialog.Title>}
            {children}
            {close && <Dialog.Close asChild>{close}</Dialog.Close>}
          </Container>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
