import styled from 'styled-components'

export const WrapperMenu = styled.div`
    width: 100%;
`

export const MenuItem = styled.li<{ active: boolean }>`
    list-style: none;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;

    color: ${({ active, theme }) =>
        active ? theme.common.colorFontsActive : theme.common.colorFonts};

    &:hover {
        color: ${({ theme }) => theme.common.colorFontsActive};
    }
`
export const LabelFileInput = styled.label`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FileInput = styled.input`
    display: none;
`
