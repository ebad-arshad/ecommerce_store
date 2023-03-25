import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Subscribe from '../../containers/Subscribe/Subscribe'
import Empty_Cart from '../../containers/Empty_Cart/Empty_Cart'
import My_Cart from '../../containers/My_Cart/My_Cart'
import { RxDotFilled } from 'react-icons/rx'

const Cart = () => {
    return (
        <>
            <Breadcrumb route_name={[{ name: 'Home', route: '/home', }, { name: 'Cart', route: '/cart', }]} name='My Cart' separator={<RxDotFilled />} />
            {/* <Empty_Cart /> */}
            <My_Cart />
            <Subscribe />
        </>
    )
}

export default Cart