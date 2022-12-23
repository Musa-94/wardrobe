import { useDispatch } from 'react-redux'
import { WardrobeType } from '@/stores/wardrobe/types'
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

export const useGarmentsList = () => {
    const dispatch = useDispatch()

    const onDelete = (position: WardrobeType, id: number) => {
        dispatch(wardrobeActions.delete({ position, id }))
    }

    return {
        variants,
        onDelete,
    }
}
