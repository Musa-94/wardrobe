import { ReactNode } from 'react'
import { ButtonProps } from 'antd'
import { ButtonAntd } from '@/components/button/styled'

interface IButton extends ButtonProps {
    children: ReactNode | string
    color?: string
}

export const Button = (props: IButton) => {
    const { children } = props

    return <ButtonAntd {...props}>{children}</ButtonAntd>
}
