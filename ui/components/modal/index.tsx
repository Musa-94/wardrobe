import { ModalAntd } from './styled'
import { ReactNode } from 'react'
import { ModalProps } from 'antd'

interface IModal extends ModalProps {
    open: boolean
    title: string
    onCancel?: () => void
    children: ReactNode
    onConfirm?: () => void
}

export const Modal = (props: IModal) => {
    const { open, footer, onCancel, onConfirm, children } = props

    if (!open) return null

    return (
        <ModalAntd
            onOk={onConfirm}
            footer={footer}
            onCancel={onCancel}
            {...props}
        >
            {children}
        </ModalAntd>
    )
}
