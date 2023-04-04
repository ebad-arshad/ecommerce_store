import React, { useState } from 'react'
import './popular_products.css'
import Heading_Title from '../../components/Heading_Title/Heading_Title'
import Product_Card from '../../components/Product_Card/Product_Card'
import { top_rated, best_selling, latest_product } from '../../api/product'
import { useEffect } from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase/firebase'

const Popular_Products = () => {
    const [active_product_btn, set_active_product_btn] = useState(0)
    const [active_product_list, set_active_product_list] = useState([])

    const active_name = () => active_product_btn === 0 ? 'Top Rated' : active_product_btn === 1 ? 'Best Selling' : active_product_btn === 2 ? 'Latest Product' : null;

    useEffect(() => {
        const q = query(collection(db, active_name()));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            set_active_product_list([])
            querySnapshot.forEach((doc) => {
                set_active_product_list(e => [...e, doc.data()]);
            });
        });
        return () => unsubscribe()
    }, [active_product_btn])

    return (
        <div className='sm:mx-16 px-4'>
            <div className='flex flex-col justify-between items-start md:flex-row md:items-center mb-8 gap-4'>
                <Heading_Title text='Popular Products' />
                <ul className='flex gap-6 text-sm p-0 m-0'>
                    <li onClick={() => {set_active_product_btn(0);set_active_product_list([])}} className={`px-2 transition duration-200 cursor-pointer py-1 ${active_product_btn === 0 ? 'text-[#f50963] border-b-[#f50963] font-bold border-b-2' : 'text-[#525258] hover:font-bold hover:text-[#f50963]'}`}>Top Rated</li>
                    <li onClick={() => {set_active_product_btn(1);set_active_product_list([])}} className={`px-2 transition duration-200 cursor-pointer py-1 ${active_product_btn === 1 ? 'text-[#f50963] border-b-[#f50963] font-bold border-b-2' : 'text-[#525258] hover:font-bold hover:text-[#f50963]'}`}>Best Selling</li>
                    <li onClick={() => {set_active_product_btn(2);set_active_product_list([])}} className={`px-2 transition duration-200 cursor-pointer py-1 ${active_product_btn === 2 ? 'text-[#f50963] border-b-[#f50963] font-bold border-b-2' : 'text-[#525258] hover:font-bold hover:text-[#f50963]'}`}>Latest Product</li>
                </ul>
            </div>
            <div className='row gy-4'>
                {active_product_list.map((product, index) => <Product_Card key={index} id={index + 1} {...product} />)}
            </div>
        </div>
    )
}

export default Popular_Products