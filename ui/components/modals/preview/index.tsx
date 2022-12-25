import { useHandleSelect, usePreview } from '@/components/modals/preview/hooks'
import { Modal } from '@/components/modals/modal'
import Image from 'next/image'
import {
    PositionContainer,
    PreviewContent,
    SelectAntd,
} from '@/components/modals/preview/styled'

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
