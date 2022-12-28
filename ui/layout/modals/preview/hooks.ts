import { useTypedSelector } from '@/hooks/useTypedSelector'
import { ModalName, modalsActions } from '@/stores/modals'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { wardrobeActions } from '@/stores/wardrobe'
import { WardrobeType } from '@/stores/wardrobe/types'
import { config } from '@/config/index'
import { useRouter } from 'next/router'
import { useMessageContext } from '@/contexts/message'

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
    const router = useRouter()
    const dispatch = useDispatch()
    const { onMessage } = useMessageContext()
    const [select, setSelect] = useState<string>('')

    const onSelect = (value: string): void => {
        setSelect(value)
    }

    const onSave = async () => {
        if (!select) {
            onMessage({
                type: 'error',
                content: 'Please select a position',
            })
            return
        }

        dispatch(
            wardrobeActions.setWardrobeData({
                wardrobeType: select as WardrobeType,
                image,
                id: Date.now(),
                name: select,
            })
        )

        dispatch(modalsActions.closeModal(ModalName.PREVIEW))
        onSelect('')

        if (router.pathname !== '/') {
            await router.replace('/')
        }
    }

    return {
        options: config.wardrobeOptions,
        onSelect,
        onSave,
        select,
    }
}
