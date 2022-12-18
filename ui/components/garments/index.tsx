import { useGarments } from './hooks'
import { GarmentsBlock, GarmentsImage, WrapperGarments } from './styled'

export const Garments = () => {
    const { variants, wardrobeList } = useGarments()

    return (
        <WrapperGarments>
            {wardrobeList.map((item) =>
                item.data.image ? (
                    <GarmentsBlock
                        key={item.position}
                        initial={variants.init}
                        animate={variants.animate}
                        transition={variants.transition}
                    >
                        <GarmentsImage
                            src={item.data.image}
                            alt={item.data.name}
                            fill
                            sizes="100vw"
                        />
                    </GarmentsBlock>
                ) : null
            )}
        </WrapperGarments>
    )
}
