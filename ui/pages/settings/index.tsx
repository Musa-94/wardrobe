import { useSettings } from './hooks'
import { WrapperSettings } from './styled'

export const Settings = () => {
    const {} = useSettings()

    return <WrapperSettings> Settings </WrapperSettings>
}
