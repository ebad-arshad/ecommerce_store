import Forgot_Form from '../../components/Forgot_Form/Forgot_Form'
import './forgot_container.scss'
import { useNavigate } from 'react-router-dom'

const Forgot_Container = () => {

    const navigate = useNavigate()

    return (
        <div className="forgot_container w-full border grid place-items-center py-48">
            <div className='py-14 px-20 w-[580px]'>
                <h3 className='font-bold text-center'>Forgot Password?</h3>
                <p className='text-center text-[#525258] text-[15px] mb-6'>Enter your email address to request password reset.</p>
                <Forgot_Form />
                <span className='text-sm text-[#525258] flex justify-center mt-3 gap-1 font-semibold'>Remember your password? <span onClick={() => navigate('/login')} className='text-[#f50963] cursor-pointer'>Login</span></span>
            </div>
        </div>
    )
}

export default Forgot_Container