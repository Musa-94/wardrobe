import styled from 'styled-components'

export const WrapperEmpty = styled.div`
    height: calc(100vh - 140px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;

    & > div > div {
        height: 100% !important;
    }
`
