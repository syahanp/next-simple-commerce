import React from 'react'

export const LeftArrow = () => {
    return (
        <svg className='h-8 w-8 text-gray-700' fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
        </svg>
    )
}

export const RightArrow = () => {
    return (
        <svg className='h-8 w-8 text-gray-700' fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
        </svg>
    )
}
