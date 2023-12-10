import { Button} from 'react-bootstrap';
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import './Works.css'

const Works = () =>{
  return (
    <>
      <div className='works__heading'>
        <Button  variant="outline-dark" className='works__btn1'>Перейти к полному портфолио</Button>
        <h2>Работы</h2>
      </div>
      <div className='works__container'>
        <div className='works__option1 works__item1'>
          <div className='img__work1'>
            <img src={pic2} alt="Сайт номер 1" />
          </div>
          <div className='works__content works__content1' >
            <h2>Сайт номер 1</h2>
            <p className='works__about'>Корпоративный сайт для компании, оказывающей аудиторские услуги в Казахстане</p>
            <div className='works__details'>
              <p className='works__details_p'>UX/UI дизайн</p>
              <p className='works__details_p'>Верстка на Тильде</p>
              <p className='works__details_p'>Продвижение</p>
            </div>
            <Button variant="outline-dark" className="works__btn2">Подробнее</Button>
          </div>
        </div>
        <div className='works__option2'>
          <div className='works__item2'>
            <div className='img__work2'>
              <img src={pic2} alt="Сайт номер 2" />
            </div>
            
            <div className='works__content works__content2'>
              <h2>Сайт номер 2</h2>
              <p className='works__about'>Лендинг для представления услуги визуализации интерьера в VR</p>
              <div className='works__details'>
                <p className='works__details_p'>UX прототипирование</p>
                <p className='works__details_p'>UI дизайн</p>
              </div>
              <Button variant="outline-dark" className="works__btn3">Открыть дизайн сайта</Button>
            </div>
          </div>
          <div className='works__item3'>
            <div className='img__work3'>
              <img src={pic3} alt="Сайт номер 3" />
            </div>
            <div className='works__content works__content2'>
              <h2>Сайт номер 3</h2>
              <p className='works__about'>Интернет магазин сельскохозяйственной продукции в г. Шымкент</p>
              <div className='works__details'>
                <p className='works__details_p'>UX прототипирование</p>
                <p className='works__details_p'>UI дизайн</p>
                <p className='works__details_p'>Верстка на Тильде</p>
              </div>
              <Button variant="outline-dark" className="works__btn3">Перейти на сайт</Button>
            </div>
          </div> 
        </div>
        
      </div>     
    </>
  );
}

export default Works;