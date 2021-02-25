import React from 'react'
import Link from 'next/link'
import Text from 'components/Text'
import { formatRupiah } from 'helper'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'

interface Props {
    product: any
}

const Product:React.FC<Props> = ({ product }) => {
    const router = useRouter()

    if (!Cookie.getJSON('user')) {
        router.push('/')
        return null
    }

    return (
        <Link href={`/products/${product.slug}`}>
            <a className="h-auto border border-gray-200 rounded-md">
                <img
                    className='rounded-tl-md rounded-tr-md'
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${product.img.url}`} 
                    alt={product.img.name}
                />

                <div className='p-4'>
                    <div className='mb-4'>
                        <Text variant='p'>{product.name}</Text>
                    </div>

                    <div className='mb-4'>
                        <Text variant='h5'>Rp. {formatRupiah(product.price)}</Text>
                    </div>

                    <div className='flex justify-between items-center mb-6'>
                        <div className='flex text-sm'>
                            <img className='inline-block mr-2' src="/icon/star.svg" alt=""/>
                            <div className='inline-block text-yellow-primary'>{product.rating}</div>
                        </div>
                        <div className='text-gray-400 text-sm'>
                            Terjual {product.sold}
                        </div>
                    </div>

                    <div className='text-gray-400 text-sm'>
                        {product.location}
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Product
