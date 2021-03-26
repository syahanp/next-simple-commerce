import React from 'react'
import style from './style.module.css';
import Product from 'components/Product'

const RecommendedProductList = ({ items }) => {

    console.log(items);

    return (
        <div className='mb-10'>
            <h3 className='mb-4 font-bold'>Recommended For You</h3>

            <div className={style.recommended_list}>
                {
                    items.length > 0 &&
                    items.map((x:any) => {
                        return <Product product={x} />
                    })
                }
            </div>
        </div>
    )
}

export default RecommendedProductList
