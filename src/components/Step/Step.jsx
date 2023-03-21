import './step.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Step = ({ svg, title, desc }) => {

    const [step_hover, set_step_hover] = useState(false)

    return (
        <div className='col-lg-3 col-sm-6 gy-5'>
            <div className='flex gap-3'
                onMouseOver={() => set_step_hover(true)}
                onMouseLeave={() => set_step_hover(false)}
            >
                <div className='flex justify-center items-center border p-3 rounded-full w-[60px] h-[60px]'>
                    <motion.div
                        initial={{ y: 0 }} animate={{ y: step_hover ? [0, -10, 0] : 0, transition: { type: 'tween' } }}>
                        {svg}
                    </motion.div>
                </div>
                <div className='flex h-full flex-col gap-1'>
                    <b className='text-md'>{title}</b>
                    <p className='text-sm text-[#525258]'>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Step