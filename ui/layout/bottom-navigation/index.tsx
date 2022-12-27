import { useBottomNavigation } from './hooks'
import {
    NavLink,
    AddDress,
    HiddenInputFile,
    LabelHiddenInput,
    PlusVerticalLine,
    PlusHorizonteLine,
    AddButtonPlusContainer,
    WrapperBottomNavigation,
    LeftBlockLinks,
    RightBlockLinks,
} from './styled'
import { Icon } from '@/components/icon'

const variants = {
    init: { scale: 1, rotate: 45, translateX: '-50%' },
    hover: { scale: 1.2 },
    tap: { scale: 0.9 },
}

export const BottomNavigation = () => {
    const { onChange, activePage, normalColor } = useBottomNavigation()

    return (
        <WrapperBottomNavigation>
            <LeftBlockLinks>
                <NavLink href="/settings" aria-label="settings web site">
                    <Icon
                        name="Settings"
                        size={30}
                        color={
                            activePage === 'settings' ? '#ff5454' : normalColor
                        }
                    />
                </NavLink>
                <NavLink
                    href="/collections"
                    aria-label="show saved collections"
                >
                    <Icon
                        name="Dress"
                        size={30}
                        color={
                            activePage === 'collections'
                                ? '#ff5454'
                                : normalColor
                        }
                    />
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

            <RightBlockLinks>
                <NavLink href="/" aria-label="home">
                    <Icon
                        name="Wardrobe"
                        size={30}
                        color={activePage === '/' ? '#ff5454' : normalColor}
                    />
                </NavLink>
            </RightBlockLinks>
        </WrapperBottomNavigation>
    )
}
