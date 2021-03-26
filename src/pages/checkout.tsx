import React, { useEffect } from 'react'
import Navbar from 'components/Navbar'
import Link from 'next/link'
import Head from 'next/head'

const Checkout = () => {
    
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
                <h1>Checkout Success</h1>
                <div className='max-w-lg text-center mx-auto text-gray-400'>
                    We will be send your checkout items to your email in a second. Check your email to continue payment process
                </div>
            </div>
            
        </>
    )
}

export default Checkout
