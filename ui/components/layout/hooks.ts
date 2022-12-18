import { useTypedSelector } from '@/hooks/useTypedSelector'

const variants = {
    open: { gridTemplateColumns: '100px 1fr' },
    close: { gridTemplateColumns: '50px 1fr' },
}

export const useLayout = () => {
    const open = useTypedSelector((state) => state.app.isOpenSidebar)

    return {
        open,
        variants,
    }
}
