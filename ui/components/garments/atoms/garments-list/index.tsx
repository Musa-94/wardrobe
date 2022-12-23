import { memo } from 'react'
import { IWardrobeContent, WardrobeType } from '@/stores/wardrobe/types'
import { useGarmentsList } from './hooks'
import {
    DeleteImage,
    GarmentsBlock,
    GarmentsImage,
} from '@/components/garments/styled'

export interface IWardrobeWithPosition {
    position: WardrobeType
    data: IWardrobeContent[]
}

interface IGarmentsByPosition {
    list: IWardrobeWithPosition
}

export const GarmentsByPosition = memo(({ list }: IGarmentsByPosition) => {
    const { variants, onDelete } = useGarmentsList()

    return (
        <>
            {list.data.map((item) =>
                item.image ? (
                    <GarmentsBlock
                        key={item.id}
                        initial={variants.init}
                        animate={variants.animate}
                        transition={variants.transition}
                        exit={variants.exit}
                    >
                        <GarmentsImage
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
                    </GarmentsBlock>
                ) : null
            )}
        </>
    )
})
