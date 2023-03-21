import './banner.css'
import Button from '../Button/Button'

const Banner = () => {
    return (
        <div className='banner sm:m-16 flex flex-col p-[100px] gap-2'>
            <p className='m-0 text-[#525258] text-[15px]'>Apple iPhone 12 Pro</p>
            <h1 className='text-[#03041c] font-extrabold sm:text-[44px] hover:text-[#f50963] transition duration-300 cursor-pointer'>The wait is on: iphone <br /> 12 max pro</h1>
            <p>Last call for up to<span className='text-[#03041c] font-extrabold text-2xl'> 32% </span>off!</p>
            <div className='button_banner w-fit'>
            <Button text='Buy now' color='text-[#03041c]' bg_color='bg-[#fff]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#f50963]' />
            </div>
        </div>
    )
}

export default Banner