import './items_list.scss'
import { Table } from 'antd';
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react';
import { best_product_1 } from '../../assets/images/index'

const Items_List = () => {


    const [data, set_data] = useState([
        {
            key: 1,
            images: best_product_1,
            product: 'TECLAST Tablet Protective Cover Case',
            unit_price: 899,
            quantity: { quantity: 0, id: 1 },
            total: 0,
        },
        {
            key: 2,
            images: best_product_1,
            product: 'TECLAST Tablet Protective Cover Case',
            unit_price: 899,
            quantity: { quantity: 0, id: 2 },
            total: 0,
        },
    ])

    const amount_plus = (amount) => {
        if (amount.quantity < -1) return
        set_data(v => v.map((value, index) => {
            return amount.id - 1 === index ? { ...value, quantity: { ...value.quantity, quantity: value.quantity.quantity + 1 } } : value
        }))
    }

    const amount_minus = (amount) => {
        if (amount.quantity <= 0) return
        set_data(v => v.map((value, index) => {
            return amount.id - 1 === index ? { ...value, quantity: { ...value.quantity, quantity: value.quantity.quantity - 1 } } : value
        }))
    }

    const columns = [
        {
            title: 'Images',
            dataIndex: 'images',
            key: 'images',
            render: (img) => <img className='cursor-pointer w-[120px] h-[120px] mx-auto' src={img} alt="" />,
        },
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
            render: (text) => <a className='p-0 m-0 w-fit mx-auto text-[16px] text-[#03041c] hover:text-[#f50963] no-underline'>{text}</a>,
        },
        {
            title: 'Unit Price',
            dataIndex: 'unit_price',
            key: 'unit_price',
            render: (text) => <p className='p-0 m-0 w-fit mx-auto text-[16px]'>{text && `$${text}`}</p>,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (amount) => <div className='text-[#03041c] w-36 border flex py-1 mx-auto'>
                <span onClick={() => amount_minus(amount)} className='hover:text-[#f50963] grid place-items-center w-[40px] transition duration-300 cursor-pointer text-2xl'>-</span>
                <span className='grid place-items-center border-l-2 border-r-2 w-16 transition duration-300 text-sm'>{amount.quantity}</span>
                <span onClick={() => amount_plus(amount)} className='hover:text-[#f50963] grid place-items-center w-[40px] transition duration-300 cursor-pointer text-2xl'>+</span>
            </div>,
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (text) => <p className='p-0 m-0 w-fit mx-auto text-[16px]'>{text && `$${text.toFixed(2)}`}</p>,
        },
        {
            title: 'Remove',
            dataIndex: 'key',
            key: 'remove',
            render: (id) => <a onClick={() => delete_table_row(id)} className='flex justify-center !text-[#03041c] text-lg mx-auto w-fit'><RxCross2 id={id} className='cursor-pointer' /></a>,
        }
    ];

    const delete_table_row = (e) => {
        set_data(arr => arr.filter(item => item.key !== e))
    }

    return (
        <Table scroll={{ x: 'calc(500px + 50%)' }} pagination={false} size='middle' bordered={true} columns={columns} dataSource={data} />
    )
}

export default Items_List