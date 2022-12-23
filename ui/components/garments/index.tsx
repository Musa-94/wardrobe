import React, { memo } from 'react'
import { AnimatePresence } from 'framer-motion'

import { Empty } from '@/components/empty'
import {
    GarmentsByPosition,
    IWardrobeWithPosition,
} from '@/components/garments/atoms/garments-list'
import { useGarments } from './hooks'
import { WrapperGarments } from './styled'

const getContent = (
    isEmpty: boolean,
    wardrobeList: IWardrobeWithPosition[]
) => {
    if (isEmpty) {
        return <Empty description="wardrobe is empty" />
    }

    return (
        <AnimatePresence>
            {wardrobeList.map((list, index) => (
                <GarmentsByPosition key={index} list={list} />
            ))}
        </AnimatePresence>
    )
}

export const Garments = memo(() => {
    const { wardrobeList, isEmpty } = useGarments()

    return (
        <WrapperGarments>{getContent(isEmpty, wardrobeList)}</WrapperGarments>
    )
})
