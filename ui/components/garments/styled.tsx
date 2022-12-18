import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const WrapperGarments = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
`

export const GarmentsBlock = styled(motion.div)`
    width: 150px;
    height: 150px;
    margin: 5px 0;
    position: relative;
`

export const GarmentsImage = styled(Image)`
    object-fit: contain;
    position: center;
    size: auto;
`
