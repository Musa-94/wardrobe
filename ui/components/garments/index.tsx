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
                {wardrobeList.map((item) =>
                    item.data?.image ? (
                        <GarmentsBlock
                            key={item.position}
                            initial={variants.init}
                            animate={variants.animate}
                            transition={variants.transition}
                            exit={variants.exit}
                        >
                            <GarmentsImage
                                src={item.data.image}
                                alt={item.data.name}
                                fill
                                sizes="100vw"
                            />
                            <GarmentsClose
                                onClick={() => onDelete(item.position)}
                            />
                        </GarmentsBlock>
                    ) : null
                )}
            </AnimatePresence>
        </WrapperGarments>
    )
}
