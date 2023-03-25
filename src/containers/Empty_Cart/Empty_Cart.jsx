import './empty_cart.scss'
import { empty_cart } from '../../assets/images/index'
import Button from '../../components/Button/Button'

const Empty_Cart = () => {
    return (
        <div className='flex flex-col justify-center pt-48 items-center min-h-[75vh]'>
            <div>
                <img src={empty_cart} alt="" />
            </div>
            <p className='text-[#03041c] mt-8'>Your Cart is empty</p>
            <div>
                <Button route='/shop' className='font-bold' text='Go to Shop' color='text-[#03041c]' bg_color='bg-[#f0f2ee]' hover_color='hover:text-[#fff]' hover_bg_color='hover:bg-[#03041c]' />
            </div>
        </div>
    )
}

export default Empty_Cart