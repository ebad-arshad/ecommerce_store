import React from 'react'
import './subscribe.css'
import Button from '../../components/Button/Button'

const Subscribe = () => {
    return (
        <div className='subsribe py-16 mt-16'>
            <div className='flex flex-col gap-4 lg:flex-row justify-between lg:items-center bg-white p-16 mx-[30px] sm:mx-16'>
                <div className='flex-1 text-3xl flex flex-col gap-2'>
                    <b>Subscribe for</b>
                    <b>Latest Trends & Offers</b>
                </div>
                <div className='flex-1 flex items-center'>
                    <input className='w-full border-black border-[1px] placeholder:text-sm p-[18px] outline-none pl-7 pr-36 placeholder:text-gray-500 text-sm text-black' placeholder='Enter Your Email' type="text" />
                    <div className='-ml-[140px]'>
                    <Button text='Subscribe' color='text-[#fff]' bg_color='bg-[#03041c]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#f50963]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe