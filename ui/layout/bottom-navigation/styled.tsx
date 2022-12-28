import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
    border-top: 1px solid #ff5454;
    box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
`
export const LeftBlockLinks = styled.div`
    width: 40%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 50%);
`

export const RightBlockLinks = styled.div`
    width: 40%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 50%);
`
export const Stub = styled.div`
    height: 100%;
    width: 20%;
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
    width: 0;
    height: 50px;
`
export const HiddenInputFile = styled.input`
    display: none;
    visibility: hidden;
`

const animation = css`
    &:hover {
        scale: 1.2;
    }

    &:active {
        scale: 0.95;
    }

    transition: scale 0.3s ease-out;

    scale: 1;
`

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    ${animation};
`
