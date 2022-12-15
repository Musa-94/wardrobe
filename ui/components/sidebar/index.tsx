import { useSidebar } from './hooks'
import { WrapperSidebar } from './styled'
import { Menu } from '../menu'

export const Sidebar = () => {
    const { open, toggle } = useSidebar()

    return (
        <WrapperSidebar open={open} onClick={toggle}>
            <Menu open={open} />
        </WrapperSidebar>
    )
}
