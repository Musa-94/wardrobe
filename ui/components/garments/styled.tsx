import styled from 'styled-components'
import Image from 'next/image'

import { CloseOutline } from 'antd-mobile-icons'
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
    margin: 15px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    border: 1px solid grey;
    justify-content: space-between;
`

export const GarmentsImage = styled(Image)`
    object-fit: cover;
    size: auto;
`

export const GarmentsClose = styled(CloseOutline)`
    position: absolute;
    top: -20px;
    right: -20px;
    &:hover {
        color: white;
    }
`
