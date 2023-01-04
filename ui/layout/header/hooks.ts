import { useTypedSelector } from '@/hooks/useTypedSelector'
import { webStorage } from '@/utils/web-storage/web-storage'
import { LocalStorageKeys } from '@/constants/web-storage/local-storage-keys'
import { useDispatch } from 'react-redux'
import { wardrobeActions } from '@/stores/wardrobe'
import { useRouter } from 'next/router'
import { IWardrobeContent } from '@/stores/wardrobe/types'
import { useMessageContext } from '@/contexts/message'

export const useHeader = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { onMessage } = useMessageContext()

    const { collection, isComplete } = useTypedSelector((state) => {
        const [top] = state.wardrobe.top
        const [tors] = state.wardrobe.tors
        const [middle] = state.wardrobe.middle
        const [footer] = state.wardrobe.footer

        const collection = [top, tors, middle, footer].filter((dress) => dress)

        const fillCollection = (count: number) => {
            let i = 0
            const temp = [...collection]

            while (i < count) {
                temp.push({ id: 0, name: 'name', image: '' })
                i = i + 1
            }

            return temp
        }

        return {
            collection:
                collection.length < 4
                    ? fillCollection(4 - collection.length)
                    : collection,
            isComplete:
                [top, tors, middle, footer].filter((dress) => dress).length > 1,
        }
    })

    const onSaveCollection = async () => {
        if (!isComplete) return

        const collectionsFromLS = webStorage.getLocalStorage<
            [IWardrobeContent[]]
        >(LocalStorageKeys.COLLECTIONS)

        try {
            webStorage.setLocalStorage(
                LocalStorageKeys.COLLECTIONS,
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

        console.log('collection', collection)

        dispatch(wardrobeActions.saveCollections(collection))

        await router.replace('/collections')

        onMessage({
            type: 'success',
            content: 'Successfully saved',
            style: {
                padding: '5px',
                fontSize: '14px',
            },
            duration: 3,
        })
        dispatch(wardrobeActions.clearSelectedCollection())
    }

    return {
        collectionComplete: isComplete,
        onSaveCollection,
    }
}
