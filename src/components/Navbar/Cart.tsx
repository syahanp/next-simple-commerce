import { useGlobalContext } from 'context/GlobalContext'
import React from 'react'

interface Props {
    className?: string
}

const Cart:React.FC<Props> = ({ className }) => {

    const { cartItems, setCartIsOpen } = useGlobalContext()

    return (
        <div className={`${className} cursor-pointer`} onClick={() => setCartIsOpen(true)}>
            <div className='relative p-1'>
                <img src="/icon/cart.svg" />
                
                {/* Cart notification */}
                <div className='absolute w-5 h-5 flex justify-center items-center bg-red-primary text-xs rounded-full top-0 right-0 text-white'>
                    {cartItems.length}
                </div>
            </div>
        </div>
    )
}

export default Cart
