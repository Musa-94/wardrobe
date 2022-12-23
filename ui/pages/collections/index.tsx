import { useCollections, useHydrate } from './hooks'
import {
    Title,
    CarouselContainer,
    CollectionsCarousel,
    WrapperCollections,
} from './styled'
import { Collection } from '@/pages/collections/atoms/collection'
import { IWardrobeContent } from '@/stores/wardrobe/types'
import { Empty } from '@/components/empty'

const getContent = (
    isEmpty: boolean,
    collections: [IWardrobeContent[]] | []
) => {
    if (isEmpty) return <Empty description="no saved collections" />

    return (
        <CollectionsCarousel dotPosition="right">
            {collections.map((collection, index) => (
                <Collection key={index} collection={collection} />
            ))}
        </CollectionsCarousel>
    )
}

export const Collections = () => {
    const { collections, isEmpty } = useCollections()
    useHydrate()

    return (
        <WrapperCollections>
            <Title>Collections</Title>
            <CarouselContainer>
                {getContent(isEmpty, collections)}
            </CarouselContainer>
        </WrapperCollections>
    )
}
