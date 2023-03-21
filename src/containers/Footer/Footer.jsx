import React from 'react'
import './footer.css'
import { payment_options, logo } from '../../assets/images/index'
import Footer_List from '../../components/Footer_List/Footer_List'

const Footer = () => {

    const list_obj = [
        {
            title: 'Company',
            list: ['About us', 'Careers', 'Store Locations', 'Our Blog', 'Reviews'],
        },
        {
            title: 'Shop',
            list: ['Game & Video', 'Phone & Tablets', 'Computers & Laptop', 'Sport Watches', 'Discounts'],
        },
        {
            title: 'Support',
            list: ['FAQs', 'Reviews', 'Contact Us', 'Shipping', 'Returns'],
        },
    ]

    return (
        <>
            <div className='footer flex flex-col mx-[30px] sm:mx-16 pt-20 pb-8 text-[#525258]'>
                <div className='row flex pb-10 pt-4'>
                    <div className='col-xl-3 col-lg-3 col-md-5 col-sm-6'>
                        <div className='pr-[70px]'>
                            <div><img src={logo} alt="" /></div>
                            <p className='m-0 my-3 '>The home and elements needed to create beautiful products.</p>
                            <div></div>
                        </div>
                    </div>

                    {list_obj.map((obj, index) => <Footer_List key={index} className='col-xl-2 col-lg-3 col-md-3 col-sm-6' title={obj.title} list={obj.list} />)}

                    <div className='col-xl-3 col-lg-3 col-md-5 col-sm-6'>
                        <div className='footer_list pl-[70px] flex flex-col gap-3'>
                            <b className='text-lg'>Talk To Us</b>
                            <p className='m-0 text-sm'>Find a location nearest you. <br /> See <span className='text-[#f50963] cursor-pointer underline'>Our Stores</span></p>
                            <b className='text-lg'>+920 000 00 0000</b>
                            <p className='m-0 text-sm'>m.ebadarshad2003@gmail.com</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex justify-between items-center'>
                    <p className='m-0 text-sm '>Copyright © 2023 by <span className='text-[#f50963] cursor-pointer'>Muhammad Ebad Arshad</span> rights reserved.</p>
                    <div><img src={payment_options} alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Footer