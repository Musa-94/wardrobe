import { useBottomNavigation } from './hooks'
import {
    NavLink,
    AddDress,
    HiddenInputFile,
    SavedCollections,
    LabelHiddenInput,
    PlusVerticalLine,
    PlusHorizonteLine,
    AddButtonPlusContainer,
    WrapperBottomNavigation,
    Settings,
    LeftBlockLinks,
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
            <LeftBlockLinks>
                <NavLink href="/settings" aria-label="settings web site">
                    <Settings fontSize={40} />
                </NavLink>
                <NavLink
                    href="/collections"
                    aria-label="show saved collections"
                >
                    <SavedCollections fontSize={36} />
                </NavLink>
            </LeftBlockLinks>

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
