import styled from 'styled-components'
import { Button } from '@/components/button'

export const WrapperHeader = styled.header`
    height: 50px;
    background: ${({ theme }) => theme.common.backgroundNav};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`

export const HeaderLogo = styled.span`
    color: ${({ theme }) => theme.common.colorFontsLogo};
    font-size: 24px;
`
export const CollectionComplete = styled(Button)`
    text-transform: capitalize;
    color: white !important;
    border: none !important;
`
