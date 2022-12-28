import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useEffect, useState } from 'react'
import { webStorage } from '@/utils/web-storage/web-storage'
import { LocalStorageKeys } from '@/constants/web-storage/local-storage-keys'
import { IWardrobeContent } from '@/stores/wardrobe/types'
import { useDispatch } from 'react-redux'
import { wardrobeActions } from '@/stores/wardrobe'
import { useMessageContext } from '@/contexts/message'

export const useCollections = () => {
    const dispatch = useDispatch()
    const { onMessage } = useMessageContext()
    const [isUpdateWebStorage, setIsUpdateWebStorage] = useState<boolean>(false)

    const collections: Array<IWardrobeContent[] | undefined> = useTypedSelector(
        (state) => {
            const mapCollections: Array<IWardrobeContent[] | undefined> = []

            state.wardrobe.collections.forEach((collection) => {
                mapCollections.push(collection)
            })

            return mapCollections
        }
    )
    const isEmpty = useTypedSelector((state) => {
        const collections = state.wardrobe.collections

        return !collections.size
    })

    useEffect(() => {
        if (!isUpdateWebStorage) return

        try {
            webStorage.setLocalStorage(
                LocalStorageKeys.COLLECTIONS,
                JSON.stringify(collections)
            )
        } catch (e) {}

        setIsUpdateWebStorage(false)
    }, [isUpdateWebStorage])

    const onDeleteCollection = async (collectionId: number) => {
        await dispatch(wardrobeActions.deleteCollectionById(collectionId))

        onMessage({
            type: 'success',
            content: 'Collection deleted',
        })

        setIsUpdateWebStorage(true)
    }

    return {
        onDeleteCollection,
        collections,
        isEmpty,
    }
}

export const useHydrate = () => {
    const dispatch = useDispatch()
    const collections = useTypedSelector((state) => state.wardrobe.collections)

    useEffect(() => {
        if (collections.size) return

        const collectionsFromLS = webStorage.getLocalStorage<
            [IWardrobeContent[]]
        >(LocalStorageKeys.COLLECTIONS)

        if (!collectionsFromLS) return

        dispatch(wardrobeActions.hydrate(collectionsFromLS))
    }, [])
}
