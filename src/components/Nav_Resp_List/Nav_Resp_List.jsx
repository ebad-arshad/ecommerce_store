import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AnimatePresence, motion } from "framer-motion"
import { Link } from 'react-router-dom'

const ul_variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
        }
    },
    exit: { opacity: 0 },
}

const list_variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: {},
}

const Nav_Resp_List = ({ pages_list }) => {

    const [pages_list_toggle, set_pages_list_toggle] = useState(false)

    return (
        <ul className='font-bold text-sm mt-10 flex flex-col gap-[2px] cursor-pointer px-10'>
            <li className='hover:text-[#f50963] transition duration-300 border-b-[1px] py-3'>HOME</li>
            <li className='hover:text-[#f50963] transition duration-300 border-b-[1px] py-3'>ABOUT US</li>
            <li className='hover:text-[#f50963] transition duration-300 border-b-[1px] py-3'>SHOP</li>
            <li className=' border-b-[1px] flex flex-col'>
                <div className='flex justify-between items-center'>
                    <span className='py-3 w-full hover:text-[#f50963] transition duration-300'>PAGES</span>
                    <div onClick={() => set_pages_list_toggle(!pages_list_toggle)} className='border w-10 h-10 flex items-center justify-center text-[#03041c] hover:!text-white hover:bg-[#f50963]'>
                        <span className={`${pages_list_toggle ? 'rotate-45' : 'rotate-0'} transition duration-300`}>
                            <AiOutlinePlus size={20} />
                        </span>
                    </div>
                </div>
                <AnimatePresence>
                    {
                        pages_list_toggle &&
                        <motion.ul
                            variants={ul_variants}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                            className='m-0 p-0'
                        >
                            {pages_list.map((v, i) => {
                                return <motion.li variants={list_variants} key={i} className='border-t-[1px] uppercase pl-7 py-3'><Link className='transition duration-300 no-underline text-[#03041c] hover:!text-[#f50963]' to={v.path}>{v.name}</Link></motion.li>
                            })}
                        </motion.ul>
                    }
                </AnimatePresence>
            </li >
            <li className='hover:text-[#f50963] transition duration-300 py-2'>CONTACT US</li>
        </ul >
    )
}

export default Nav_Resp_List