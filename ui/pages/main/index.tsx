import { useMain } from './hooks'
import { Layout } from '../../components'

import { GarmentsBlock, GarmentsImage, WrapperMain } from './styled'

export const Main = () => {
    const { wardrobeList } = useMain()

    return (
        <Layout>
            <WrapperMain>
                {wardrobeList.map((item) =>
                    item.data.image ? (
                        <GarmentsBlock key={item.position}>
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
