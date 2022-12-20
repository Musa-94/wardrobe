import { useTypedSelector } from '@/hooks/useTypedSelector'
import { ModalName, modalsActions } from '@/stores/modals'
import { useDispatch } from 'react-redux'

export const usePreview = () => {
    const dispatch = useDispatch()
    const open = useTypedSelector(
        (state) => state.modals[ModalName.PREVIEW].open
    )

    const onClose = () => {
        dispatch(modalsActions.closeModal(ModalName.PREVIEW))
    }

    return {
        open,
        onClose,
    }
}
