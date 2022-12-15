import { useLayout } from './hooks'
import { GlobalStyled, LayoutContent, WrapperLayout } from './styled'
import { Header } from '../header'
import { FC, ReactNode } from 'react'
import { Sidebar } from '../sidebar'

interface ILayout {
    children?: ReactNode
}

export const Layout: FC<ILayout> = ({ children }) => {
    const {} = useLayout()

    return (
        <WrapperLayout>
            <Header />
            <LayoutContent>
                <Sidebar />
                {children}
            </LayoutContent>
            <GlobalStyled />
        </WrapperLayout>
    )
}
