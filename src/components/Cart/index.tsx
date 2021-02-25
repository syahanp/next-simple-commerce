import React, { useCallback } from 'react'
import Button from 'components/Button'
import Text from 'components/Text'
import CartSingle from 'components/CartSingle'
import { useGlobalContext } from 'context/GlobalContext'
import { formatRupiah } from 'helper'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'

const Cart = () => {

    const { 
        cartItems, 
        setCartIsOpen, 
        cartIsOpen,
        totalPrice,
        setCartItems
    } = useGlobalContext()

    const router = useRouter()

    const handleCheckout = useCallback(() => {
        router.push('/checkout')
        setCartItems([])
        setCartIsOpen(false)
    }, [])

    return (
        <AnimatePresence>
        {
            cartIsOpen &&
            <>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: .6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .1 }}
                    className="fixed top-0 left-0 w-screen h-screen bg-black opacity-60 z-10"
                />

                <motion.div 
                    initial={{ x: 600, }}
                    animate={{ x: 0 }}
                    exit={{ x: 600 }}
                    transition={{ duration: .3 }}
                    className="fixed top-0 right-0 bg-white w-cart-sidebar h-screen overflow-y-auto py-4 px-12 z-20"
                >
                    <div className="mb-2 flex justify-between items-center">
                        <div>
                            <div className='text-h3 text-gray-700 font-bold'>
                                My Cart
                            </div>
                            <div className="text-gray-400 text-lg">
                                {cartItems.length} items
                            </div>
                        </div>

                        <div onClick={() => setCartIsOpen(false)} className='cursor-pointer'>
                            <img src="/icon/close.svg" alt=""/>
                        </div>
                    </div>

                    {
                        cartItems.length > 0 ?
                        <div className='divide-y border-gray-100 mb-4'>
                            {
                                cartItems.map(item => {
                                    return <CartSingle item={item} />
                                })
                            }
                        </div> :
                        <div className='text-center text-gray-400 py-8'>
                            You haven't add item to your cart yet.
                        </div>
                    }

                    <div className='mb-4'>
                        <div className='text-gray-400 text-md'>Total price</div>
                        <Text variant='h4'>Rp. {formatRupiah(totalPrice)}</Text>
                    </div>

                    {
                        cartItems.length > 0 &&
                        <Button onClick={handleCheckout}>CHECKOUT NOW</Button>
                    }
                </motion.div>
            </>
        }
        </AnimatePresence>
    )

    return null
}

export default Cart
