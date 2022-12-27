import { webStorage } from '@/utils/web-storage/web-storage'
import { WebStorage } from '@/constants/web-storage/web-storage'
import { useDispatch } from 'react-redux'
import { wardrobeActions } from '@/stores/wardrobe'
import { useMessageContext } from '@/contexts/message'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Themes } from '../../../themes/types'
import { appActions } from '@/stores/app'

export const useSettings = () => {
    const dispatch = useDispatch()
    const { onMessage } = useMessageContext()
    const isChecked = useTypedSelector(
        (state) => state.app.theme === Themes.DARK
    )

    const onCleanCollections = () => {
        webStorage.removeLocalStorage(WebStorage.COLLECTIONS)

        dispatch(wardrobeActions.clearSavedCollections())

        onMessage({
            type: 'info',
            content: 'Storage cleaned',
        })
    }

    const toggleTheme = () => {
        dispatch(appActions.toggleTheme())
    }

    return {
        onCleanCollections,
        isChecked,
        toggleTheme,
    }
}
