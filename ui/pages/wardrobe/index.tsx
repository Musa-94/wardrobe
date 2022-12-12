import {
    WardrobeBlock,
    WardrobeTitle,
    WrapperWardrobe,
    WardrobeContainer,
} from './styled'

export const WardrobePage = () => {
    return (
        <WrapperWardrobe>
            <WardrobeTitle />
            <WardrobeContainer>
                {['top', 'tors', 'footer'].map((item) => (
                    <WardrobeBlock key={item}>{item}</WardrobeBlock>
                ))}
            </WardrobeContainer>
        </WrapperWardrobe>
    )
}
