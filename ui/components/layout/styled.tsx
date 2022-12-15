import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    right: 0;
    box-sizing: border-box;
  }
`

export const WrapperLayout = styled.main`
    height: 100vh;
`

export const LayoutContent = styled.div`
    height: calc(100vh - 50px);
    display: grid;
    grid-template-columns: 100px 1fr;
`
