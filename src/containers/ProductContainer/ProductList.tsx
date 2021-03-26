import React, { useEffect } from 'react'
import { useProductContext } from 'pages/products';
import Product from 'components/Product';

interface Props {
    className?: string
}

const ProductList:React.FC<Props> = ({ className }) => {
    const { products, isLoading } = useProductContext()

    useEffect(() => {
        console.log(products);
    }, [])
    
    if (!isLoading) {
        return (
            <div className={className}>
                <div className="grid grid-cols-3 gap-12">
                    {
                        products.map(product => {
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
