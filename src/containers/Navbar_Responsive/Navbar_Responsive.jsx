import React from 'react'
import './navbar_responsive.css'
import { motion } from "framer-motion"
import Logo from '../../assets/images/logo.svg'
import { RxCross2 } from 'react-icons/rx'
import Nav_Resp_List from '../../components/Nav_Resp_List/Nav_Resp_List'
import Nav_Resp_Footer from '../../components/Nav_Resp_Footer/Nav_Resp_Footer'


const Navbar_Responsive = ({ set_nav_resp, pages_list }) => {
    return (
        <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: .5 }}
            exit={{ x: '100vw', transition: { duration: .8 } }}

            className='fixed select-none top-0 right-0 flex w-screen h-screen z-50'
        >
            <motion.div
                className='nav_resp_1 flex-1 cursor-pointer bg-[#03041c]/20'
                whileTap={() => set_nav_resp(false)}
            ></motion.div>
            <div className='nav_resp_2 overflow-y-scroll py-10 bg-white flex flex-col w-[360px] relative'>
                <div className='flex items-center px-10'>
                    <div className='flex-1'><img className='cursor-pointer' src={Logo} alt="" /></div>
                    <div onClick={() => set_nav_resp(false)} className='w-10 h-10 rounded-full bg-white border hover:!bg-[#f50963] text-[#525258] cursor-pointer transition duration-[0.5s] hover:!text-white hover:!border-[#f50963] flex items-center justify-center'><RxCross2 size={18} /></div>
                </div>
                <Nav_Resp_List pages_list={pages_list} />
                <Nav_Resp_Footer />
            </div>
        </motion.div>
    )
}

export default Navbar_Responsive