import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Icon } from '@/components/icon'

export const WardrobeBlock = styled(motion.div)`
    width: 125px;
    height: 125px;
    margin-top: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`

export const WardrobeImage = styled(Image)`
    object-fit: cover;
    border-radius: 20px;
`
export const DeleteImage = styled(Icon)`
    position: absolute;
    top: 0;
    right: -30px;
`
