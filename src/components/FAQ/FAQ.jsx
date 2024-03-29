import React from 'react'
import Question1 from '../../assets/question1.svg'
import Question2 from '../../assets/question2.svg'
import './FAQ.css'

const FAQ = () => {
  return (
    <div className='faq__container'>
        <div className='question__img'>
          <h1>Часто задаваемые <br />вопросы</h1>
          <img src={Question1} alt="question1" className='question1' />
          <img src={Question2} alt="question2" />
        </div>
        <div className="faq__about">
          <div className="faq__left">
            <h3>Как происходит оплата?</h3>
            <span>  
              У нас есть два варианта оплаты: 50/50 или поэтапная. 
              При оплате 50/50 вы платите 50% от стоимости как предоплату,
              и оставшиеся 50% после окончания работы. Поэтапная оплата 
              происходит за каждый выполненный этап работы (дизайн
              главной страницы, дизайн внутренних страниц, вёрстка,
              тестирование).
            </span>
            <h3>Какой контент необходим для разработки сайта?</h3>
            <span>
              Для разработки сайта вам необходимо предоставить всю 
              информацию о компании, которая у вас есть: логотип, 
              брендбук, тексты, фотографии или иллюстрации, информацию
              о товарах. Чем больше, тем лучше.
            </span>
            <span>
              Если какого‑то контента у вас недостаёт, то мы сможем 
              подобрать/создать его за отдельную плату.
            </span>
            <h3>Работаете ли вы по договору?</h3>
            <span>
              Да, мы работаем только по договору, к которому прилагается
              согласованное ТЗ. По окончании разработки предоставляем
              акт выполненных работ.
            </span>
          </div>
          <div className="faq__right">
            <h3>Платные ли правки?</h3>
            <span>
              Правки у нас бесплатные, и не ограничены по количеству. 
              Вносить их можно только на этапе создания структуры и дизайна сайта.
              После начала вёрстки правки вносятся только за обговорённую цену.
            </span>
            <h3>Сколько времени необходимо для создания сайта?</h3>
            <h3>Платные ли правки?</h3>
            <span>
              Правки у нас бесплатные, и не ограничены по количеству. 
              Вносить их можно только на этапе создания структуры и дизайна сайта.
              После начала вёрстки правки вносятся только за обговорённую цену.
            </span>
            <h3>Сколько времени необходимо для создания сайта?</h3>
          </div>
        </div>
        
        
    </div>
  )
}

export default FAQ