import { useCollections } from './hooks'
import { CollectionsContainer, Title, WrapperCollections } from './styled'
import Image from 'next/image'

export const Collections = () => {
    const { collections } = useCollections()
    const index = 0

    return (
        <WrapperCollections>
            <Title>Collections</Title>
            <CollectionsContainer>
                {collections[index].length
                    ? collections[index].map((collection) =>
                          collection?.image ? (
                              <Image
                                  key={collection.id}
                                  src={collection?.image}
                                  alt={collection?.name}
                                  width={150}
                                  height={150}
                              />
                          ) : null
                      )
                    : null}
            </CollectionsContainer>
        </WrapperCollections>
    )
}
