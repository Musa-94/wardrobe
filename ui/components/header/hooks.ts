import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useEffect, useMemo, useRef, useState } from 'react'
import { webStorage } from '@/utils/web-storage/web-storage'
import { WebStorage } from '@/constants/web-storage/web-storage'
import { useDispatch } from 'react-redux'
import { wardrobeActions } from '@/stores/wardrobe'
import { useRouter } from 'next/router'
import { IWardrobeContent } from '@/stores/wardrobe/types'

export const useHeader = () => {
    const dispatch = useDispatch()
    const router = useRouter()

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
        const collectionsFromLS = webStorage.getLocalStorage<
            [IWardrobeContent[]]
        >(WebStorage.COLLECTIONS)

        webStorage.setLocalStorage(
            WebStorage.COLLECTIONS,
            JSON.stringify(
                collectionsFromLS?.length
                    ? [...collectionsFromLS, collection]
                    : [collection]
            )
        )

        dispatch(wardrobeActions.saveCollections(collection))

        router.replace('/collections').then(() => {
            dispatch(wardrobeActions.clearSelectedCollection())
        })
    }

    return {
        collectionComplete,
        onSaveCollection,
    }
}
