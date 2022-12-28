import { memo } from 'react'
import Image from 'next/image'
import { IWardrobeContent } from '@/stores/wardrobe/types'

import { CollectionsContainer, Stub, DeleteCollection } from './styled'

interface ICollection {
    collection: IWardrobeContent[]
    onDelete: (id: number) => void
}

export const Collection = memo(({ collection, onDelete }: ICollection) => {
    return (
        <>
            <DeleteCollection
                name="Delete"
                size={24}
                onClick={() => onDelete(collection[0].id)}
                color="#ff5454"
            />
            <CollectionsContainer>
                {collection.map((item, index) =>
                    item?.image ? (
                        <Image
                            key={item.id}
                            src={item?.image}
                            alt={item?.name}
                            width={125}
                            height={125}
                        />
                    ) : (
                        <Stub key={index} />
                    )
                )}
            </CollectionsContainer>
        </>
    )
})
