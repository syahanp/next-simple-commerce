import Link from 'next/link'
import React from 'react'

interface Props {
    size?: 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' 
}

const Logo:React.FC<Props> = ({ size = 'text-3xl' }) => {
    return (
        <Link href='/products'>
            <a className={`font-extrabold ${size}`}>
                <span className='text-gray-700'>Simple</span>
                <span className="text-yellow-primary">Commerce</span>
            </a>
        </Link>
    )
}

export default Logo
