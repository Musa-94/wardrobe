import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  *, html, body {
    margin: 0;
    right: 0;
    box-sizing: border-box;
  }
  
  body {
    overflow: hidden;
    width: 100%;
    height: 100%;
    font-family: "Roboto Light";
    font-weight: bold;
    font-style: italic;
  }
  
  @font-face {
    font-family: 'Times New Roman';
  }
`

export const WrapperLayout = styled.main`
    height: 100vh;
`

export const LayoutContent = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: 1fr;
    background-color: ${({ theme }) => theme.common.backgroundLayout};
`
