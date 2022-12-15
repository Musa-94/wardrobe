import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useMemo } from 'react'
import { WardrobeType } from '@/stores/wardrobe/types'

export const useGarments = () => {
    const variants = {
        init: { scale: 0 },
        done: { scale: 1 },
    }

    const wardrobe = useTypedSelector((state) => state.wardrobe)

    const wardrobeList = useMemo(() => {
        const list = Object.keys(wardrobe) as WardrobeType[]

        return list.map((key) => ({
            position: key,
            data: {
                ...wardrobe[key],
            },
        }))
    }, [wardrobe])

    return {
        variants,
        wardrobeList,
    }
}
