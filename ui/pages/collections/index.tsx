import { useCollections } from './hooks'
import { WrapperCollections } from './styled'

export const Collections = () => {
    const {} = useCollections()

    return <WrapperCollections>Collections</WrapperCollections>
}
