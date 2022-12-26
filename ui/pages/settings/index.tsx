import { useSettings } from './hooks'
import {
    TitlePage,
    ButtonContainer,
    WrapperSettings,
    TextButtonFunction,
    ClearLocalStorageButton,
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
