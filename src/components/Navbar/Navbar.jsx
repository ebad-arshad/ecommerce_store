import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo.svg'
import './navbar.css'
import { AnimatePresence, motion } from "framer-motion"
import Navbar_Responsive from '../../containers/Navbar_Responsive/Navbar_Responsive'
import { IoIosArrowDown } from 'react-icons/io'

const nav_burger_part_1 = {
    rest: { x: 0 },
    hover: { x: 10, transition: { duration: .3, type: 'tween' } }
}
const nav_burger_part_3 = {
    rest: { x: 0 },
    hover: { x: -10, transition: { duration: .3, type: 'tween' } }

}

const Navbar = () => {

    const [nav_style, set_nav_style] = useState('absolute')

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 77 ? set_nav_style('nav_scrolled bg-white fixed') : window.scrollY < 78 ? set_nav_style('absolute') : null
        });
    }, [window.scrollY])

    const [color_change, set_color_change] = useState('bg-[#2a2a2c]')
    const [nav_resp, set_nav_resp] = useState(false)
    const [pages_list_toggle, set_pages_list_toggle] = useState(false)

    const pages_item = [
        'FAQs',
        'Privacy & Policy',
        'Terms & Conditions',
        'Login',
        'Register',
        'Forgot Password',
        'My Cart',
        'My Wishlist',
        'Checkout',
        'Error 404',
    ]
    const nav_cart_item = [
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0001 19V17C17.0001 15.9391 16.5787 14.9217 15.8285 14.1716C15.0784 13.4214 14.061 13 13.0001 13H5.00012C3.93926 13 2.92184 13.4214 2.17169 14.1716C1.42155 14.9217 1.00012 15.9391 1.00012 17V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.00012 9C11.2093 9 13.0001 7.20914 13.0001 5C13.0001 2.79086 11.2093 1 9.00012 1C6.79098 1 5.00012 2.79086 5.00012 5C5.00012 7.20914 6.79098 9 9.00012 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>,
        <>
            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0461 2.59133C19.5419 2.08683 18.9431 1.68663 18.2842 1.41358C17.6252 1.14054 16.9189 1 16.2056 1C15.4923 1 14.786 1.14054 14.127 1.41358C13.468 1.68663 12.8693 2.08683 12.365 2.59133L11.3185 3.63785L10.272 2.59133C9.25342 1.57276 7.87194 1.00053 6.43146 1.00053C4.99098 1.00053 3.6095 1.57276 2.59092 2.59133C1.57235 3.6099 1.00012 4.99139 1.00012 6.43187C1.00012 7.87235 1.57235 9.25383 2.59092 10.2724L3.63745 11.3189L11.3185 19L18.9996 11.3189L20.0461 10.2724C20.5506 9.76814 20.9508 9.16942 21.2239 8.51045C21.4969 7.85148 21.6374 7.14517 21.6374 6.43187C21.6374 5.71857 21.4969 5.01225 21.2239 4.35328C20.9508 3.69431 20.5506 3.09559 20.0461 2.59133V2.59133Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <p className='absolute top-[-8px] border-2 border-[#f0f2ee] box-content right-[-11px] w-[18px] h-[18px] font-bold text-[12px] rounded-full flex items-center justify-center text-white bg-[#f50963]'>0</p>
        </>,
        <>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.85739 19C8.33077 19 8.71453 18.6163 8.71453 18.1429C8.71453 17.6695 8.33077 17.2857 7.85739 17.2857C7.384 17.2857 7.00024 17.6695 7.00024 18.1429C7.00024 18.6163 7.384 19 7.85739 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.286 19C17.7594 19 18.1431 18.6163 18.1431 18.1429C18.1431 17.6695 17.7594 17.2857 17.286 17.2857C16.8126 17.2857 16.4288 17.6695 16.4288 18.1429C16.4288 18.6163 16.8126 19 17.286 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.00012 1H4.42869L6.72584 12.4771C6.80422 12.8718 7.0189 13.2263 7.3323 13.4785C7.64571 13.7308 8.03786 13.8649 8.44012 13.8571H16.7716C17.1738 13.8649 17.566 13.7308 17.8794 13.4785C18.1928 13.2263 18.4075 12.8718 18.4858 12.4771L19.8573 5.28571H5.28584" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <p className='absolute top-[-8px] border-2 border-[#f0f2ee] box-content right-[-11px] w-[18px] h-[18px] font-bold text-[12px] rounded-full flex items-center justify-center text-white bg-[#f50963]'>0</p>
        </>
    ]

    return (
        <>
            <AnimatePresence>
                {nav_resp && <Navbar_Responsive pages_list={pages_item} set_nav_resp={set_nav_resp} />}
            </AnimatePresence>
            <motion.nav
                className={`flex w-full border ${nav_style} top-0 left-0 z-20 h-[76px]`}
                initial={{ y: '-20vh' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween', delay: 1 }}
            >
                <div className='nav_first_box flex items-center gap-10 flex-1'>
                    <div className='w-[112px]'><img className='w-full' src={Logo} alt="" /></div>
                    <ul className='nav_list flex gap-10 text-[14px] text-[#525258] font-semibold h-full m-0'>
                        <li className='cursor-pointer transition duration-500 hover:text-[#f50963] h-full flex items-center'>Home</li>
                        <li className='cursor-pointer transition duration-500 hover:text-[#f50963] h-full flex items-center'>About us</li>
                        <li className='cursor-pointer transition duration-500 hover:text-[#f50963] h-full flex items-center'>Shop</li>
                        <motion.li
                            className='cursor-pointer relative'
                            onHoverStart={() => set_pages_list_toggle(true)}
                            onHoverEnd={() => set_pages_list_toggle(false)}
                        ><span className='transition duration-500 hover:text-[#f50963] gap-1 h-full flex items-center'>Pages <IoIosArrowDown /></span>
                            <AnimatePresence>
                                {pages_list_toggle &&
                                    <motion.ul
                                        className='pages_list p-0 absolute bg-white w-[200px] left-0 top-[75px] py-3 flex flex-col gap-2 font-light'
                                        initial={{ height: 0 }}
                                        animate={{ height: '320px' }}
                                        exit={{ height: 0, transition: { delay: .2 } }}
                                        transition={{ type: 'tween', duration: .1, when: 'beforeChildren' }}
                                    >
                                        {
                                            pages_item.map((v, i) => <motion.li key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='transition duration-500 hover:text-[#f50963] px-6'>{v}</motion.li>)
                                        }
                                    </motion.ul>
                                }
                            </AnimatePresence>
                        </motion.li>
                        <li className='cursor-pointer transition duration-500 hover:text-[#f50963] h-full flex items-center'>Contact us</li>
                    </ul>
                </div>
                <div className='flex-[0.9] flex justify-between items-center py-4'>
                    <div className='flex flex-1 justify-end items-center text-[#525258] h-full'>
                        <input className='nav_search rounded-3xl text-md pl-6 outline-none h-12 w-[70%]' type="text" placeholder='Search for products...' />
                        <svg className='search_icon ml-[-35px] cursor-pointer' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.12492 15.2498C12.0599 15.2498 15.2498 12.0599 15.2498 8.12492C15.2498 4.18994 12.0599 1 8.12492 1C4.18994 1 1 4.18994 1 8.12492C1 12.0599 4.18994 15.2498 8.12492 15.2498Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.9999 16L14.4999 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <div className='nav_cart_icon flex items-center gap-3 text-[#525258] flex-[0.2] px-4 ml-10'>
                        {nav_cart_item.map((cartItem, i) => {
                            return <div key={i} className='relative cursor-pointer transition duration-500 hover:text-black'>{cartItem}</div>
                        })}
                    </div>
                    <motion.div
                        className='nav_ham ml-7 hidden flex-col w-10 h-6 p-1 justify-between cursor-pointer'
                        initial='rest'
                        whileHover='hover'
                        onHoverStart={() => set_color_change('bg-[#f50963]')}
                        onHoverEnd={() => set_color_change('bg-[#2a2a2c]')}
                        onClick={() => set_nav_resp(true)}
                    >
                        <motion.div variants={nav_burger_part_1} className={`w-[25px] h-[2px] self-start ${color_change}`}></motion.div>
                        <motion.div className={`w-[15px] h-[2px] self-center ${color_change}`}></motion.div>
                        <motion.div variants={nav_burger_part_3} className={`w-[25px] h-[2px] self-end ${color_change}`}></motion.div>
                    </motion.div>
                </div>
            </motion.nav >
        </>
    )
}

export default Navbar