import styled from 'styled-components'
import { Select } from 'antd'

export const PreviewContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.common.backgroundNav};
`
export const PositionContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.common.colorFonts};
    background-color: ${({ theme }) => theme.common.backgroundNav};
`
export const SelectAntd = styled(Select)`
    width: 120px;
    color: ${({ theme }) => theme.common.colorFonts};
    background-color: ${({ theme }) => theme.common.backgroundNav};
`
export const RequiredSymbol = styled.strong`
    color: red;
    margin-right: 5px;
`
