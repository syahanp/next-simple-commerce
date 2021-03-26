import React, { createContext, useContext, useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import api from 'api'
import Head from 'next/head'

import Navbar from 'components/Navbar'
import ProductContainer from 'containers/ProductContainer'

const ProductContext = createContext(null)

export const useProductContext = () => {
    return useContext(ProductContext)
}

const products = ({ productList }) => {
    const [products, setProducts] = useState<Object[] | Object>([])
    const [isLoading, setLoading] = useState<Boolean>(true)
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        if (productList.length > 0) {
            setProducts(productList)
            setLoading(false)
        }
    }, [productList])

    const contextValue = {
        products, 
        setProducts,
        isLoading,
        filter,
        setFilter
    }

    return (
        <ProductContext.Provider value={contextValue}>
            <Head>
                <title>Products | SimpleCommerce</title>
                <meta name="description" content="Our products available"/>
            </Head>

            <Navbar />
            <ProductContainer />
        </ProductContext.Provider>
    )
}

export default products

export const getStaticProps:GetStaticProps = async () => {
    let productList = []

    await api.get(`/products`)
    .then(res => {
        productList = res.data
    })
    .catch(err => {
        console.log(err.response);
    })
    
    return {
        props: {productList}
    }
}