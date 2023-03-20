import { top_product_1 } from '../../assets/images/index'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineLink } from 'react-icons/hi'
import './product_card.css'
import { useState } from 'react'


const card_option_varients = {
    hidden: { x: '30px', opacity: 0 },
    visible: {
        x: 0, opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: .1
        }
    },
    exit: {
        x: '30px', opacity: 0, transition: { delay: 1 }
    },
}

const card_option_item_varients = {
    hidden: { x: 50 },
    visible: {
        x: 0, transition: {
            type: 'tween'
        }
    },
    exit: { x: 50, opacity: 0, transition: { duration: .5 } },
}

const Product_Card = ({ img, name, price, discounted_price, on_sale, discount }) => {

    const [is_hover, set_is_hover] = useState(false)

    return (
        <div className='col-xl-3 col-lg-4 col-sm-6'>
            <div className='flex flex-col relative'>
                <motion.div
                    className='relative cursor-pointer overflow-hidden flex justify-center'
                    onHoverStart={() => set_is_hover(true)}
                    onHoverEnd={() => set_is_hover(false)}
                >
                    <motion.img
                        className='transition duration-[.5s]' src={img} alt=""
                        initial={{ scale: 1 }}
                        animate={{ scale: is_hover ? 1.1 : 1 }}
                    />
                    <AnimatePresence>
                        {is_hover &&
                            <motion.div
                                className='absolute  top-10 right-2 z-10 flex flex-col gap-1'
                                variants={card_option_varients}
                                initial='hidden'
                                animate='visible'
                                exit='exit'
                            >
                                <motion.div variants={card_option_item_varients} className='card_option hover:text-white text-[#525258] w-10 h-10 flex items-center justify-center hover:bg-[#f50963]'><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.60361 7.98635C2.83627 11.8048 7.70625 14.8923 9.00046 15.6565C10.2991 14.8844 15.2042 11.7628 16.3973 7.98985C17.1807 5.55102 16.4536 2.46177 13.5645 1.53473C12.1648 1.08741 10.5321 1.35966 9.4049 2.22804C9.16927 2.40837 8.8422 2.41187 8.60481 2.23329C7.41084 1.33952 5.85111 1.07778 4.42941 1.53473C1.5447 2.4609 0.82023 5.55014 1.60361 7.98635ZM9.00138 17.0711C8.89236 17.0711 8.78421 17.0448 8.68574 16.9914C8.41055 16.8417 1.92808 13.2841 0.348132 8.3872C0.347252 8.3872 0.347252 8.38633 0.347252 8.38633C-0.644504 5.30321 0.459792 1.42874 4.02502 0.284605C5.69904 -0.254635 7.52342 -0.0174044 8.99874 0.909632C10.4283 0.00973263 12.3275 -0.238878 13.9681 0.284605C17.5368 1.43049 18.6446 5.30408 17.6538 8.38633C16.1248 13.2272 9.59485 16.8382 9.3179 16.9896C9.21943 17.0439 9.1104 17.0711 9.00138 17.0711Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.2027 6.67485C13.8625 6.67485 13.5741 6.41486 13.546 6.07171C13.4879 5.35214 13.0044 4.74462 12.3159 4.52315C11.9686 4.4111 11.7787 4.04081 11.8904 3.69678C12.0038 3.35188 12.3722 3.16454 12.7204 3.27309C13.9187 3.65914 14.7584 4.71573 14.8613 5.96491C14.8903 6.32645 14.6204 6.64334 14.2572 6.67222C14.2388 6.67398 14.2212 6.67485 14.2027 6.67485Z" fill="currentColor"></path></svg></motion.div>
                                <motion.div variants={card_option_item_varients} className='card_option hover:text-white text-[#525258] w-10 h-10 flex items-center justify-center hover:bg-[#f50963]'><svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.49943 5.34978C8.23592 5.34978 7.20896 6.37595 7.20896 7.63732C7.20896 8.89774 8.23592 9.92296 9.49943 9.92296C10.7629 9.92296 11.7908 8.89774 11.7908 7.63732C11.7908 6.37595 10.7629 5.34978 9.49943 5.34978M9.49941 11.3456C7.45025 11.3456 5.78394 9.68213 5.78394 7.63738C5.78394 5.59169 7.45025 3.92725 9.49941 3.92725C11.5486 3.92725 13.2158 5.59169 13.2158 7.63738C13.2158 9.68213 11.5486 11.3456 9.49941 11.3456" fill="currentColor"></path><path d="M1.49145 7.63683C3.25846 11.5338 6.23484 13.8507 9.50001 13.8517C12.7652 13.8507 15.7416 11.5338 17.5086 7.63683C15.7416 3.7408 12.7652 1.42386 9.50001 1.42291C6.23579 1.42386 3.25846 3.7408 1.49145 7.63683V7.63683ZM9.50173 15.2742H9.49793H9.49698C5.56775 15.2714 2.03943 12.5219 0.0577129 7.91746C-0.0192376 7.73822 -0.0192376 7.53526 0.0577129 7.35601C2.03943 2.75248 5.5687 0.00306822 9.49698 0.000223018C9.49888 -0.000725381 9.49888 -0.000725381 9.49983 0.000223018C9.50173 -0.000725381 9.50173 -0.000725381 9.50268 0.000223018C13.4319 0.00306822 16.9602 2.75248 18.942 7.35601C19.0199 7.53526 19.0199 7.73822 18.942 7.91746C16.9612 12.5219 13.4319 15.2714 9.50268 15.2742H9.50173Z" fill="currentColor"></path></svg></motion.div>
                                <motion.div variants={card_option_item_varients} className='card_option hover:text-white text-[#525258] w-10 h-10 flex items-center justify-center hover:bg-[#f50963]'><HiOutlineLink /></motion.div>
                            </motion.div>
                        }
                    </AnimatePresence>
                    <motion.div
                        className='absolute bottom-0 flex w-full hover:bg-[#f50963] transition duration-[.4s] bg-[#03041c] text-white items-center justify-center gap-2 py-2'
                        initial={{ opacity: 0, y: '40px' }}
                        animate={{ opacity: is_hover ? 1 : 0, y: is_hover ? 0 : '40px' }}
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.54431 4.80484L4.08701 11.2487C4.12661 11.7447 4.53251 12.1167 5.02841 12.1167H5.03201H14.8519H14.8537C15.3227 12.1167 15.7232 11.7681 15.7898 11.3053L16.6448 5.41221C16.6646 5.27205 16.6295 5.13189 16.544 5.01868C16.4594 4.90457 16.3352 4.8309 16.1948 4.81113C16.0067 4.81832 8.20092 4.80754 3.54431 4.80484ZM5.02647 13.4642C3.84117 13.4642 2.83766 12.5405 2.74136 11.359L1.91696 1.57098L0.560653 1.33738C0.192551 1.27269 -0.0531497 0.924974 0.00985058 0.557495C0.0746508 0.190017 0.430152 -0.0489788 0.790154 0.00852392L2.66216 0.331977C2.96366 0.384987 3.19316 0.634765 3.21926 0.940248L3.43076 3.45689C16.2792 3.46228 16.3206 3.46857 16.3827 3.47576C16.884 3.54854 17.325 3.80999 17.6256 4.21251C17.9262 4.61413 18.0522 5.1092 17.9802 5.60516L17.1261 11.4974C16.965 12.6187 15.9894 13.4642 14.8554 13.4642H14.8509H5.03367H5.02647Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.4079 8.12567H10.9131C10.5396 8.12567 10.2381 7.82379 10.2381 7.45181C10.2381 7.07984 10.5396 6.77795 10.9131 6.77795H13.4079C13.7805 6.77795 14.0829 7.07984 14.0829 7.45181C14.0829 7.82379 13.7805 8.12567 13.4079 8.12567Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M4.63943 15.9048C4.91033 15.9048 5.12903 16.1235 5.12903 16.3944C5.12903 16.6653 4.91033 16.8849 4.63943 16.8849C4.36763 16.8849 4.14893 16.6653 4.14893 16.3944C4.14893 16.1235 4.36763 15.9048 4.63943 15.9048Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M4.63859 16.2097C4.53689 16.2097 4.45409 16.2925 4.45409 16.3942C4.45409 16.5985 4.82399 16.5985 4.82399 16.3942C4.82399 16.2925 4.74029 16.2097 4.63859 16.2097ZM4.6386 17.5569C3.996 17.5569 3.474 17.0349 3.474 16.3933C3.474 15.7518 3.996 15.2307 4.6386 15.2307C5.28121 15.2307 5.80411 15.7518 5.80411 16.3933C5.80411 17.0349 5.28121 17.5569 4.6386 17.5569Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.7918 15.9048C15.0627 15.9048 15.2823 16.1235 15.2823 16.3944C15.2823 16.6653 15.0627 16.8849 14.7918 16.8849C14.52 16.8849 14.3013 16.6653 14.3013 16.3944C14.3013 16.1235 14.52 15.9048 14.7918 15.9048Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.7906 16.2098C14.6898 16.2098 14.607 16.2926 14.607 16.3943C14.6079 16.6004 14.9769 16.5986 14.976 16.3943C14.976 16.2926 14.8923 16.2098 14.7906 16.2098ZM14.7909 17.5569C14.1483 17.5569 13.6263 17.0349 13.6263 16.3933C13.6263 15.7518 14.1483 15.2307 14.7909 15.2307C15.4344 15.2307 15.9573 15.7518 15.9573 16.3933C15.9573 17.0349 15.4344 17.5569 14.7909 17.5569Z" fill="currentColor"></path></svg>
                        <span className='text-[15px] font-[600]'>Add to Cart</span>
                    </motion.div>
                </motion.div>
                <div className='mt-3'>
                    <p className='transition text-sm duration-300 cursor-pointer hover:text-[#f50963]'>{name}</p>
                    <p className='text-[15px] text-[#525258] mt-[-10px]'><span className='line-through'>{discounted_price}</span> {price}</p>
                </div>
                {on_sale && <div className='bg-[#f50963] text-white text-sm w-[50px] text-center py-[1px] absolute top-[20px] left-0'>Sale</div>}
                {discount && <div className='bg-[#03041c] text-white text-sm w-[50px] text-center py-[1px] absolute top-[47px] left-0'>{discount}</div>}
            </div>
        </div >
    )
}

export default Product_Card