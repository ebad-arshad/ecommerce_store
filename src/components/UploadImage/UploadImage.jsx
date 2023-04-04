import { Group, Text, rem } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import Button from '../../components/Button/Button'
import { useState } from 'react';

const BaseDemo = ({ uploadCurrentImage }) => {

    const [img, set_img] = useState([])
    const getImg = () => uploadCurrentImage(img)

    return (
        <>
            <Dropzone
                onDrop={(files) => set_img(files)}
                onReject={(files) => console.log('rejected files', files)}
                maxSize={3 * 1024 ** 2}
                accept={IMAGE_MIME_TYPE}
                className='my-10'
            >
                <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
                    <Dropzone.Accept>
                        <IconUpload
                            size="3.2rem"
                            stroke={1.5}
                        />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                        <IconX
                            size="3.2rem"
                            stroke={1.5}
                        />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                        <IconPhoto size="3.2rem" stroke={1.5} />
                    </Dropzone.Idle>

                    <div>
                        <Text size="xl" inline>
                            Drag images here or click to select files
                        </Text>
                        <Text size="sm" color="dimmed" inline mt={7}>
                            Attach as many files as you like, each file should not exceed 5mb
                        </Text>
                    </div>
                </Group>
            </Dropzone>
            <div className="flex h-16 gap-4">
                <Button className='flex-1' text='Save image' onClick={getImg} color='text-[#fff]' bg_color='bg-[#f50963]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#03041c]' />
                <Button className='flex-[0.4]' text='Check image' color='text-[#fff]' bg_color='bg-[#03041c]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#f50963]' />
            </div>
        </>
    );
}

export default BaseDemo;