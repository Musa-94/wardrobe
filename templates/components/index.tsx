import { useComponent } from './hooks'
import { WrapperComponent } from './styled'

export const Component = () => {
    const {} = useComponent()

    return <WrapperComponent></WrapperComponent>
}
