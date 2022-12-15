import { useMain } from './hooks'
import { Layout } from '../../components'

import { GarmentsBlock, GarmentsImage, WrapperMain } from './styled'

export const Main = () => {
    const { wardrobeList } = useMain()
    const variants = {
        init: { scale: 1.5 },
        done: { scale: 1 },
    }

    return (
        <Layout>
            <WrapperMain>
                {wardrobeList.map((item) =>
                    item.data.image ? (
                        <GarmentsBlock
                            variants={variants}
                            key={item.position}
                            initial="init"
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
            </WrapperMain>
        </Layout>
    )
}
