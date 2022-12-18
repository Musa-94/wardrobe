import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useMemo } from 'react'
import { WardrobeType } from '@/stores/wardrobe/types'

export const useGarments = () => {
    const variants = {
        init: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        transition: {
            default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
                type: 'spring',
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
            },
        },
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
