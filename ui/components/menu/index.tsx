import { FC } from 'react'

import { useMenu } from './hooks'

import { FileInput, LabelFileInput, MenuItem, WrapperMenu } from './styled'

interface IMenu {
    open: boolean
}
export const Menu: FC<IMenu> = ({ open }) => {
    const { menu, onSelect, active, handleChange } = useMenu()

    return (
        <WrapperMenu>
            {menu.map((menuItem) => (
                <MenuItem
                    key={menuItem.name}
                    active={menuItem.name === active}
                    onClick={(event) => onSelect(event, menuItem.name)}
                >
                    <LabelFileInput>
                        <FileInput type="file" onChange={handleChange} />
                        {open ? menuItem.label : menuItem.label[0]}
                    </LabelFileInput>
                </MenuItem>
            ))}
        </WrapperMenu>
    )
}
