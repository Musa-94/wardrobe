import { useHeader } from './hooks'
import { WrapperHeader } from './styled'
import Link from 'next/link'

export const Header = () => {
    const {} = useHeader()

    return (
        <WrapperHeader>
            <Link href="/wardrobe">Wardrobe</Link>
        </WrapperHeader>
    )
}
