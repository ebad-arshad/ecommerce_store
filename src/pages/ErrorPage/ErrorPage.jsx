import React from 'react'
import Subscribe from '../../containers/Subscribe/Subscribe'
import Lottie from 'react-lottie';
import animationData from '../../assets/gifs/error_404.json'
import './errorPage.scss'
import Button from '../../components/Button/Button';
import { useEffect } from 'react';
import { useState } from 'react';

const ErrorPage = () => {

    const [resize, set_resize] = useState(600)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        addEventListener('resize', () => {
            if (window.innerWidth <= 600) set_resize(window.innerWidth)
        })
    }, [])

    return (
        <>
            <div className='errorPage min-h-screen sm:px-16 flex flex-col items-center pt-16'>
                <div className=''>
                    <Lottie options={defaultOptions}
                        height={resize}
                        width={resize}
                    />
                </div>
                <div className='text-center w-full'>
                    <b className='error_heading text-5xl text-[#03041c]'>Oops! Page not found</b>
                    <p className='my-3 text-[#525258]'>Whoops, this is embarassing. Looks like the page you were <br /> looking for was not found.</p>
                    <Button text='Back to Home' className='font-bold w-fit mx-auto' route='/home' color='text-[#fff]' bg_color='bg-[#f50963]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#03041c]' />
                </div>
            </div>
            <Subscribe />
        </>
    )
}

export default ErrorPage