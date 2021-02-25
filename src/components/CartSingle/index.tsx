import Text from 'components/Text'
import { useGlobalContext } from 'context/GlobalContext'
import { formatRupiah } from 'helper'
import React, { useCallback, useEffect, useState } from 'react'

const CartSingle = ({ item }) => {
    const { removeItem, calculatePriceItem } = useGlobalContext()
    const [count, setCount] = useState(1)

    const setItems = useCallback((multiplier: 'add' | 'remove') => {
        multiplier === 'remove' && setCount(prev => prev-1)
        multiplier === 'add' && setCount(prev => prev+1)

        calculatePriceItem(item.id, multiplier)
    }, [])

    return (
        <div key={item.id} className="flex items-start h-auto py-6">
            <div className='w-2/12'>
                <img
                    className='rounded-md'
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.img.url}`} 
                    alt={item.img.name}
                />
            </div>
            <div className='w-10/12 px-4'>
                <div className='mb-5 text-sm text-gray-700'>
                    {item.name}
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='text-gray-400 text-sm'>Price</div>
                        <Text variant='h5'>Rp. {formatRupiah(item.price*count)}</Text>
                    </div>
                    <div className='flex'>
                        <div 
                            onClick={() => count > 1 && setItems('remove')} 
                            className='w-8 h-8 bg-gray-200 flex justify-center items-center rounded-sm cursor-pointer select-none'
                        >
                            -
                        </div>
                        <div className='w-12 h-8 bg-white flex justify-center items-center rounded-sm'>
                            {count}
                        </div>
                        <div 
                            onClick={() => setItems('add')} 
                            className='w-8 h-8 bg-gray-200 flex justify-center items-center rounded-sm cursor-pointer select-none'
                        >
                            +
                        </div>
                        <img 
                            onClick={() => removeItem(item.id)} 
                            className='ml-4 cursor-pointer' src="/icon/trash.svg" 
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartSingle
