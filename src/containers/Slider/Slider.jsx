import SliderCard from '../../components/SliderCard/SliderCard'
import {
    slider_1
    , slider_2
    , slider_3
    , slider_4
    , slider_5
    , slider_6
    , slider_7
} from '../../assets/images/index'
import './slider.css'
import Slider_Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';

const Slider = () => {

    const [resize_value, set_resize_value] = useState(4)


    useEffect(() => {
        addEventListener('resize', () => {
            if (window.innerWidth >= 1200) {
                set_resize_value(4)
            }
            else if (window.innerWidth < 576) {
                set_resize_value(1)
            }
            else if (window.innerWidth < 992) {
                set_resize_value(2)
            }
            else if (window.innerWidth < 1200) {
                set_resize_value(3)
            }
        })
    }, [])

    const settings = {
        infinite: true,
        slidesToShow: resize_value,
        swipeToSlide: true
    };

    return (
        <>
            <div className='relative flex flex-col my-24 sm:mx-16 px-3'>
                <Slider_Slick className='w-full flex justify-between items-center cursor-pointer select-none' {...settings}>
                    <SliderCard img={slider_1} />
                    <SliderCard img={slider_2} />
                    <SliderCard img={slider_3} />
                    <SliderCard img={slider_4} />
                    <SliderCard img={slider_5} />
                    <SliderCard img={slider_6} />
                    <SliderCard img={slider_7} />
                </Slider_Slick>
            </div>
        </>
    )
}

export default Slider