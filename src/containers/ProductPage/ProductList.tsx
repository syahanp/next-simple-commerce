import React, { useEffect } from 'react'
import { useProductContext } from 'pages/products';
import Product from 'components/Product';

interface Props {
    className?: string
}

const ProductList:React.FC<Props> = ({ className }) => {
    const { products, isLoading, filter } = useProductContext()

    console.log(filter);

    useEffect(() => {
        console.log(products);
    }, [products])
    
    if (!isLoading) {
        return (
            <div className={className}>
                <div className="grid grid-cols-3 gap-12">
                    {
                        products.map(product => {
                            if (filter && filter === product.type) {
                                return <Product key={product.id} product={product} />    
                            }
                            return (
                                <Product key={product.id} product={product} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    return null
}

export default ProductList
