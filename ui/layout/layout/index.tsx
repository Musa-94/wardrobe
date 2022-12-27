import { LayoutContent, WrapperLayout } from './styled'
import { Header } from '../header'
import { FC, ReactNode } from 'react'
import { BottomNavigation } from '../bottom-navigation'
import { MessageProvider } from '@/contexts/message'
import { Modals } from '../modals/modals'
import { ThemeProvider } from 'styled-components'
import { useTheme } from '../../../themes/hooks'

interface ILayout {
    children?: ReactNode
}

export const Layout: FC<ILayout> = ({ children }) => {
    const { theme } = useTheme()

    return (
        <ThemeProvider theme={theme}>
            <WrapperLayout>
                <MessageProvider>
                    <Header />
                    <LayoutContent>
                        {children}
                        <BottomNavigation />
                    </LayoutContent>
                    <Modals />
                </MessageProvider>
            </WrapperLayout>
        </ThemeProvider>
    )
}
