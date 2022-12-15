import { useState } from 'react'

export const useSidebar = () => {
    const [open, setOpen] = useState<boolean>(false)

    const toggle = () => {
        setOpen((prevState) => !prevState)
    }

    return {
        open,
        toggle,
    }
}
