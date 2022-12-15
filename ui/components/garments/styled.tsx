import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const WrapperGarments = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const GarmentsBlock = styled(motion.div)`
    width: 150px;
    height: 150px;
    margin: 10px 0;
    position: relative;
`

export const GarmentsImage = styled(Image)`
    object-fit: contain;
`
