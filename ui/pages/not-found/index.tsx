import { useNotFound } from './hooks'
import { WrapperNotFound } from './styled'
import { Result } from 'antd'
import { Button } from '@/components/button'

interface INotFound {
    title?: string
    status?: '403' | '404' | '500' | 'warning' | 'success' | 'error' | 'info'
    subTitle?: string
}

export const NotFound = ({ status, title, subTitle }: INotFound) => {
    const { goHome } = useNotFound()

    return (
        <WrapperNotFound>
            <Result
                status={status}
                title={title ?? status}
                subTitle={subTitle}
                extra={
                    <Button onClick={goHome} type="primary">
                        Back Home
                    </Button>
                }
            />
        </WrapperNotFound>
    )
}
