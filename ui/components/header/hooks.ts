import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useEffect, useMemo, useState } from 'react'
import { webStorage } from '@/utils/web-storage/web-storage'
import { WebStorage } from '@/constants/web-storage/web-storage'
import { useDispatch } from 'react-redux'
import { wardrobeActions } from '@/stores/wardrobe'

export const useHeader = () => {
    const dispatch = useDispatch()

    const [top] = useTypedSelector((state) => state.wardrobe.top)
    const [tors] = useTypedSelector((state) => state.wardrobe.tors)
    const [footer] = useTypedSelector((state) => state.wardrobe.middle)
    const [middle] = useTypedSelector((state) => state.wardrobe.footer)

    const collection = useMemo(
        () => [top, tors, middle, footer].filter((dress) => dress),
        [top, tors, middle, footer]
    )

    const [collectionComplete, setCollectionComplete] = useState<boolean>(false)

    useEffect(() => {
        if (collection.length === 4) {
            setCollectionComplete(true)
        }

        if (collection.length < 4 && collectionComplete) {
            setCollectionComplete(false)
        }
    }, [collection, collectionComplete])

    const onSaveCollection = () => {
        if (collection.length < 4) return

        webStorage.setLocalStorage(
            WebStorage.COLLECTIONS,
            JSON.stringify(collection)
        )

        dispatch(wardrobeActions.saveCollections(collection))
    }

    return {
        collectionComplete,
        onSaveCollection,
    }
}
