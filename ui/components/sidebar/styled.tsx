import styled from 'styled-components'

export const WrapperSidebar = styled.nav<{ open: boolean }>`
    height: 100%;
    width: ${({ open }) => (open ? 100 : 50)}px;
    background-color: blueviolet;
    transition: width 0.3s ease-out;
`
