import { useSettings } from './hooks'
import {
    ButtonContainer,
    ClearLocalStorageButton,
    TextButtonFunction,
    TitlePage,
    WrapperSettings,
} from './styled'

export const Settings = () => {
    const { onCleanCollections } = useSettings()

    return (
        <WrapperSettings>
            <TitlePage>Settings</TitlePage>
            <ButtonContainer>
                <TextButtonFunction>Clean Collections:</TextButtonFunction>

                <ClearLocalStorageButton
                    type="primary"
                    onClick={onCleanCollections}
                >
                    delete
                </ClearLocalStorageButton>
            </ButtonContainer>
        </WrapperSettings>
    )
}
