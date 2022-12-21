import { useGarments } from './hooks'
import {
    GarmentsBlock,
    GarmentsClose,
    GarmentsImage,
    WrapperGarments,
} from './styled'
import { AnimatePresence } from 'framer-motion'

export const Garments = () => {
    const { variants, wardrobeList, onDelete } = useGarments()

    return (
        <WrapperGarments>
            <AnimatePresence>
                {wardrobeList.map((list) =>
                    list.data.map((item) =>
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
                                <GarmentsClose
                                    onClick={() =>
                                        onDelete(list.position, item.id)
                                    }
                                />
                            </GarmentsBlock>
                        ) : null
                    )
                )}
            </AnimatePresence>
        </WrapperGarments>
    )
}
