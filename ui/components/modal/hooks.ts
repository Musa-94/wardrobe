import { useTheme } from '../../../themes/hooks'

export const useModal = () => {
    const { theme } = useTheme()

    const bodyStyle = {
        color: theme.common.colorFonts,
        backgroundColor: theme.common.backgroundNav.slice(0, 7),
    }

    return { bodyStyle }
}
