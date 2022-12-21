import { useBottomNavigation } from './hooks'
import {
    AddDress,
    HiddenInputFile,
    LabelHiddenInput,
    PlusVerticalLine,
    PlusHorizonteLine,
    AddButtonPlusContainer,
    WrapperBottomNavigation,
    SavedCollections,
} from './styled'

const variants = {
    init: { scale: 1, rotate: 45, translateX: '-50%' },
    hover: { scale: 1.2 },
    tap: { scale: 0.9 },
}

export const BottomNavigation = () => {
    const { onChange } = useBottomNavigation()

    return (
        <WrapperBottomNavigation>
            <SavedCollections fontSize={36} />
            <LabelHiddenInput htmlFor="fileLoad">
                <HiddenInputFile
                    id="fileLoad"
                    type="file"
                    onChange={onChange}
                />
                <AddDress
                    variants={variants}
                    initial="init"
                    whileHover="hover"
                    whileTap="tap"
                >
                    <AddButtonPlusContainer>
                        <PlusHorizonteLine />
                        <PlusVerticalLine />
                    </AddButtonPlusContainer>
                </AddDress>
            </LabelHiddenInput>
        </WrapperBottomNavigation>
    )
}
