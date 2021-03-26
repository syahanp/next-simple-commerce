import Product from 'components/Product'
import React from 'react'

const Recommended = ({ items }) => {

    console.log(items);

    return (
        <div className='mb-10'>
            <h3 className='mb-6 font-bold'>Recommended For You</h3>

            {
                items.length > 0 && <Product product={items[0]} />
            }
        </div>
    )
}

export default Recommended
