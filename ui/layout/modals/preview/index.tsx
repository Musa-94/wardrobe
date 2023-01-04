import { useHandleSelect, usePreview } from './hooks'
import Image from 'next/image'
import {
    PositionContainer,
    PreviewContent,
    RequiredSymbol,
    SelectAntd,
} from './styled'
import { Modal } from '@/components/modal'
import { Button } from '@/components/button'

export const Preview = () => {
    const { open, onClose, imageData } = usePreview()
    const { options, onSelect, onSave, select } = useHandleSelect(
        imageData?.image
    )

    return (
        <Modal
            width={300}
            height={450}
            open={open}
            title="Preview"
            centered
            footer={
                <div
                    style={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    }}
                >
                    <Button
                        size="middle"
                        type="primary"
                        danger
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button size="middle" type="primary" onClick={onSave}>
                        save
                    </Button>
                </div>
            }
        >
            <PreviewContent>
                {imageData?.image ? (
                    <>
                        <Image
                            key={imageData.id}
                            src={imageData.image}
                            alt={imageData.name}
                            width={200}
                            height={250}
                        />
                    </>
                ) : null}
                <SelectAntd
                    options={options}
                    defaultValue={select}
                    // @ts-ignore
                    onChange={onSelect}
                    placeholder="Select the position"
                />
            </PreviewContent>
        </Modal>
    )
}
