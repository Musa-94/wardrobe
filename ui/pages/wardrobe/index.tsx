import React, { memo } from 'react'
import { AnimatePresence } from 'framer-motion'

import { Empty } from '@/components/empty'
import { WardrobeList, IWardrobeWithPosition } from './atoms/wardrobe-list'
import { useWardrobe } from './hooks'
import { WrapperWardrobe } from './styled'

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
                <WardrobeList key={index} list={list} />
            ))}
        </AnimatePresence>
    )
}

export const Wardrobe = memo(() => {
    const { wardrobeList, isEmpty } = useWardrobe()

    return (
        <WrapperWardrobe>{getContent(isEmpty, wardrobeList)}</WrapperWardrobe>
    )
})
