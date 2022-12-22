import { webStorage } from '@/utils/web-storage/web-storage'
import { WebStorage } from '@/constants/web-storage/web-storage'
import { useDispatch } from 'react-redux'
import { wardrobeActions } from '@/stores/wardrobe'

export const useSettings = () => {
    const dispatch = useDispatch()

    const onCleanCollections = () => {
        webStorage.removeLocalStorage(WebStorage.COLLECTIONS)

        dispatch(wardrobeActions.clearSavedCollections())
    }

    return {
        onCleanCollections,
    }
}
