import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatRupiah } from 'helper'
import style from './style.module.css';

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
            <a className={style.product_container}>
                <div className={style.product_image}>
                    <img src={img.url} alt={img.name}/>
                </div>

                <div className={style.product_metadata}>
                    <p>{name}</p>
                    <h5>Rp. {formatRupiah(price)}</h5>
                </div>
            </a>
        </Link>
    )
}

export default Product
