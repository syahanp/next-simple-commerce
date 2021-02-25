import React, { useEffect } from 'react'
import Navbar from 'components/Navbar'
import Link from 'next/link'
import Text from 'components/Text'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Checkout = () => {
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
                <title>Checkout Success | SimpleCommerce</title>
                <meta name="description" content="Checkout items sent to your email"/>
            </Head>

            <Navbar />
            <div className='bg-gray-50'>
                <div className='max-w-7xl px-2 py-6 mx-auto'>
                    <Link href='/'><a>Home</a></Link>  /  <Link href='/products'><a>Products</a></Link>  /  Checkout
                </div>
            </div>

            <div className='mx-auto flex flex-col items-center py-12'>
                <img src="/icon/success.svg" className='mb-8' />
                <Text variant='h1'>Checkout Success</Text>
                <div className='max-w-lg text-center mx-auto text-gray-400'>
                    We will be send your checkout items to your email in a second. Check your email to continue payment process
                </div>
            </div>
            
        </>
    )
}

export default Checkout
