import { useHeader } from './hooks'
import { WrapperHeader } from './styled'

export const Header = () => {
    const {} = useHeader()

    return <WrapperHeader>Wardrobe</WrapperHeader>
}
