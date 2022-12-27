import { light } from './light'
import { dark } from './dark'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Themes, ThemeTypes } from './types'

export const useTheme = () => {
    const mode: Themes = useTypedSelector((state) => state.app.theme)

    const theme: ThemeTypes = mode === Themes.DARK ? dark : light

    return {
        theme,
    }
}
