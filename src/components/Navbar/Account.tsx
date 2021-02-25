import React from 'react';
import Cookie from 'js-cookie'
import { useRouter } from 'next/router';

interface Props {
    className?: string
}

const Account:React.FC<Props> = ({ className }) => {
    const router = useRouter()

    return (
        <div className={className}>
            <div className='relative flex p-1'>
                <img className='mr-4' src="/icon/account.svg" />
                <div>
                    <div className='text-gray-700 font-medium'>
                        {Cookie.getJSON('user') ? Cookie.getJSON('user').fullname : ''}
                    </div>
                    <a 
                        className='block text-red-primary text-xs cursor-pointer'
                        onClick={() => {
                            Cookie.remove('user')
                            router.push('/')
                        }}
                    >
                        Logout
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Account
