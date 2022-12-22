import styled from 'styled-components'
import { Button } from '@/components/button'

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
    justify-content: center;
    align-items: center;
    font-size: 20px;
`
export const ClearLocalStorageButton = styled(Button)`
    color: white;
`
