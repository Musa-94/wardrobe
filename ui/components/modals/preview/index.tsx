import { usePreview } from '@/components/modals/preview/hooks'
import { Modal } from '@/components/modals/modal'

export const Preview = () => {
    const { open, onClose } = usePreview()

    return (
        <Modal
            open={open}
            title="Preview"
            onClose={onClose}
            onCancel={onClose}
            onConfirm={onClose}
        >
            Content
        </Modal>
    )
}
