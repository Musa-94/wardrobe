import { useCollections, useHydrate } from './hooks'
import {
    Title,
    CarouselContainer,
    CollectionsCarousel,
    WrapperCollections,
} from './styled'
import { Collection } from '@/pages/collections/atoms/collection'

export const Collections = () => {
    const { collections } = useCollections()
    useHydrate()

    return (
        <WrapperCollections>
            <Title>Collections</Title>
            <CarouselContainer>
                <CollectionsCarousel dotPosition="right">
                    {collections.length && collections[0].length
                        ? collections.map((collection, index) => (
                              <Collection key={index} collection={collection} />
                          ))
                        : null}
                </CollectionsCarousel>
            </CarouselContainer>
        </WrapperCollections>
    )
}
