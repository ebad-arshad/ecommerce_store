import Signup_Form from '../../components/Signup_Form/Signup_Form'
import './signup_container.scss'
import { useNavigate } from 'react-router-dom'

const Signup_Container = () => {

    const navigate = useNavigate()

    return (
        <div className="signup_container  w-full border grid place-items-center py-48">
            <div className='py-14 px-20 w-[580px]'>
                <h3 className='font-bold text-center text-3xl'>Register Now!</h3>
                <p className='text-center text-[#525258] text-[15px] mb-6'>You can signup with you social account below</p>
                <Signup_Form />
                <span className='text-sm text-[#525258] flex justify-center mt-3 gap-1 font-semibold'>Already have an account? <span onClick={() => navigate('/login')} className='text-[#f50963] cursor-pointer'>Log in</span></span>
            </div>
        </div>
    )
}

export default Signup_Container 