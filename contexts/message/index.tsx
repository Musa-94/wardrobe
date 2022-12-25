import { createContext, ReactNode, useContext } from 'react'
import { message } from 'antd'
import { ArgsProps } from 'antd/es/message/interface'

interface IMessageProviderValue {
    onMessage: (args: ArgsProps) => void
}

const defaultValue: IMessageProviderValue = {
    onMessage: async (_: ArgsProps) => {},
}

const MessageContext = createContext(defaultValue)

interface IMessageProvider {
    children: ReactNode
}

export const MessageProvider = ({ children }: IMessageProvider) => {
    const [messageApi, contextHolder] = message.useMessage()

    const onMessage = async (arg: ArgsProps): Promise<void> => {
        await messageApi.open({
            ...arg,
        })
    }

    const providerValue: IMessageProviderValue = {
        onMessage,
    }

    return (
        <MessageContext.Provider value={providerValue}>
            {children}
            {contextHolder}
        </MessageContext.Provider>
    )
}

export const useMessageContext = () => useContext(MessageContext)
