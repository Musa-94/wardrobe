import { WrapperEmpty } from './styled'
import { Empty as EmptyAntd } from 'antd'

interface IEmpty {
    description?: string
}

export const Empty = ({ description }: IEmpty) => {
    return (
        <WrapperEmpty>
            <EmptyAntd description={description} />
        </WrapperEmpty>
    )
}
