import React, { useState } from 'react'
import './deal_item.css'
import { useReactCountdown } from "use-react-countdown";

const Deal_Item = ({ img, name, discount, end_date, code }) => {

    const [coupon_copied, set_coupon_copied] = useState(false)

    const date_to_end_countdown_at = end_date  // month date, year hr:min:sec
    const { days, hours, minutes, seconds } = useReactCountdown(date_to_end_countdown_at);
    const active = +days + +hours + +minutes + +seconds === 0 ? false : true

    const copy_coupon = () => {
        navigator.clipboard.writeText(code)
        set_coupon_copied(true)
        setTimeout(() => {
            set_coupon_copied(false)
        }, 4000);
    }

    return (
        <div className='col-xl-6'>
            <div className='coupon_container flex border h-full'>
                <div className='coupon_title flex'>
                    <div className='w-[120px] h-[120px] m-6 cursor-pointer'><img className='w-[120px] h-[120px] object-cover' src={img} alt="" /></div>
                    <div className='h-full flex flex-col justify-center ml-6'>
                        <p className='m-0 font-bold text-md mb-1 mt-2'>{name}</p>
                        <p className='m-0 font-bold text-lg text-[#525258] mb-3'><span className='text-[#ff2400]'>{discount}</span> Off</p>
                        <ul className='flex p-0 text-sm gap-3'>
                            <li>{days} <br /> DAY</li>
                            <li>{hours} <br /> HRS</li>
                            <li>{minutes} <br /> MIN</li>
                            <li>{seconds} <br /> SEC</li>
                        </ul>
                    </div>
                </div>

                <div className='circle_for_side hidden md:flex relative mx-3 w-[2px] h-full bg-transparent border-l-[2px] border-dashed border-[#eaeaef] '>
                </div>

                <div className='coupon_code flex flex-col justify-center items-start gap-3'>
                    <p className='m-0 text-[15px]'>Coupon <span className={`${active ? 'text-green-600' : 'text-[#ff2400]'} `}>{active ? 'Active' : 'Inactive'}</span></p>
                    <button onClick={copy_coupon} className='bg-[rgb(0,128,128)]/10 outline-none border-[2px] border-dashed border-[rgb(0,128,128)]/40 py-[8px] px-[30px] text-[15px] font-bold text-[rgb(0,128,128)] uppercase tracking-widest'>{coupon_copied ? 'Copied!' : code}</button>
                </div>
            </div>
        </div>
    )
}

export default Deal_Item