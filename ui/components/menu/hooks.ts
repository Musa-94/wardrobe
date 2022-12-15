import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { appActions } from '@/stores/app'
import { useTypedSelector } from '../../../hooks'
import { config } from '@/config/index'
import { wardrobeActions } from '@/stores/wardrobe'
import { SetWardrobeContent, WardrobeType } from '@/stores/wardrobe/types'

export const useMenu = () => {
    const dispatch = useDispatch()

    const { menu } = config.sidebar

    const activeMenu = useTypedSelector((state) => state.app.activeMenu)

    const onSelect = (
        event: React.MouseEvent<HTMLLIElement>,
        selectedItem: string
    ) => {
        event.stopPropagation()
        dispatch(appActions.setActiveMenu(selectedItem))
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()

        if (!event.target.files) return

        reader.readAsDataURL(event.target.files[0])

        reader.onload = (result) => {
            dispatch(
                wardrobeActions.setWardrobeData(<SetWardrobeContent>{
                    wardrobeType: activeMenu as WardrobeType,
                    image: result.target?.result || '',
                    name: '',
                })
            )
        }
    }

    return {
        menu,
        active: activeMenu,
        onSelect,
        handleChange,
    }
}
