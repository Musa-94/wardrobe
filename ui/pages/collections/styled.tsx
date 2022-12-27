import styled from 'styled-components'
import { Carousel } from 'antd'

export const WrapperCollections = styled.div`
    background: ${({ theme }) => theme.common.backgroundNav};
    height: calc(100vh - 100px);
    display: grid;
    grid-template-rows: 25px 1fr;
`

export const Title = styled.span`
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: ${({ theme }) => theme.common.colorFonts};
`

export const CollectionsCarousel = styled(Carousel)`
    width: calc(100vw - 20px) !important;
    height: calc(100vh - 160px) !important;
`
export const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
