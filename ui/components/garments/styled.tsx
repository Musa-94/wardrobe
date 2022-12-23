import styled from 'styled-components'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { Icon } from '@/components/icon'

export const WrapperGarments = styled.div`
    height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.common.backgroundNav};
    overflow-y: auto;
`

export const GarmentsBlock = styled(motion.div)`
    width: 150px;
    height: 150px;
    margin: 15px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`

export const GarmentsImage = styled(Image)`
    object-fit: cover;
    border-radius: 20px;
`
export const DeleteImage = styled(Icon)`
    position: absolute;
    top: 0;
    right: -30px;
`
