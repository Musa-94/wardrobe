import { ModalAntd } from './styled'
import { ReactNode } from 'react'
import { ModalProps } from 'antd'
import { useModal } from '@/components/modal/hooks'

interface IModal extends ModalProps {
    open: boolean
    title: string
    onCancel?: () => void
    children: ReactNode
    onConfirm?: () => void
}

export const Modal = (props: IModal) => {
    const { open, footer, onCancel, onConfirm, children } = props
    const { bodyStyle } = useModal()

    if (!open) return null

    return (
        <ModalAntd
            onOk={onConfirm}
            footer={footer}
            onCancel={onCancel}
            bodyStyle={{
                backgroundColor: 'blue',
            }}
            wrapClassName="custom-class"
            style={{
                backgroundColor: 'green',
            }}
            {...props}
        >
            {children}
        </ModalAntd>
    )
}
