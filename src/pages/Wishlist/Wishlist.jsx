import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Subscribe from '../../containers/Subscribe/Subscribe'
import Empty_Cart from '../../containers/Empty_Cart/Empty_Cart'
import { RxDotFilled } from 'react-icons/rx'
import My_Wishlist from "../../containers/My_Wishlist/My_Wishlist"

const Wishlist = () => {
    return (
        <>
            <Breadcrumb route_name={[{ name: 'Home', route: '/home', }, { name: 'Wishlist', route: '/wishlist', }]} name='My Wishlist' separator={<RxDotFilled />} />
            {/* <Empty_Cart /> */}
            <My_Wishlist />
            <Subscribe />
        </>
    )
}

export default Wishlist