import React from 'react';

import Button from 'react-bootstrap/Button';
import Design from "../../assets/design.svg";
import Development from "../../assets/development.svg";
import Advertising from "../../assets/advertising.svg";
import Support from "../../assets/support.svg";
import Snowflake from "../../assets/snowflake.svg";
import './Intro.css'

const Intro = () => {
  return (
    <div className="intro">
        <div className="intro__heading">
            <h1>Разработка <br /><b>user friendly </b><div className='snowflake'><img src={Snowflake} alt="design" className="snowflake_pic"/></div><br />сайтов</h1> 
        </div>
        <div className="intro__content">
            <Button variant="dark" className='intro__btn1'>Обсудить проект</Button>
            <Button variant="outline-dark" className="intro__btn2">Про наш подход к разработке</Button>
            <img 
                src={Design} 
                width="120"
                height="80"
                alt="design" 
                className="intro-design"
            />
            <img 
                src={Development} 
                width="120"
                height="80"
                alt="design" 
                className="intro-development"
            />
            <img 
                src={Advertising} 
                width="120"
                height="80"
                alt="design" 
                className="intro-advertising"
            />
            <img 
                src={Support} 
                width="120"
                height="80"
                alt="design" 
                className="intro-support"
            />
            <p>*User friendly — дружественный интерфейс веб-сайта, направленный на максимальное удобство пользователя из определенной аудитории</p>
        </div>
    </div>
  )
}

export default Intro