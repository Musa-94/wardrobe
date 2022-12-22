import { IWardrobeContent } from '@/stores/wardrobe/types'
import Image from 'next/image'
import { CollectionsContainer } from './styled'

interface ICollection {
    collection: IWardrobeContent[]
}

export const Collection = ({ collection }: ICollection) => {
    return (
        <CollectionsContainer>
            {collection.map((item) =>
                item?.image ? (
                    <Image
                        key={item.id}
                        src={item?.image}
                        alt={item?.name}
                        width={150}
                        height={150}
                    />
                ) : null
            )}
        </CollectionsContainer>
    )
}
