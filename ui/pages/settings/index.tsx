import { useSettings } from './hooks'
import {
    TitlePage,
    ButtonContainer,
    WrapperSettings,
    TextButtonFunction,
    ClearLocalStorageButton,
    ToggleTheme,
} from './styled'

export const Settings = () => {
    const { onCleanCollections, isChecked, toggleTheme } = useSettings()

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
            <ButtonContainer>
                <TextButtonFunction>Dark Theme:</TextButtonFunction>

                <ToggleTheme checked={isChecked} onChange={toggleTheme} />
            </ButtonContainer>
        </WrapperSettings>
    )
}
