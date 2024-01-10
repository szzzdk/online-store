import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./ListServices.css";
import Number01 from "../../assets/number01.svg";
import Number02 from "../../assets/number02.svg";
import Number03 from "../../assets/number03.svg";
import Number04 from "../../assets/number04.svg";
import { ListItem } from "./ListItem";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ctrl + alt + f
const data = [
    {
        src: Number01,
        title: "Лендинг",
        price: 150000,
        color: "#282929",
        description:
            "Одностраничный сайт для сбора контактов от посетителей или продажи товара/услуги",
        left: 220,
    },
    {
        src: Number02,
        title: "Многостраничник",
        price: 250000,
        color: "#3a3b3b",
        description:
            "Классический сайт, навигация по которому осуществляется с помощью меню",
        left: 20,
    },
    {
        src: Number03,
        title: "Интернет-магазин",
        price: 300000,
        color: "#4a4b4b",
        description:
            "Классический сайт, навигация по которому осуществляется с помощью меню",
        left: 30,
    },
];

const listItemVariants = {
    offscreen: (index) => ({
        y: -15 * index,
        opacity: -1,
    }),
    onscreen: (index) => ({
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            zIndex: 200,
            stiffness: 100, // Меньше значение для более мягкой анимации
            damping: 10, // Увеличение для более плавного замедления
            duration: 0.8, // Увеличенная продолжительность анимации
            delay: index * 0.15, // Чуть большая задержка между элементами
        },
    }),
};

const ListServices = () => {
    const controls1 = useAnimation(); // контроллер анимации для управления анимацией каждого элемента.
    const [ref1, inView1] = useInView(); // Отслеживает, когда элемент появляется в области видимости пользователя.

    const controls5 = useAnimation();
    const [ref5, inView5] = useInView();

    React.useEffect(() => {
        if (inView1) {
            controls1.start("onscreen");
        } else {
            controls1.start("offscreen");
        }
    }, [controls1, inView1]);

    React.useEffect(() => {
        if (inView5) {
            controls5.start("onscreen");
        } else {
            controls5.start("offscreen");
        }
    }, [controls5, inView5]);

    return (
        <div className="services__main__container">
            <ListGroup className="services__container">
                <motion.div
                    ref={ref1}
                    initial="offscreen"
                    animate={controls1}
                    variants={listItemVariants}
                >
                    <ListGroup.Item className="bootstr__item1">
                        <div className="item__services">
                            <p className="services__name">Услуги</p>
                            <button className="services__btn1">
                                Ничего не понятно, хочу просто сайт
                            </button>
                        </div>
                    </ListGroup.Item>
                </motion.div>
                {data.map((x) => {
                    return <ListItem {...x} />;
                })}
                <motion.div
                    ref={ref5}
                    initial="offscreen"
                    animate={controls5}
                    variants={listItemVariants}
                >
                    <ListGroup.Item className="bootstr__item5">
                        <div className="item__service">
                            <div className="item">
                                <img
                                    src={Number04}
                                    alt="number01"
                                    width="40"
                                    height="40"
                                    className="service__img"
                                />
                                <p className="service__name">
                                    Дополнительные услуги
                                </p>
                            </div>
                            <div>
                                <button className="services__btn2 btn5">
                                    Обсудить
                                </button>
                            </div>
                        </div>
                        <div>
                            <span className="service__about">
                                Дизайн баннеров, продвижение сайтов и многое
                                другое. Цена обговаривается индивидуально
                            </span>
                        </div>
                    </ListGroup.Item>
                </motion.div>
            </ListGroup>
        </div>
    );
};

export default ListServices;
