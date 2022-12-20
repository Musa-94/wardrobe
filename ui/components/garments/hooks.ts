import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useMemo } from 'react'
import { WardrobeType } from '@/stores/wardrobe/types'
import { useDispatch } from 'react-redux'
import { wardrobeActions } from '@/stores/wardrobe'

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

    const onDelete = (wardrobeType: WardrobeType) => {
        dispatch(wardrobeActions.delete(wardrobeType))
    }

    const wardrobe = useTypedSelector((state) => state.wardrobe)

    const wardrobeList = useMemo(() => {
        const list = Object.keys(wardrobe) as WardrobeType[]

        return list.map((key) => ({
            position: key,
            data: wardrobe[key] && wardrobe[key][0],
        }))
    }, [wardrobe])

    return {
        variants,
        onDelete,
        wardrobeList,
    }
}
