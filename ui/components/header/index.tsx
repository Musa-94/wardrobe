import { useHeader } from './hooks'
import {
    HeaderLink,
    HeaderLogo,
    WrapperHeader,
    CollectionComplete,
} from './styled'

export const Header = () => {
    const { collectionComplete, onSaveCollection } = useHeader()

    return (
        <WrapperHeader>
            <HeaderLink href="/">
                <HeaderLogo>Wardrobe</HeaderLogo>
            </HeaderLink>
            {collectionComplete ? (
                <CollectionComplete color="#00cf00" onClick={onSaveCollection}>
                    save collection
                </CollectionComplete>
            ) : null}
        </WrapperHeader>
    )
}
