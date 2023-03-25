import { Input, Form } from 'antd';
import { useState } from 'react';
import './forgot_form.scss'
import Button from '../Button/Button'
import { HiOutlineMail } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import Alert_Modal from '../Alert_Modal/Alert_Modal'

const Forgot_Form = () => {

    const [is_active, set_is_active] = useState({ email: false })
    const [show_modal, set_show_modal] = useState(false)

    const submit = (e) => {
        console.log(e);
        set_show_modal(true)
    }

    return (
        <>
            {show_modal && <Alert_Modal set_show_modal={set_show_modal} placement='top' message='No user found.' desc='Please create an account' icon={<RxCross2 />} />}
            <Form className='forgot_form w-full' onFinish={submit}>
                <Form.Item
                    name='email'
                    rules={[
                        { required: true, message: 'Please enter correct email' },
                        { whitespace: true, message: 'Please enter correct email' },
                        { type: 'email', message: 'Please enter valid email' }
                    ]}
                >
                    <div className={`border-[1px] font-semibold transition duration-300 ${is_active.email ? 'border-[#f50963]' : 'border'} py-2`}>
                        <Input className='flex gap-2'
                            name='email'
                            onFocus={() => set_is_active(obj => { return { ...obj, email: true } })}
                            onBlur={() => set_is_active(obj => { return { ...obj, email: false } })}
                            bordered={false} size="middle" placeholder="Enter your email" prefix={<HiOutlineMail />} />
                    </div>
                </Form.Item>
                <button type='submit' className='flex font-bold w-full' style={{ fontFamily: 'Space' }}>
                    <Button className='w-full' text='Send Request' color='text-[#fff]' bg_color='bg-[#f50963]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#03041c]' />
                </button>
            </Form >
        </>
    )
}

export default Forgot_Form