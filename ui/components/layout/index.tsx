import { useLayout } from './hooks'
import { GlobalStyled, LayoutContent, WrapperLayout } from './styled'
import { Header } from '../header'
import { FC, ReactNode } from 'react'
import { BottomNavigation } from '@/components/bottom-navigation'
import { Modals } from '@/components/modals/modals'

interface ILayout {
    children?: ReactNode
}

export const Layout: FC<ILayout> = ({ children }) => {
    const { variants, open } = useLayout()

    return (
        <WrapperLayout>
            <Header />
            <LayoutContent>
                {/*<Sidebar />*/}
                {children}
                <BottomNavigation />
            </LayoutContent>
            <GlobalStyled />
            <Modals />
        </WrapperLayout>
    )
}
