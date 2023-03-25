import React from 'react'
import Button from '../../components/Button/Button'
import Items_List from '../../components/Items_List/Items_List'
import { BsArrow90DegLeft } from 'react-icons/bs'
import './my_wishlist.scss'

const My_Wishlist = () => {
  return (
    <div className='my_wishlist mt-24 px-16'>
      <div className='flex gap-2 text-[#03041c] bg-[#f0f2ee] py-3 px-[40px]'><span>Continue Shopping</span> <BsArrow90DegLeft size={20} /></div>
      <div className='my-6'>
        <Items_List />
      </div>
      <div className='w-fit'>
        <Button route='/shop' className='font-bold' text='Go to Cart' color='text-[#fff]' bg_color='bg-[#03041c]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#f50963]' />
      </div>
    </div>
  )
}

export default My_Wishlist