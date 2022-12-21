import { useTypedSelector } from '@/hooks/useTypedSelector'
import { ModalName, modalsActions } from '@/stores/modals'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { wardrobeActions } from '@/stores/wardrobe'
import { WardrobeType } from '@/stores/wardrobe/types'
import { config } from '@/config/index'

export const usePreview = () => {
    const dispatch = useDispatch()
    const open = useTypedSelector(
        (state) => state.modals[ModalName.PREVIEW].open
    )
    const [imageData] = useTypedSelector((state) => state.wardrobe.temps)

    const onClose = () => {
        dispatch(modalsActions.closeModal(ModalName.PREVIEW))
    }

    return {
        open,
        onClose,
        imageData,
    }
}

export const useHandleSelect = (image: string = '') => {
    const dispatch = useDispatch()
    const [select, setSelect] = useState<string>('')

    const onSelect = (value: string): void => {
        setSelect(value)
    }

    const onSave = () => {
        dispatch(
            wardrobeActions.setWardrobeData({
                wardrobeType: select as WardrobeType,
                image,
                id: Date.now(),
                name: select,
            })
        )

        dispatch(modalsActions.closeModal(ModalName.PREVIEW))
    }

    return {
        options: config.wardrobeOptions,
        onSelect,
        onSave,
        select,
    }
}
