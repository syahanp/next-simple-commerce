import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatRupiah } from 'helper'

interface Props {
    product: any
}

const Product:React.FC<Props> = ({ 
    product: {
        slug,
        img,
        name,
        price,
    }
}) => {

    return (
        <Link href={`/products/${slug}`}>
            <a className="h-auto w-80 py-6 px-8 bg-white shadow-md rounded-md text-center">
                <div className='p-6'>
                    <Image
                        className='h-auto w-auto'
                        src={`${img.url}`} 
                        alt={img.name}
                        layout='responsive'
                        height={200}
                        width={200}
                    />
                </div>

                <div>
                    <p className='mb-4'>{name}</p>
                    <h5 className='font-bold'>Rp. {formatRupiah(price)}</h5>
                </div>
            </a>
        </Link>
    )
}

export default Product
