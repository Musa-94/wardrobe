import { useMain } from './hooks'
import { Garments } from '../../components'

export const Main = () => {
    const {} = useMain()

    return <Garments />
}
