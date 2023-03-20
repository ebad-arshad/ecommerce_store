import React from 'react'
import './button.css'

const Button = ({ text, bg_color, color, hover_bg_color, hover_color, border }) => {
    return (
        <button className={`py-[12px] px-8 transition duration-300 ${bg_color} ${color} ${hover_color} ${hover_bg_color} text-md outline-none ${border} border-[#03041c] flex items-center gap-1`}>{text}</button>
    )
}

export default Button