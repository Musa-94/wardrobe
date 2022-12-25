import { webStorage } from '@/utils/web-storage/web-storage'
import { WebStorage } from '@/constants/web-storage/web-storage'
import { useDispatch } from 'react-redux'
import { wardrobeActions } from '@/stores/wardrobe'
import { useMessageContext } from '@/contexts/message'

export const useSettings = () => {
    const dispatch = useDispatch()
    const { onMessage } = useMessageContext()

    const onCleanCollections = () => {
        webStorage.removeLocalStorage(WebStorage.COLLECTIONS)

        dispatch(wardrobeActions.clearSavedCollections())

        onMessage({
            type: 'info',
            content: 'Storage cleaned',
        })
    }

    return {
        onCleanCollections,
    }
}
