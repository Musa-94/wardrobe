import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useMemo } from 'react'
import { config } from '@/config/index'
import { WardrobeType } from '@/stores/wardrobe/types'

export const useGarments = () => {
    const isEmpty = useTypedSelector((state) => {
        const wardrobe = state.wardrobe

        return (
            !wardrobe.top.length &&
            !wardrobe.tors.length &&
            !wardrobe.middle.length &&
            !wardrobe.footer.length
        )
    })

    const wardrobe = useTypedSelector((state) => state.wardrobe)

    const wardrobeList = useMemo(() => {
        const list = config.wardrobeSections as WardrobeType[]

        return list.map((key) => ({
            position: key,
            data: wardrobe[key],
        }))
    }, [wardrobe])

    return {
        wardrobeList,
        isEmpty,
    }
}
