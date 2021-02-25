import React, { useEffect } from 'react'
import api from 'api'
import ProductList from './ProductList'
import Filter from './Filter'

const ProductPage = () => {

    return (
        <div className="max-w-7xl px-2 py-12 mx-auto">
            <div className="flex items-start">
                <Filter className='sm:h-auto lg:w-3/12' />
                <ProductList className='sm:h-auto lg:w-9/12' />
            </div>
        </div>
    )
}

export default ProductPage
