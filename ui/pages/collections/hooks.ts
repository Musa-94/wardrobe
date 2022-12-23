import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useEffect } from 'react'
import { webStorage } from '@/utils/web-storage/web-storage'
import { WebStorage } from '@/constants/web-storage/web-storage'
import { IWardrobeContent } from '@/stores/wardrobe/types'
import { useDispatch } from 'react-redux'
import { wardrobeActions } from '@/stores/wardrobe'

export const useCollections = () => {
    const collections = useTypedSelector((state) => state.wardrobe.collections)
    const isEmpty = useTypedSelector((state) => {
        const collections = state.wardrobe.collections

        return !collections.length || !collections[0].length
    })

    return {
        collections,
        isEmpty,
    }
}

export const useHydrate = () => {
    const dispatch = useDispatch()
    const collections = useTypedSelector((state) => state.wardrobe.collections)

    useEffect(() => {
        if (collections.length) return

        const collectionsFromLS = webStorage.getLocalStorage<
            [IWardrobeContent[]]
        >(WebStorage.COLLECTIONS)

        if (!collectionsFromLS) return

        dispatch(wardrobeActions.hydrate(collectionsFromLS))
    }, [])
}
