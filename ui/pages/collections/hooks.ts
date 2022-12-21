import { useTypedSelector } from '@/hooks/useTypedSelector'

export const useCollections = () => {
    const collections = useTypedSelector((state) => state.wardrobe.collections)

    return {
        collections,
    }
}
