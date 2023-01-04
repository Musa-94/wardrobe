import styled from 'styled-components'
import { Modal } from 'antd'

export const ModalAntd = styled(Modal)<{ height?: number }>`
    color: ${({ theme }) => theme.common.colorFonts};
    background-color: ${({ theme }) => theme.common.backgroundNav};
    border-radius: 8px !important;
    ${({ height }) => height && `height: ${height}px`};

    & span > span > svg {
        fill: ${({ theme }) => theme.common.colorFonts} !important;
    }

    & > div {
        background-color: ${({ theme }) =>
            theme.common.backgroundNav} !important;
        color: ${({ theme }) => theme.common.colorFonts} !important;

        & > div {
            background-color: ${({ theme }) =>
                theme.common.backgroundNav} !important;

            & > div {
                color: ${({ theme }) => theme.common.colorFonts} !important;
            }
        }
    }
`
