import React from 'react'

interface Props {
    label?: string
    type: 'text' | 'email'
    name: string
    placeholder?: string
    value: any
    onChange: any
}

const Input: React.FC<Props> = ({
    label,
    placeholder = '',
    type,
    name,
    value,
    onChange
}) => {
    return (
        <label className="block mb-5">
            { label && <div className="text-gray-700 font-medium">{label}</div> }
            <input 
                type={type} 
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='form-input py-4 mt-2 block w-full bg-gray-50 placeholder-gray-400 rounded-sm hover:border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent' 
            />
        </label>
    )
}

export default Input
