import React, { useState } from 'react'
import './hero.css'
import { useEffect } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/firebase';


const Hero = () => {

    const [img, set_img] = useState('')
    useEffect(() => onSnapshot(doc(db, "banner", "banner"), (doc) => {
        set_img(doc.data().imgURL);
    }), [])

    return (
        <div className='hero relative flex px-16 overflow-hidden z-10'>
            <img className='object-contain w-full h-full' src={img} alt="banner" />
        </div>
    )
}

export default Hero