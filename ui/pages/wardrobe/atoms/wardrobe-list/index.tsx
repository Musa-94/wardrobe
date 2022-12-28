import { memo } from 'react'
import { IWardrobeContent, WardrobeType } from '@/stores/wardrobe/types'
import { useWardrobeList } from './hooks'
import { DeleteImage, WardrobeBlock, WardrobeImage } from './styled'

export interface IWardrobeWithPosition {
    position: WardrobeType
    data: IWardrobeContent[]
}

interface IWardrobeByPosition {
    list: IWardrobeWithPosition
}

export const WardrobeList = memo(({ list }: IWardrobeByPosition) => {
    const { variants, onDelete } = useWardrobeList()

    return (
        <>
            {list.data.map((item) =>
                item.image ? (
                    <WardrobeBlock
                        key={item.id}
                        initial={variants.init}
                        animate={variants.animate}
                        transition={variants.transition}
                        exit={variants.exit}
                    >
                        <WardrobeImage
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="100vw"
                        />
                        <DeleteImage
                            size={24}
                            color="#ff5454"
                            name="Delete"
                            onClick={() => {
                                onDelete(list.position, item.id)
                            }}
                        />
                    </WardrobeBlock>
                ) : null
            )}
        </>
    )
})
