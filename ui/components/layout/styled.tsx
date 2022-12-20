import styled, { createGlobalStyle } from 'styled-components'
import { motion } from 'framer-motion'

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

export const LayoutContent = styled(motion.div)`
    height: 100%;
    background-color: ${({ theme }) => theme.common.backgroundLayout};
`
