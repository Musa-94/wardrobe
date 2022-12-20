import {
    CancelButton,
    CloseButtonContainer,
    CloseButtonHorizontal,
    CloseButtonVertical,
    ConfirmButton,
    ModalContainer,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    WrapperModal,
} from '@/components/modals/styled'
import { ReactNode } from 'react'

interface IModal {
    open: boolean
    title: string
    onClose?: () => void
    children: ReactNode
    onCancel?: () => void
    onConfirm?: () => void
}

export const Modal = (props: IModal) => {
    const { open, title, onClose, children, onCancel, onConfirm } = props

    if (!open) return null

    return (
        <WrapperModal>
            <ModalOverlay />
            <ModalContainer>
                <ModalHeader>
                    {title}
                    {onClose ? (
                        <CloseButtonContainer onClick={onClose}>
                            <CloseButtonHorizontal />
                            <CloseButtonVertical />
                        </CloseButtonContainer>
                    ) : null}
                </ModalHeader>
                <ModalContent>{children}</ModalContent>
                <ModalFooter>
                    {onCancel && <CancelButton />}
                    {onConfirm && <ConfirmButton />}
                </ModalFooter>
            </ModalContainer>
        </WrapperModal>
    )
}
