import styled from 'styled-components'

export const WrapperHeader = styled.header`
    height: 50px;
    background-color: ${({ theme }) => theme.common.backgroundNav};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 50px;
    color: ${({ theme }) => theme.common.colorFonts};
    font-size: 24px;
`
