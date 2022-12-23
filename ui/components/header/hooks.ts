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

    const { collection, isComplete } = useTypedSelector((state) => {
        const [top] = state.wardrobe.top
        const [tors] = state.wardrobe.tors
        const [middle] = state.wardrobe.middle
        const [footer] = state.wardrobe.footer

        return {
            collection: [top, tors, middle, footer],
            isComplete:
                [top, tors, middle, footer].filter((dress) => dress).length > 1,
        }
    })

    const onSaveCollection = () => {
        if (!isComplete) return

        const collectionsFromLS = webStorage.getLocalStorage<
            [IWardrobeContent[]]
        >(WebStorage.COLLECTIONS)

        try {
            webStorage.setLocalStorage(
                WebStorage.COLLECTIONS,
                JSON.stringify(
                    collectionsFromLS?.length
                        ? [...collectionsFromLS, collection]
                        : [collection]
                )
            )
        } catch (e) {
            alert(
                'Ваша коллекция не сохранится в Базу данных и после перезагрузки страницы, всё удалится'
            )
        }

        dispatch(wardrobeActions.saveCollections(collection))

        router.replace('/collections').then(() => {
            dispatch(wardrobeActions.clearSelectedCollection())
        })
    }

    return {
        collectionComplete: isComplete,
        onSaveCollection,
    }
}
