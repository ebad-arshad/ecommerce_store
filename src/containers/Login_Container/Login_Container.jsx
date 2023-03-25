import Login_Form from '../../components/Login_Form/Login_Form'
import './login_container.scss'
import { useNavigate } from 'react-router-dom'

const Login_Container = () => {

    const navigate = useNavigate()

    return (
        <div className="login_container w-full border grid place-items-center py-48">
            <div className='py-14 px-20 w-[580px]'>
                <h3 className='font-bold text-center'>Hello Again</h3>
                <p className='text-center text-[#525258] text-[15px] mb-6'>Enter your credentials to access your account.</p>
                <Login_Form />
                <span className='text-sm text-[#525258] flex justify-center mt-3 gap-1 font-semibold'>Don't have an account? <span onClick={() => navigate('/signup')} className='text-[#f50963] cursor-pointer'>Register Now</span></span>
            </div>
        </div>
    )
}

export default Login_Container