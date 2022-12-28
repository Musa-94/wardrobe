import styled from 'styled-components'

export const WrapperWardrobe = styled.div`
    height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.common.backgroundNav};
    overflow-y: auto;
`
