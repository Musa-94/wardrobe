import styled, { css } from 'styled-components'

export const WrapperModal = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
`
export const ModalContainer = styled.div`
    background: ${({ theme }) => theme.modal.backgroundContainer};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: grid;
    grid-template-rows: 50px 1fr 50px;
    border-radius: 20px 0 20px 20px;
`
export const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;

    padding: 10px;
`
export const ModalContent = styled.div`
    padding: 10px;
`
export const ModalFooter = styled.div`
    border-top: 1px solid grey;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CloseButtonContainer = styled.div`
    width: 18px;
    height: 18px;
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`
const close = css`
    position: absolute;
    height: 2px;
    width: 100%;
    border-radius: 10px;
    background: ${({ theme }) => theme.modal.close};
`
export const CloseButtonHorizontal = styled.div`
    ${close};
    transform: rotate(-45deg);
`
export const CloseButtonVertical = styled.div`
    ${close};
    transform: rotate(45deg);
`

export const ConfirmButton = styled.button`
    background: green;
    height: 100%;
    width: 70px;
`
export const CancelButton = styled.button`
    background: red;
    height: 100%;
    width: 70px;
`
