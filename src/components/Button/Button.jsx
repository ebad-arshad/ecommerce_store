import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'

const Button = ({ text, bg_color, color, hover_bg_color, hover_color, border, className, route }) => {
    return (
        <Link to={route} className={`py-[12px] no-underline px-8 transition duration-300 ${bg_color} ${color} ${hover_color} ${hover_bg_color} cursor-pointer text-md outline-none ${border} border-[#03041c] flex items-center justify-center gap-1 ${className}`}>{text}</Link>
    )
}

export default Button