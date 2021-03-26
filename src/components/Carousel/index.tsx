import React, { useCallback, useEffect, useState } from 'react';
import style from './style.module.css';
import { wrap } from 'popmotion'
import { AnimatePresence, motion } from 'framer-motion';
import { images } from './images';

import Arrow from './Arrow';

const imgVariants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
}

const Carousel = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    // from popmotion, reset to specific number (first args) when it breaches the defined range.
    // it useful when carousel pagination at max images.length and we click next, it will
    // back to index zero. Infinite carousel loop
    const imgIndex = wrap(0, images.length, page);

    const setPagination = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    }

    return (
        <div className='relative overflow-x-hidden'>

            <AnimatePresence initial={false} custom={direction}>
                <div 
                    className={`${style['carousel-container']} ${images[imgIndex].bg}`}
                >
                    <motion.img
                        key={page}
                        custom={direction}
                        src={images[imgIndex].img}
                        variants={imgVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 350, damping: 25 },
                            opacity: { duration: 0.2 }
                        }}
                        className='shadow-lg rounded-lg'
                        alt="deals"
                    />
                </div>
            </AnimatePresence>
            
            <Arrow variant='left' onClick={() => setPagination(-1)} />
            <Arrow variant='right' onClick={() => setPagination(1)} />
        </div>
    )
}

export default Carousel
