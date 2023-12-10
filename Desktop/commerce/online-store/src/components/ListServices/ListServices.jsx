import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./ListServices.css";
import Number01 from "../../assets/number01.svg";
import Number02 from "../../assets/number02.svg";
import Number03 from "../../assets/number03.svg";
import Number04 from "../../assets/number04.svg";
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
          duration: 0.8,
          stiffness: 100, // Меньше значение для более мягкой анимации
          damping: 10,    // Увеличение для более плавного замедления
          duration: 1,    // Увеличенная продолжительность анимации
          delay: index * 0.15 // Чуть большая задержка между элементами
        }
    })
  };


const ListServices = () => {
    const controls1 = useAnimation(); // контроллер анимации для управления анимацией каждого элемента.
    const [ref1, inView1] = useInView(); // Отслеживает, когда элемент появляется в области видимости пользователя. 
    const controls2 = useAnimation(); // возвращает ссылку (ref) и булево значение (inView), которое показывает,
    const [ref2, inView2] = useInView(); // 
    const controls3 = useAnimation();
    const [ref3, inView3] = useInView();
    const controls4 = useAnimation();
    const [ref4, inView4] = useInView();
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
      if (inView2) {
        controls2.start("onscreen");
      } else {
        controls2.start("offscreen");
      }
    }, [controls2, inView2]);

    React.useEffect(() => {
        if (inView3) {
          controls3.start("onscreen");
        } else {
          controls3.start("offscreen");
        }
      }, [controls3, inView3]);

    
    React.useEffect(() => {
        if (inView4) {
            controls4.start("onscreen")
        } else {
            controls4.start("offscreen")
        }
    }, [controls4, inView4])

    React.useEffect(() => {
        if (inView5) {
            controls5.start("onscreen")
        } else {
            controls5.start("offscreen")
        }
    }, [controls5, inView5])

    
    
    return (
        <div className="services__main__container">
            <ListGroup className="services__container">
                <motion.div ref={ref1} initial="offscreen" animate={controls1} variants={listItemVariants}>
                    <ListGroup.Item className="bootstr__item1">
                        <div className="item__services">
                            <p className="services__title">Услуги</p>
                            <button className="services__btn1">
                                Ничего не понятно, хочу просто сайт
                            </button>
                        </div>
                    </ListGroup.Item>
                </motion.div>
                <motion.div ref={ref2} initial="offscreen" animate={controls2} variants={listItemVariants}>
                    <ListGroup.Item
                        className="bootstr__item"
                        style={{
                            backgroundColor: '#282929',
                            border: '1px solid #282929',
                        }}
                    >
                        <div className="item__service4">
                            <div className="item item1">
                                <img
                                    src={Number01}
                                    alt="number01"
                                    width="40"
                                    height="40"
                                    className="service__img"
                                />
                                <p className="service__title">Лендинг</p>
                            </div>
                            <div className="service__details">
                                <span className="service__price price1">
                                    от 150000 тенге 
                                </span>
                                <button className="services__btn2 btn2">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div>
                            <span className="service__description">
                                Одностраничный сайт для сбора контактов от посетителей или продажи товара/услуги
                            </span>
                        </div>
                    </ListGroup.Item>
                </motion.div>
                <motion.div ref={ref3} initial="offscreen" animate={controls3} variants={listItemVariants}>
                    <ListGroup.Item
                        className="bootstr__item"
                        style={{
                            backgroundColor: '#3a3b3b',
                            border: '1px solid #3a3b3b',
                        }}
                    >
                        <div className="item__service2">
                            <div className="item item2">
                                <img
                                    src={Number02}
                                    alt="number02"
                                    width="40"
                                    height="40"     
                                    className="service__img"
                                />
                                <p className="service__title">Многостраничник</p>
                            </div>
                            <div className="service__details">
                                <span className="service__price price2">
                                    от 250000 тенге
                                </span>
                                <button className="services__btn2 btn3">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div>
                            <span className="service__description">
                                Классический сайт, навигация по которому осуществляется с помощью меню
                            </span>
                        </div>
                    </ListGroup.Item>
                </motion.div>
                <motion.div ref={ref4} initial="offscreen" animate={controls4} variants={listItemVariants}>
                    <ListGroup.Item
                        className="bootstr__item"
                        style={{
                            backgroundColor: '#4a4b4b',
                            border: '1px solid #4a4b4b',
                        }}
                    >
                        <div className="item__service3">
                            <div className="item item3">
                                <img
                                    src={Number03}
                                    alt="number03"
                                    width="40"
                                    height="40"
                                    className="service__img"
                                />
                                <p className="service__title">Интернет-магазин</p>
                            </div>
                            <div className="service__details">
                                <span className="service__price price3">
                                    от 300000 тенге
                                </span>
                                <button className="services__btn2 btn4">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                        <div>
                            <span className="service__description">
                                Классический сайт, навигация по которому осуществляется с помощью меню
                            </span>
                        </div>
                    </ListGroup.Item>
                </motion.div>
                <motion.div ref={ref5} initial="offscreen" animate={controls5} variants={listItemVariants}>
                    <ListGroup.Item className="bootstr__item5">
                        <div className="item__service4">
                            <div className="item item4">
                                <img
                                    src={Number04}
                                    alt="number01"
                                    width="40"
                                    height="40"
                                    className="service__img"
                                />
                                <p className="service__title">
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
                                Дизайн баннеров, продвижение сайтов и многое другое.
                                Цена обговаривается индивидуально
                            </span>
                        </div>
                    </ListGroup.Item>
                </motion.div>
            </ListGroup>
        </div>
    );
};

export default ListServices;
