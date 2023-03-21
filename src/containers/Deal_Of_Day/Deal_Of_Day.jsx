import React from 'react'
import './deal_of_day.css'
import Heading_Title from '../../components/Heading_Title/Heading_Title'
import Button from '../../components/Button/Button'
import Deal_Item from '../../components/Deal_Item/Deal_Item'
import { coupon } from '../../api/product'

const Deal_Of_Day = () => {
    return (
        <div className='deal_of_the_day px-16 mt-48 mb-28'>
            <div className='flex items-start md:items-center md:justify-between mb-8 flex-col md:flex-row gap-4'>
                <Heading_Title text='Deal of the Day' />
                <Button text='View All Products' color='text-[#fff]' bg_color='bg-[#f50963]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#6364db]' />
            </div>
            <div className='px-[12px] row gy-4'>
                {coupon.map((coupon, index) => <Deal_Item key={index} {...coupon} />)}
            </div>
        </div>
    )
}

export default Deal_Of_Day