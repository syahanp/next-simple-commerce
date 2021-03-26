import React from 'react'

interface Props {
    className?: string
}

const Container:React.FC<Props> = ({ children, className }) => {
    return (
        <div className={`mx-auto px-8 lg:max-w-7xl lg:px-0 ${className}`}>
            { children }
        </div>
    )
}

export default Container
