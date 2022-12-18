import { useSidebar } from './hooks'
import { WrapperSidebar } from './styled'
import { Menu } from '../menu'

export const Sidebar = () => {
    const { open, toggle, variants } = useSidebar()

    return (
        <WrapperSidebar
            layout
            animate={open ? 'open' : 'close'}
            onClick={toggle}
            variants={variants}
        >
            <Menu open={open} />
        </WrapperSidebar>
    )
}
