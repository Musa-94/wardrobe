import styled from 'styled-components'
import { Button } from '@/components/button'
import { Switch } from 'antd'

export const WrapperSettings = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 70px);
    background: ${({ theme }) => theme.common.backgroundNav};
    height: calc(100vh - 100px);
`

export const TitlePage = styled.div`
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.common.colorFontsLogo};
`

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
    justify-content: center;
    column-gap: 10px;
    padding: 0 10px;
`
export const TextButtonFunction = styled.span`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    color: ${({ theme }) => theme.common.colorFonts};
`
export const ClearLocalStorageButton = styled(Button)`
    color: ${({ theme }) => theme.common.colorFonts};
`
export const ToggleTheme = styled(Switch)`
    color: ${({ theme }) => theme.common.colorFonts};
    width: 20%;
`
