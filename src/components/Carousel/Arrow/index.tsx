import React from 'react';
import style from '../style.module.css';
import { motion } from 'framer-motion';
import { RightArrow, LeftArrow } from './ArrowIcon';

interface Props {
    variant: 'left' | 'right'
    onClick?: () => void
}

const Arrow:React.FC<Props> = ({variant, onClick}) => {

    const arrowStyle = variant === 'left' ? style['arrow-left'] : style['arrow-right']

    return (
        <motion.div
            whileHover={{scale: 1.2}}
            whileTap={{ scale: .9 }}
            className={`${style['arrow-base']} ${arrowStyle}`}
            onClick={onClick}
        >
            { variant === 'left' ? <LeftArrow /> : <RightArrow /> }
        </motion.div>
    )
}

export default Arrow
