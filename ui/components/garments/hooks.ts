import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useMemo } from 'react'
import { WardrobeType } from '@/stores/wardrobe/types'
import { useDispatch } from 'react-redux'
import { wardrobeActions } from '@/stores/wardrobe'
import { config } from '@/config/index'

const variants = {
    init: { opacity: 0, scale: 0.5 },
    animate: {
        opacity: 1,
        scale: 1,
    },
    transition: {
        default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
        },
    },
    exit: { opacity: 0, scale: 0.5 },
}

export const useGarments = () => {
    const dispatch = useDispatch()

    const onDelete = (position: WardrobeType, id: number) => {
        dispatch(wardrobeActions.delete({ position, id }))
    }

    const wardrobe = useTypedSelector((state) => state.wardrobe)

    const wardrobeList = useMemo(() => {
        const list = config.wardrobeSections as WardrobeType[]

        return list.map((key) => ({
            position: key,
            data: wardrobe[key],
        }))
    }, [wardrobe])

    return {
        variants,
        onDelete,
        wardrobeList,
    }
}
