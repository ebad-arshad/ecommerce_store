import React from 'react'
import Items_List from '../../components/Items_List/Items_List'
import { BsArrow90DegLeft } from 'react-icons/bs'
import Button from '../../components/Button/Button'
import './my_cart.scss'

const My_Cart = () => {
  return (
    <div className='my_cart mt-24 px-16 text-[#03041c]'>
      <div className='flex gap-2  bg-[#f0f2ee] py-3 px-[40px]'><span>Continue Shopping</span> <BsArrow90DegLeft size={20} /></div>
      <div className='my-6'>
        <Items_List />
      </div>
      <div className='w-[40%] ml-auto mt-14'>
        <b className='text-2xl'>Cart Totals</b>
        <div className='flex flex-col py-4 text-[15px]'>
          <span className='border p-3 flex justify-between'>Subtotal <span className='text-[#525258]'>$996.00</span></span>
          <span className='border p-3 flex justify-between'>Total <span className='text-[#525258]'>$996.00</span></span>
        </div>
        <div>
          <Button route='/home' text='Proceed to checkout' color='text-[#fff]' bg_color='bg-[#f50963]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#03041c]' />
        </div>
      </div>
    </div>
  )
}

export default My_Cart