import { dark } from './dark'
import { light } from './light'

export enum Themes {
    DARK = 'dark',
    LIGHT = 'light',
}

export type ThemeKeys = keyof typeof dark | keyof typeof light
export type ThemeTypes = typeof dark | typeof light
