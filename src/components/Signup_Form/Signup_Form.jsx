import { UserOutlined } from '@ant-design/icons';
import { LockOutlined } from '@ant-design/icons';
import { Checkbox, Input, Form } from 'antd';
import { useState } from 'react';
import './signup_form.scss'
import Button from '../Button/Button'
import { RxCross2 } from 'react-icons/rx'
import { HiOutlineMail } from 'react-icons/hi'
import Alert_Modal from '../Alert_Modal/Alert_Modal'

const Signup_Form = () => {

    const [is_active, set_is_active] = useState({ name: false, email: false, password: false, confirm_password: false })
    const [show_modal, set_show_modal] = useState(false)

    const submit = (e) => {
        console.log(e);
        set_show_modal(true)
    }

    return (
        <>
            {show_modal && <Alert_Modal set_show_modal={set_show_modal} placement='top' message='No user found.' desc='Please create an account' icon={<RxCross2 />} />}
            <Form className='signup_form w-full' onFinish={submit}>
                <Form.Item
                    name='username'
                    rules={[
                        { required: true, message: 'Please enter full name' },
                        { whitespace: true, message: 'Name cannot be blank' },
                        { type: 'string', message: 'Please enter valid name' },
                        { pattern: /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/gm, message: 'Full name should contain only letters' }
                    ]}
                >
                    <div className={`border-[1px] font-semibold transition duration-300 ${is_active.name ? 'border-[#f50963]' : 'border'} py-2`}>
                        <Input className='flex gap-2'
                            name='username'
                            onFocus={() => set_is_active(obj => { return { ...obj, name: true } })}
                            onBlur={() => set_is_active(obj => { return { ...obj, name: false } })}
                            bordered={false} size="middle" placeholder="Enter your name" prefix={<UserOutlined />} />
                    </div>
                </Form.Item>
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
                <Form.Item
                    name='password'
                    rules={[
                        { required: true, message: "Password is required" },
                        { whitespace: true, message: "Password is incorrect" },
                        { min: 6, max: 10, message: 'Password must be greater than 6 & less than 10' },
                    ]}
                >
                    <div className={`border-[1px] font-semibold transition duration-300 ${is_active.password ? 'border-[#f50963]' : 'border'} py-2`}>
                        <Input.Password
                            name='password'
                            prefix={<LockOutlined />}
                            onFocus={() => set_is_active(obj => { return { ...obj, password: true } })}
                            onBlur={() => set_is_active(obj => { return { ...obj, password: false } })}
                            className='flex gap-2' bordered={false} size="middle" placeholder="Password" />
                    </div>
                </Form.Item>
                <Form.Item
                    name='confirm password'
                    dependencies={['password']}
                    rules={[
                        { required: true, message: "Password did not match" },
                        { whitespace: true, message: "Password did not match" },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Passwords must match'));
                            },
                        }),
                    ]}
                >
                    <div className={`border-[1px] font-semibold transition duration-300 ${is_active.confirm_password ? 'border-[#f50963]' : 'border'} py-2`}>
                        <Input.Password
                            name='password'
                            prefix={<LockOutlined />}
                            onFocus={() => set_is_active(obj => { return { ...obj, confirm_password: true } })}
                            onBlur={() => set_is_active(obj => { return { ...obj, confirm_password: false } })}
                            className='flex gap-2' bordered={false} size="middle" placeholder="Confirm Password" />
                    </div>
                </Form.Item>
                <button type='submit' className='flex font-bold w-full' style={{ fontFamily: 'Space' }}>
                    <Button className='w-full' text='Sign in' color='text-[#fff]' bg_color='bg-[#f50963]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#03041c]' />
                </button>
            </Form >
        </>
    )
}

export default Signup_Form