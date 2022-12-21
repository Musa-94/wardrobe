import { useHeader } from './hooks'
import { CollectionComplete, HeaderLogo, WrapperHeader } from './styled'

export const Header = () => {
    const { collectionComplete, onSaveCollection } = useHeader()

    return (
        <WrapperHeader>
            <HeaderLogo>Wardrobe</HeaderLogo>
            {collectionComplete ? (
                <CollectionComplete color="#00cf00" onClick={onSaveCollection}>
                    save collection
                </CollectionComplete>
            ) : null}
        </WrapperHeader>
    )
}
