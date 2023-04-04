import { Paper, Text, Title, TextInput, Grid, Select, NumberInput, Textarea, Group, rem } from '@mantine/core'
import { useState } from 'react'
import Button from '../../components/Button/Button'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react'
import { useForm } from '@mantine/form';
import Alert_Modal from '../../components/Alert_Modal/Alert_Modal'
import { RxCross2 } from 'react-icons/rx'
import { addDoc, collection } from 'firebase/firestore'
import { upload } from '../../utils/uploadImage'
import { db } from '../../firebase/firebase'
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react'

const inputStyle = {
  input: {
    '&:focus': { borderColor: '#f50963' }
  }
}

const Upload_Image = ({ set_img }) => {
  return (
    <Dropzone
      onDrop={(files) => set_img(files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
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
  )
}

const Update_Products = ({ product_ref }) => {

  const [show_modal, set_show_modal] = useState(false)
  const [img, set_img] = useState([])
  const formRef = useRef(null)

  const form = useForm({
    initialValues: { product_name: '', price: 0, discounted_price: 0, sale: null, description: '' },
    validate: {
      product_name: (value) => value.length < 10 ? 'Name is very short' : null,
      price: (value) => value > 0 ? null : 'Price is required',
      description: (value) => value.length < 20 ? 'Description is very short' : null,
    },
  });

  const uploadCurrentImage = async (e) => {
    try {
      const { product_name, price, discounted_price, sale, description } = e
      let discount = '';

      if (!img || img.length < 1) return set_show_modal(true)

      if (discounted_price) {
        discount = Math.floor(((price - discounted_price) / price) * 100) + '%';
      }
      let unique_id = uuidv4();

      const imgURL = await upload(img[0], `${product_ref}/${unique_id}.png`);
      const docRef = await addDoc(collection(db, product_ref), {
        name: product_name,
        price,
        discounted_price,
        discount,
        on_sale: sale,
        description,
        img: imgURL,
        img_related: [imgURL, imgURL, imgURL, imgURL],
      });
      formRef.current.reset()
      set_img([])
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {show_modal && <Alert_Modal set_show_modal={set_show_modal} placement='top' message='Error' desc='Image is incorrect.' icon={<RxCross2 />} />}
      <Paper withBorder shadow="xs" p="xl" radius={'sm'} className='select-none'>
        <form ref={formRef} onReset={form.onReset} onSubmit={form.onSubmit(uploadCurrentImage)}>
          <Title pb={10} align='center'>Add {product_ref} Products</Title>
          <Grid>
            <Grid.Col span={6}>
              <TextInput
                placeholder='Product Name'
                label="Product Name" styles={inputStyle}
                {...form.getInputProps('product_name')}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <NumberInput
                label="Price"
                placeholder='0'
                styles={inputStyle}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                min={0}
                formatter={(value) =>
                  !Number.isNaN(parseFloat(value))
                    ? `${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                    : ''
                }
                {...form.getInputProps('price')}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <NumberInput
                label="Discount Price"
                placeholder='0'
                styles={inputStyle}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                min={0}
                formatter={(value) =>
                  !Number.isNaN(parseFloat(value))
                    ? `${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                    : ''
                }
                {...form.getInputProps('discounted_price')}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Select
                label="On Sale"
                styles={inputStyle}
                placeholder="Yes / No"
                data={[
                  { value: true, label: 'Yes' },
                  { value: false, label: 'No' },
                ]}
                {...form.getInputProps('sale')}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Textarea
                placeholder="Product Description"
                label="Product Description"
                autosize
                minRows={4}
                {...form.getInputProps('description')}
                withAsterisk
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <p className='text-sm m-0'>Upload Product Image</p>
              <Upload_Image set_img={set_img} />
            </Grid.Col>
            <Grid.Col ml='auto' span={6}>
              <button type='submit' className='w-full'>
                <Button className='w-1/2 ml-auto' text='Upload Product' color='text-[#fff]' bg_color='bg-[#f50963]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#03041c]' />
              </button>
            </Grid.Col>
          </Grid>
        </form>
      </Paper>
    </>
  )
}

export default Update_Products