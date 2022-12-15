import { IWardrobeState } from './index'

export type WardrobeType = keyof IWardrobeState

export interface SetWardrobeContent {
    wardrobeType: WardrobeType
    image: string
    name: string
}

export interface IWardrobeContent {
    image: string
    name: string
}
