import React from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const listItemVariants = {
    offscreen: index => ({
        y: -15 * index,
        opacity: -1
    }),
    onscreen: index => ({
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            zIndex: 200,
            stiffness: 100, // Меньше значение для более мягкой анимации
            damping: 10,    // Увеличение для более плавного замедления
            duration: 0.8,    // Увеличенная продолжительность анимации
            delay: index * 0.15 // Чуть большая задержка между элементами
        }
    })
};


const ListStep = ({ src, step, alt}) => {
    const controls = useAnimation(); // контроллер анимации для управления анимацией каждого элемента.
    const [ref, inView] = useInView(); // Отслеживает, когда элемент появляется в области видимости пользователя. 

    React.useEffect(() => {
        if (inView) {
        controls.start("onscreen");
        } else {
        controls.start("offscreen");
        }
    }, [controls, inView]);

    return (
        <motion.div ref={ref} initial="offscreen" animate={controls} variants={listItemVariants}>       
            <div className='step'>
                <img 
                    src={src}
                    alt={alt}
                    width="45"
                    height="50" 
                />
                <span>
                    {step}
                </span> 
            </div>
        </motion.div>
    )
}

export default ListStep