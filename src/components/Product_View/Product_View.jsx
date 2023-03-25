import './product_view.scss'
import Button from '../Button/Button'
import { HiOutlineLink } from 'react-icons/hi'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Product_View = ({ id, img, name, price, discounted_price, set_product_quick_view, img_related }) => {

    const [amount, set_amount] = useState(1)
    const [is_hover, set_is_hover] = useState(false)
    const [active_img, set_active_img] = useState(0)


    const close_modal = () => set_product_quick_view(false)

    const img_clicked = (index) => {
        set_active_img(index)
    }

    return (
        <motion.div
            className='product_view_box fixed top-0 left-0 z-50 w-screen py-10 px-0 h-screenproduct_view m-0 bg-black/60 grid place-items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <div onClickCapture={close_modal} className='absolute top-0 left-0 w-screen h-screen z-0'></div>
            <motion.div
                className='product_view relative bg-white flex p-10 gap-16'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ type: 'tween' }}
            >
                <motion.div
                    className='absolute cursor-pointer hover:text-[#f50963] right-[40px] top-[40px]'
                    onMouseOver={() => set_is_hover(true)}
                    onMouseLeave={() => set_is_hover(false)}
                    onClick={close_modal}
                    initial={{ rotate: 0 }}
                    animate={{ rotate: is_hover ? 90 : 0 }}
                ><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.4"><path d="M21 1L1 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1 1L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></motion.div>
                <div className='w-1/2 flex flex-col gap-3'>
                    <div className='h-[80%]'>
                        <img className='overflow-hidden object-cover h-full w-full' src={img_related[active_img]} alt="" />
                    </div>
                    <div className='h-[20%] flex overflow-hidden justify-between'>
                        {img_related.map((img_rel, i) => (
                            <div key={i} onClick={() => img_clicked(i)} className={`w-[90px] h-[90px] bg-[#f5f7f9] border-[1px] ${active_img === i && 'border-[#f50963]'} cursor-pointer`}>
                                <img className='overflow-hidden object-contain h-full w-full' src={img_rel} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-1/2 flex flex-col text-[#525258]' >
                    <div>
                        <b className='text-3xl text-[#03041c]'>{name}</b>
                        <p className='text-sm my-6'>Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get</p>
                        <b className='text-[15px] flex gap-[4px]'><span className='line-through'>{discounted_price && `$${discounted_price.toFixed(2)}`} </span>{price && `$${price.toFixed(2)}`}</b>
                        <div className='text-[#03041c] mt-3 w-36 border flex py-1'>
                            <span onClick={() => set_amount(v => v - 1)} className='hover:text-[#f50963] grid place-items-center w-[40px] transition duration-300 cursor-pointer text-2xl'>-</span>
                            <span className='grid place-items-center border-l-2 border-r-2 w-16 transition duration-300 text-sm'>{amount}</span>
                            <span onClick={() => set_amount(v => v + 1)} className='hover:text-[#f50963] grid place-items-center w-[40px] transition duration-300 cursor-pointer text-2xl'>+</span>
                        </div>
                        <div className='modal_button flex gap-2 mt-6'>
                            <Button text='Add to Cart' color='text-[#fff]' bg_color='bg-[#03041c]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#f50963]' />
                            <div className='card_option border transition duration-300 cursor-pointer hover:text-white text-[#525258] w-12 h-12 flex items-center justify-center hover:bg-[#f50963]'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.60361 7.98635C2.83627 11.8048 7.70625 14.8923 9.00046 15.6565C10.2991 14.8844 15.2042 11.7628 16.3973 7.98985C17.1807 5.55102 16.4536 2.46177 13.5645 1.53473C12.1648 1.08741 10.5321 1.35966 9.4049 2.22804C9.16927 2.40837 8.8422 2.41187 8.60481 2.23329C7.41084 1.33952 5.85111 1.07778 4.42941 1.53473C1.5447 2.4609 0.82023 5.55014 1.60361 7.98635ZM9.00138 17.0711C8.89236 17.0711 8.78421 17.0448 8.68574 16.9914C8.41055 16.8417 1.92808 13.2841 0.348132 8.3872C0.347252 8.3872 0.347252 8.38633 0.347252 8.38633C-0.644504 5.30321 0.459792 1.42874 4.02502 0.284605C5.69904 -0.254635 7.52342 -0.0174044 8.99874 0.909632C10.4283 0.00973263 12.3275 -0.238878 13.9681 0.284605C17.5368 1.43049 18.6446 5.30408 17.6538 8.38633C16.1248 13.2272 9.59485 16.8382 9.3179 16.9896C9.21943 17.0439 9.1104 17.0711 9.00138 17.0711Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.2027 6.67485C13.8625 6.67485 13.5741 6.41486 13.546 6.07171C13.4879 5.35214 13.0044 4.74462 12.3159 4.52315C11.9686 4.4111 11.7787 4.04081 11.8904 3.69678C12.0038 3.35188 12.3722 3.16454 12.7204 3.27309C13.9187 3.65914 14.7584 4.71573 14.8613 5.96491C14.8903 6.32645 14.6204 6.64334 14.2572 6.67222C14.2388 6.67398 14.2212 6.67485 14.2027 6.67485Z" fill="currentColor"></path></svg></div>
                            <div className='card_option border transition duration-300 cursor-pointer hover:text-white text-[#525258] w-12 h-12 flex items-center justify-center hover:bg-[#f50963]'><HiOutlineLink /></div>
                        </div>
                    </div>
                    <hr className='my-10' />
                    <div className='flex flex-col gap-1'>
                        <div className='text-[15px]'><b className='text-black'>SKU: </b>29045-SB-6</div>
                        <div className='text-[15px]'><b className='text-black'>Categories: </b>
                            <span className='hover:text-[#f50963] cursor-pointer'> iPhone Cases</span>,
                            <span className='hover:text-[#f50963] cursor-pointer'> Android Cases</span>,
                            <span className='hover:text-[#f50963] cursor-pointer'> Accessories</span>
                        </div>
                        <div className='flex gap-1 my-4'>
                            <b className='text-[15px] text-black'>Tags: </b>
                            <div>
                                <span className='p-1 transition duration-300 cursor-pointer hover:bg-[#f50963] hover:text-[#fff] text-[#525258] border text-sm'>ViewSonic</span>
                                <span className='p-1 transition duration-300 cursor-pointer hover:bg-[#f50963] hover:text-[#fff] text-[#525258] border text-sm'>Monitor</span>
                                <span className='p-1 transition duration-300 cursor-pointer hover:bg-[#f50963] hover:text-[#fff] text-[#525258] border text-sm'>Computer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Product_View