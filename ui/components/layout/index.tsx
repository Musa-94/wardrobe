import { GlobalStyled, LayoutContent, WrapperLayout } from './styled'
import { Header } from '../header'
import { FC, ReactNode } from 'react'
import { BottomNavigation } from '@/components/bottom-navigation'
import { Modals } from '@/components/modals/modals'
import { MessageProvider } from '@/contexts/message'

interface ILayout {
    children?: ReactNode
}

export const Layout: FC<ILayout> = ({ children }) => {
    return (
        <WrapperLayout>
            <MessageProvider>
                <Header />
                <LayoutContent>
                    {children}
                    <BottomNavigation />
                </LayoutContent>
                <GlobalStyled />
                <Modals />
            </MessageProvider>
        </WrapperLayout>
    )
}
