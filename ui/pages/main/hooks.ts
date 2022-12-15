import { useTypedSelector } from '../../../hooks'
import { useMemo } from 'react'
import { WardrobeType } from '@/stores/wardrobe/types'

export const useMain = () => {
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
        wardrobeList,
    }
}
