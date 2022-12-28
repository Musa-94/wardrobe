import { memo } from 'react'
import { useCollections, useHydrate } from './hooks'

import { Collection } from '@/pages/collections/atoms/collection'
import { Empty } from '@/components/empty'
import {
    Title,
    CarouselContainer,
    CollectionsCarousel,
    WrapperCollections,
} from './styled'

const Content = memo(() => {
    const { collections, isEmpty, onDeleteCollection } = useCollections()

    if (isEmpty)
        return <Empty description="no saved collections" key="empty-block" />

    return (
        <CollectionsCarousel dotPosition="bottom" key="collection-carousel">
            {collections.map((collection) => (
                <Collection
                    key={collection![0].id}
                    collection={collection!}
                    onDelete={onDeleteCollection}
                />
            ))}
        </CollectionsCarousel>
    )
})

export const Collections = memo(() => {
    useHydrate()

    return (
        <WrapperCollections>
            <Title>Collections</Title>
            <CarouselContainer>
                <Content />
            </CarouselContainer>
        </WrapperCollections>
    )
})
