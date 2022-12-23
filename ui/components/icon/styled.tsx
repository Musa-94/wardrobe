import styled from 'styled-components'

type WrapperIcon = {
    color?: string
    size?: number
}

export const WrapperIcon = styled.div<WrapperIcon>`
    & > svg {
        width: ${({ size }) => size || 24}px;
        height: ${({ size }) => size || 24}px;

        & > path {
            fill: ${({ color }) => color || '#000000'};
        }
    }
`
