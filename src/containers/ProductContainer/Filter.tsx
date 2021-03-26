import Text from 'components/Text'
import { useProductContext } from 'pages/products'
import React from 'react'

interface Props {
    className?: string
}

const Filter:React.FC<Props> = ({ className }) => {

    const { setFilter } = useProductContext()

    const handleCheckbox = (name) => {
        setFilter(name)
    }

    return (
        <div className={className}>
            <div className='mb-6'>
                <Text variant='h4'>Sort Items</Text>
            </div>
            
            <div className='mb-4'>
                <label className="flex items-center cursor-pointer" onClick={() => handleCheckbox('tas')}>
                    <input type="checkbox" className="form-checkbox mr-2 border border-gray-200 p-3 rounded-sm" />
                    <span className="ml-2">Tas</span>
                </label>
            </div>
            <div className='mb-4'>
                <label className="flex items-center cursor-pointer" onClick={() => handleCheckbox('baju')}>
                    <input type="checkbox" className="form-checkbox mr-2 border border-gray-200 p-3 rounded-sm" />
                    <span className="ml-2">Baju</span>
                </label>
            </div>
            <div className='mb-4'>
                <label className="flex items-center cursor-pointer" onClick={() => handleCheckbox('celana')}>
                    <input type="checkbox" className="form-checkbox mr-2 border border-gray-200 p-3 rounded-sm" />
                    <span className="ml-2">Celana</span>
                </label>
            </div>
        </div>
    )
}

export default Filter
