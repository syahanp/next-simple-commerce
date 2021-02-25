import React, { useEffect } from 'react';
import { useRouter }  from 'next/router';
import { GetStaticPaths } from 'next';
import api from 'api';
import Navbar from 'components/Navbar';
import Text from 'components/Text';
import { formatRupiah } from 'helper';
import Button from 'components/Button';
import { useGlobalContext } from 'context/GlobalContext';
import Link from 'next/link'
import Cookie from 'js-cookie'
import Head from 'next/head';

const ProductSingle = ({ product }) => {
    const { addItem, cartItems, setCartIsOpen } = useGlobalContext()

    const router = useRouter()

    useEffect(() => {
        if (!Cookie.getJSON('user')) {
            router.push('/')
            return null
        }
    }, [])

    return (
        <>
            <Head>
                <title>{router.query.slug} | SimpleCommerce</title>
                <meta name="description" content="Our products available"/>
            </Head>
            <Navbar />
            <div className='bg-gray-50'>
                <div className='max-w-7xl px-2 py-6 mx-auto'>
                    <Link href='/'><a>Home</a></Link>  /  <Link href='/products'><a>Products</a></Link>  /  {router.query.slug}
                </div>
            </div>
            <div className="max-w-7xl px-2 py-12 mx-auto">
                <div className="flex items-start">
                    <div className='sm:h-auto lg:w-4/12' >
                        <img className='w-full' src={`${process.env.NEXT_PUBLIC_BASE_URL}${product.img.url}`} alt=""/>
                    </div>
                    <div className='sm:h-auto lg:w-8/12 pl-12'>
                        <div className='mb-6'>
                            <div className='text-gray-700 text-3xl font-medium mb-4'>
                                {product.name}
                            </div>
                            <div className='flex items-center'>
                                <div className='flex text-sm mr-4'>
                                    <img className='inline-block mr-2' src="/icon/star.svg" alt=""/>
                                    <div className='inline-block text-yellow-primary'>{product.rating}</div>
                                </div>
                                <div className='text-gray-400 text-sm mr-4'>
                                    {product.location}
                                </div>
                                <div className='text-gray-400 text-sm mr-2'>
                                    Terjual {product.sold}
                                </div>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <Text variant='h2'>Rp. {formatRupiah(product.price)}</Text>
                        </div>

                        <div className='mb-8'>
                            <Text>{product.description}</Text>
                        </div>

                        {   
                            cartItems.filter(x => x.id === product.id).length > 0 ?
                            <>
                                <div className='text-md text-gray-400 mb-2'>
                                    You have this item in your cart
                                </div>
                                <Button onClick={() => setCartIsOpen(true)} variant='outline'>SEE CART</Button>
                            </> :
                            <Button onClick={() => addItem(product)}>ADD TO CART</Button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export const getStaticPaths:GetStaticPaths = async () => {
    // get semua data product, karena kita perlu slug dari setiap product
    const { data } = await api.get(`products`)

    return {
        paths: data.map(x => ({
            params: { slug: String(x.slug) }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    // fetch data berdasarkan slug di url
    const { data } = await api.get(`products?slug=${slug}`)

    return {
        props: {
            product: data[0] // filter strapi pasti return array
        }
    }
}

export default ProductSingle
