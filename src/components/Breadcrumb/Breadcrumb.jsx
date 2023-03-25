import { Breadcrumb as Breadcrumb_Comp } from 'antd';
import './breadcrumb.scss'
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa'

const Breadcrumb = ({ route_name, separator, name }) => {


    return (
        <div className="breadcrumb_comp h-[50vh] border bg-[#f0f2ee] flex flex-col items-center justify-center">
        <h1 className='text-[70px] text-[#03041c] font-bold mt-20'>{name}</h1>
            <div>
                <Breadcrumb_Comp
                    separator={separator ? separator : <FaAngleRight />}
                    items={route_name.map((route, index) => {
                        return {
                            title:
                                <Link
                                    className={`text-[15px] bg-transparent ${route_name.indexOf(route_name[route_name.length - 1]) === index ? '!text-[#525258] cursor-text' : '!text-[#03041c] hover:!text-[#f50963]'}`}
                                    to={route.route}
                                >{route.icon} {route.name}</Link>
                        }
                    })}
                />
            </div>
        </div>
    )
}

export default Breadcrumb