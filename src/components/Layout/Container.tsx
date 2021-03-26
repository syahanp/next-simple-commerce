import React from 'react'

interface Props {
    className?: string
}

const Container:React.FC<Props> = ({ children, className }) => {
    return (
        <div className={`max-w-7xl mx-auto ${className}`}>
            { children }
        </div>
    )
}

export default Container
