import React from 'react'
import style from './style.module.css';
import PulseLoader from 'react-spinners/PulseLoader'

interface Props {
    variant?: 'solid-primary' | 'outline-primary' | 'solid-danger' | 'outline-danger'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    stacked?: boolean
    isLoading?: boolean
    onClick?: () => void
}

const Button:React.FC<Props> = ({ 
    children, 
    size = 'md',
    variant = 'solid-primary', 
    stacked = false, 
    isLoading = false,
    onClick
}) => {
    
    const isStacked = stacked ? style.isStacked : ''

    return (
        <div className={`${style[`btn-${variant}`]} ${isStacked}`}>
            { children }
        </div>
    )
}

export default Button
