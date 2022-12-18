import { appActions } from '@/stores/app'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '@/hooks/useTypedSelector'

const variants = {
    open: { width: '100px' },
    close: { width: '50px' },
}

export const useSidebar = () => {
    const dispatch = useDispatch()
    const open = useTypedSelector((state) => state.app.isOpenSidebar)

    const toggle = () => {
        dispatch(appActions.toggleSidebar())
    }

    return {
        open,
        toggle,
        variants,
    }
}
