import styled from 'styled-components'

export const WrapperCollections = styled.main`
    padding: 10px;
    border: 10px solid white;
    border-radius: 20px;
    background: ${({ theme }) => theme.common.backgroundNav};
    height: calc(100vh - 100px);
    display: grid;
    grid-template-rows: 30px 1fr;
`

export const Title = styled.span`
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`
export const CollectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
