import { UserOutlined } from '@ant-design/icons';
import { LockOutlined } from '@ant-design/icons';
import { Checkbox, Input, Form } from 'antd';
import { useState } from 'react';
import './login_form.scss'
import Button from '../Button/Button'
import { RxCross2 } from 'react-icons/rx'
import Alert_Modal from '../Alert_Modal/Alert_Modal'
import { useNavigate } from 'react-router-dom';

const Login_Form = () => {

    const [is_active, set_is_active] = useState({ email: false, password: false })
    const [show_modal, set_show_modal] = useState(false)

    const navigate = useNavigate()

    const submit = (e) => {
        console.log(e);
        set_show_modal(true)
    }

    return (
        <>
            {show_modal && <Alert_Modal set_show_modal={set_show_modal} placement='top' message='No user found.' desc='Please create an account' icon={<RxCross2 />} />}
            <Form className='login_form w-full' onFinish={submit}>
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
                            bordered={false} size="middle" placeholder="Enter your email" prefix={<UserOutlined />} />
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
                <div className='remember_me flex justify-between mt-2 mb-4'>
                    <Checkbox className='text-[#525258]'>Remember me</Checkbox>
                    <span onClick={() => navigate('/forgot')} className='hover:text-[#f50963] cursor-pointer text-sm'>Forgot Password?</span>
                </div>
                <button type='submit' className='flex font-bold w-full' style={{ fontFamily: 'Space' }}>
                    <Button className='w-full' text='Sign in' color='text-[#fff]' bg_color='bg-[#f50963]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#03041c]' />
                </button>
            </Form >
        </>
    )
}

export default Login_Form