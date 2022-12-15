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
                        initial="init"
                        variants={variants}
                        whileInView="done"
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
