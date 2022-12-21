import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { StarFill } from 'antd-mobile-icons'

export const WrapperBottomNavigation = styled.nav`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: ${({ theme }) => theme.common.backgroundNav};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
`

export const AddDress = styled(motion.div)`
    width: 50px;
    height: 50px;
    border-radius: 20px;
    border: 5px solid white;
    transform: translateX(-50%) rotate(45deg);
    background: ${({ theme }) => theme.navigation.backgroundAdd};
`
export const AddButtonPlusContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border: 10px solid transparent;
    justify-content: center;
    align-items: center;
    position: relative;
`
const plus = css`
    height: 2px;
    width: 100%;
    background: white;
    border-radius: 10px;
    position: absolute;
`
export const PlusHorizonteLine = styled.div`
    ${plus};
    transform: rotate(45deg);
`
export const PlusVerticalLine = styled.div`
    ${plus};
    transform: rotate(-45deg);
`

export const LabelHiddenInput = styled.label`
    position: absolute;
    bottom: 20px;
    left: 50%;
`
export const HiddenInputFile = styled.input`
    display: none;
    visibility: hidden;
`

export const SavedCollections = styled(StarFill)`
    scale: 1;

    path {
        fill: #ff5454 !important;
    }

    &:hover {
        scale: 1.2;
    }

    &:active {
        scale: 0.95;
    }

    transition: scale 0.3s ease-out;
`
