import styled from 'styled-components'
import { Icon } from '@/components/icon'

export const CollectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Stub = styled.div`
    width: 135px;
    height: 135px;
`

export const DeleteCollection = styled(Icon)`
    display: flex;
    justify-content: flex-end;
    margin-right: 20%;
`
