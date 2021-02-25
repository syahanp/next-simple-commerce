import React, { useCallback } from 'react'

interface Props {
    variant?: 'solid' | 'outline'
    color?: 'primary' | 'danger'
    stacked?: boolean
    onClick?: () => void
}

const Button:React.FC<Props> = ({ 
    children, 
    variant = 'solid', 
    stacked = false, 
    color = 'primary',
    onClick
}) => {
    
    const stackedProps = stacked ? 'w-full text-center' : 'w-auto'

    const bgColor = useCallback(() => {
        switch (variant) {
            case 'solid':
                if (color === 'primary') {
                    return 'bg-yellow-primary'
                }
                if (color === 'danger') {
                    return 'bg-yellow-danger'
                }

            case 'outline': 
                if (color === 'primary') {
                    return 'bg-transparent border border-yellow-primary hover:bg-yellow-primary hover:text-white transition'
                }
                if (color === 'danger') {
                    return 'bg-transparent border border-red-danger hover:bg-danger-primary hover:text-white transition'
                }
        }
    }, [])

    const textColor = useCallback(() => {
        switch (variant) {
            case 'solid':
                return 'text-white'

            case 'outline': 
                if (color === 'primary') {
                    return 'text-yellow-primary'
                }
                if (color === 'danger') {
                    return 'text-red-danger'
                }
        }
    }, [])

    switch (variant) {
        case 'solid':
            return (
                <div onClick={onClick} className={`${stackedProps} ${bgColor()} ${textColor()} inline-block px-6 py-4 mb-4 text-lg font-medium rounded-md cursor-pointer`}>
                    { children }
                </div>
            )
        case 'outline':
            return (
                <div onClick={onClick} className={`${stackedProps} ${bgColor()} ${textColor()} inline-block px-6 py-4 mb-4 text-lg font-medium rounded-md cursor-pointer`}>
                    { children }
                </div>
            )
    }

}

export default Button
