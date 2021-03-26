import React from 'react'
import style from './style.module.css';
import Product from 'components/Product'

const TrendingProductList = ({ items }) => {

    console.log(items);

    return (
        <div className='mb-10'>
            <h3 className='mb-4 font-bold'>Trending Right Now 🔥</h3>

            <div className={style.list_container}>
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

export default TrendingProductList
