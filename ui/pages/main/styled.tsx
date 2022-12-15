import styled from 'styled-components'
import Image from 'next/image'

export const WrapperMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const GarmentsBlock = styled.div`
    width: 100px;
    height: 100px;
    margin: 10px 0;
    position: relative;
`

export const GarmentsImage = styled(Image)`
    object-fit: contain;
`
