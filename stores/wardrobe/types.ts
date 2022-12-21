export type WardrobeType = 'top' | 'tors' | 'middle' | 'footer' | 'temps'

export interface SetWardrobeContent {
    wardrobeType: WardrobeType
    image: string
    name: string
    id: number
}

export interface IWardrobeContent {
    image: string
    name: string
    id: number
}
