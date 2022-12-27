import { useHandleSelect, usePreview } from './hooks'
import Image from 'next/image'
import { PositionContainer, PreviewContent, SelectAntd } from './styled'
import { Modal } from '@/components/modal'

export const Preview = () => {
    const { open, onClose, imageData } = usePreview()
    const { options, onSelect, onSave, select } = useHandleSelect(
        imageData?.image
    )

    return (
        <Modal
            open={open}
            title="Preview"
            okText="Save"
            centered
            onCancel={onClose}
            onConfirm={onSave}
            cancelText="Cancel"
        >
            <PreviewContent>
                {imageData?.image ? (
                    <>
                        <Image
                            key={imageData.id}
                            src={imageData.image}
                            alt={imageData.name}
                            width={150}
                            height={150}
                        />
                        <PositionContainer>
                            <span>position: </span>
                        </PositionContainer>
                    </>
                ) : null}
                <SelectAntd
                    options={options}
                    defaultValue={select}
                    // @ts-ignore
                    onChange={onSelect}
                />
            </PreviewContent>
        </Modal>
    )
}
