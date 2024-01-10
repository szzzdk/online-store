import React from "react";
import { ListGroup } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const getButtonClass = (color) => {
    switch (color) {
        case "#282929": return "btn2";
        case "#3a3b3b": return "btn3";
        case "#4a4b4b": return "btn4";
        default: return "btn2";
    }
};

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


export const ListItem = ({ title, price, description, color, src, left }) => {

    const controls = useAnimation(); // возвращает ссылку (ref) и булево значение (inView), которое показывает,
    const [ref, inView] = useInView(); // 

    React.useEffect(() => {
        if (inView) {
        controls.start("onscreen");
        } else {
        controls.start("offscreen");
        }
    }, [controls, inView]);
    

    return (
        <motion.div ref={ref} initial="offscreen" animate={controls} variants={listItemVariants}>
            <ListGroup.Item
                className="bootstr__item"
                style={{
                    backgroundColor: color,
                    border: `1px solid ${color}`,
                }}
            >
                <div className="item__service">
                    <div className="item">
                        <img
                            src={src}
                            alt="number01"
                            width="40"
                            height="40"
                            className="service__img"
                        />
                        <p className="service__name">{title}</p>
                        <span style={{ marginLeft: left }} className="service__price price">
                            от {price} тенге
                        </span>
                    </div>
                    <div>
                        <button className={`services__btn2 ${getButtonClass(color)}`}>Подробнее</button>
                    </div>
                </div>
                <div>
                    <span className="service__about">{description}</span>
                </div>
            </ListGroup.Item>
        </motion.div>
    );
};