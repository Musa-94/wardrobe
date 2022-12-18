import styled from 'styled-components'
import { motion } from 'framer-motion'

export const WrapperSidebar = styled(motion.nav)`
    height: 100%;
    background: ${({ theme }) => theme.common.backgroundNav};
`
