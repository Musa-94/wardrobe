import { useBottomNavigation } from './hooks'
import {
    AddDress,
    PlusVerticalLine,
    PlusHorizonteLine,
    AddButtonPlusContainer,
    WrapperBottomNavigation,
    HiddenInputFile,
    LabelHiddenInput,
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
            <LabelHiddenInput
                htmlFor="fileLoad"
                onClick={() => {
                    console.log('CLICK')
                }}
            >
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
