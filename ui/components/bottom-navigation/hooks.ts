import { ChangeEvent, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { wardrobeActions } from '@/stores/wardrobe'
import { ModalName, modalsActions } from '@/stores/modals'
import { useRouter } from 'next/router'

export const useBottomNavigation = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const files = event.target?.files

            const reader = new FileReader()

            reader.onload = (result) => {
                dispatch(
                    wardrobeActions.setWardrobeData({
                        wardrobeType: 'temps',
                        id: Date.now(),
                        image: result.target?.result as string,
                        name: 'temps',
                    })
                )

                dispatch(
                    modalsActions.openModal({
                        modalType: ModalName.PREVIEW,
                    })
                )
            }

            files?.length &&
                Array.from(files).forEach((file) => {
                    reader.readAsDataURL(file)
                })
        },
        [dispatch]
    )

    return {
        onChange,
        activePage: router.pathname === '/' ? '/' : router.pathname.slice(1),
    }
}
