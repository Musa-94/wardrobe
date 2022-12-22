import styled from 'styled-components'
import { Button } from '@/components/button'
import Link from 'next/link'

export const WrapperHeader = styled.header`
    height: 50px;
    background: ${({ theme }) => theme.common.backgroundNav};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid black;
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
`

export const HeaderLink = styled(Link)`
    text-decoration: none;
`
export const HeaderLogo = styled.span`
    color: ${({ theme }) => theme.common.colorFontsLogo};
    font-size: 24px;
    text-transform: capitalize;
`
export const CollectionComplete = styled(Button)`
    text-transform: capitalize;
    color: white !important;
    border: none !important;
`
