import styled from 'styled-components'
import { Button } from 'antd'

export const ButtonAntd = styled(Button)<{ color?: string }>`
    ${({ color }) => color && `background-color: ${color}`};
`
