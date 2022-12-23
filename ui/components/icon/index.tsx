import * as uiIcons from '../icons'
import { FC } from 'react'
import { WrapperIcon } from '@/components/icon/styled'

type TypeIcon = keyof typeof uiIcons

interface IProps {
    name: TypeIcon
    color?: string
    size: number
    className?: string
    onClick?: () => void
}

export const Icon: FC<IProps> = ({
    name,
    color = 'white',
    size,
    className = '',
    onClick,
}) => {
    const IconComponent = uiIcons[name] ? uiIcons[name] : null

    return (
        <WrapperIcon size={size} color={color} className={className}>
            {IconComponent ? (
                <IconComponent
                    onClick={onClick}
                    width={size}
                    height={size}
                    fill={color}
                />
            ) : null}
        </WrapperIcon>
    )
}
