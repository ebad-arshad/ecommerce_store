import React from 'react'
import './hero.css'
import Button from '../../components/Button/Button'
import hero_image from '../../assets/images/hero_image.webp'
import { motion } from "framer-motion"

const container_varients = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            when: 'beforeChildren',
            delayChildren: 0.2,
            staggerChildren: .2
        }
    }
}

const child_varients = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const Hero = () => {
    return (
        <div className='hero relative flex px-16 overflow-hidden z-10'>
            <motion.div
                className='flex-1 z-10 flex justify-center flex-col gap-4'
                variants={container_varients}
                initial='hidden'
                animate='visible'
            >
                <motion.p
                    className='text-[#525258] pl-2 border-l-2 border-l-[#f50963]  leading-5 text-[16px]'
                    variants={child_varients}
                >Best Ear <br /> Headphones</motion.p>
                <motion.h1
                    className='hero_heading text-7xl text-[#03041c] font-bold leading-[80px]'
                    variants={child_varients}
                >Find your <br /> Beats Studio.</motion.h1>
                <motion.div
                    className='w-fit border mt-6'
                    variants={child_varients}
                >
                    <div>
                        <Button text='Shop Now' border='border-[1px]' color='text-[#03041c]' bg_color='bg-[#f0f2ee]' hover_color='hover:text-[#f0f2ee]' hover_bg_color='hover:bg-[#03041c]' />
                    </div>
                </motion.div>
            </motion.div>
            <div className='flex-1 flex items-end justify-center'>
                <div className='border w-fit relative'>
                    <motion.span
                        className='circle_span absolute bottom-[150px] right-[-50px] z-0 bg-white rounded-full w-[450px] h-[450px]'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, .5, .1], scale: 1.7 }}
                        exit={{ opacity: 1, width: '450px' }}
                        transition={{ ease: "easeInOut", delay: 2, duration: 3, repeat: Infinity }}
                    ></motion.span>
                    <motion.div
                        className='hero_image_box'
                        initial={{ x: '20px', opacity: 0 }}
                        animate={{ x: '0px', opacity: 1 }}
                        transition={{ type: 'tween', delay: 2, duration: 1 }}
                    ><img src={hero_image} className='hero_image w-[430px]' alt="" /></motion.div>
                </div>
            </div>
        </div >
    )
}

export default Hero