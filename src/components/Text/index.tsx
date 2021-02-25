import React from 'react'

interface Props {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p'
    extend?: string
    color?: string
}

const Text:React.FC<Props> = ({
    children,
    variant = 'p',
    extend,
    color = 'text-gray-700'
}) => {
    
    switch (variant) {
        case 'h1':
            return (
                <h1 className={`${extend} ${color} text-h1 font-bold`}>
                    {children}
                </h1>
            )
        case 'h2':
            return (
                <h2 className={`${extend} ${color} text-h2 font-bold`}>
                    {children}
                </h2>
            )
        case 'h3':
            return (
                <h3 className={`${extend} ${color} text-h3 font-bold`}>
                    {children}
                </h3>
            )
        case 'h4':
            return (
                <h4 className={`${extend} ${color} text-h4 font-medium`}>
                    {children}
                </h4>
            )
        case 'h5':
            return (
                <h5 className={`${extend} ${color} text-h5 font-medium`}>
                    {children}
                </h5>
            )
        case 'p':
            return (
                <p className={`${extend} ${color} text-paragraph font-normal`}>
                    {children}
                </p>
            )
    }
}

export default Text
