import styled from 'styled-components'

export const WrapperHeader = styled.header`
    height: 50px;
    background: ${({ theme }) => theme.common.backgroundNav};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    color: ${({ theme }) => theme.common.colorFontsLogo};
    font-size: 24px;
`
