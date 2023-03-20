import { useEffect, useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import './go_to_top.css'
import { AnimatePresence, motion } from 'framer-motion'

const Go_To_Top = () => {

    const [is_visible, set_is_visible] = useState(false)

    useEffect(() => {
        addEventListener('scroll', () => {
            if (window.pageYOffset > 199) {
                set_is_visible(true)
            } else {
                set_is_visible(false)
            }
        })
    }, [])


    return (
        <AnimatePresence>
            {is_visible &&
                <motion.div
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className='go_to_top cursor-pointer z-10 fixed bottom-12 right-12 bg-[#03041c] w-11 h-11 rounded-full flex justify-center items-center'
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: 'tween' }}
                    whileHover={{y:-5}}
                    exit={{ y: 50, opacity: 0 }}
                >
                    <MdKeyboardArrowUp color='white' size={25} />
                </motion.div>
            }
        </AnimatePresence >
    )
}

export default Go_To_Top