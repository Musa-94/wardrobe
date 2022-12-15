import { useMain } from './hooks'
import { Garments, Layout } from '../../components'

export const Main = () => {
    const {} = useMain()

    return (
        <Layout>
            <Garments />
        </Layout>
    )
}
