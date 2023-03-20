import React from 'react'
import nav_resp_image from '../../assets/images/nav_resp_image.webp'


const Nav_Resp_Footer = () => {
    return (
        <>
            <div className='flex-1 border-t-[1px] mt-8 px-10 pt-8'>
                <h1 className='text-[#03041c] cursor-pointer font-bold text-xl mb-2 hover:text-[#f50963] transition duration-[0.3s]'>+920 000 00 0000</h1>
                <p className='text-gray-500 cursor-pointer hover:text-[#f50963] transition duration-[0.3s]'>m.ebadarshad2003@gmail.com</p>
            </div>
            <img className='w-full mb-[-40px]' src={nav_resp_image} alt="" />
        </>
    )
}

export default Nav_Resp_Footer