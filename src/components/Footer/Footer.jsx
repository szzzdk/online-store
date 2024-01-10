import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer__container'>
        <div className='footer__left'>
            <a href="tel:+77761195174" className='footer__phone'>+7 (776) 119-51-74</a>
            <ul className='social-links'>
                <li className='social-link'><a href="https://www.instagram.com/szzzdk/" rel="noopener">Instagram</a></li>
                <li className='social-link'><a href="https://t.me/dszdk" rel="noopener">Telegram</a></li>
                <li className='social-link'><a href="http://wa.me/77761195174" rel="noopener">WhatsApp</a></li>
            </ul>
            <div className='logo__text'>© vdovenko.design 2023</div>
        </div>
        <div className='footer__right'>
            <a href="mailto:dariga.syzdykova05@gmail.com" className='footer__mail'>dariga.syzdykova05@gmail.com</a>
            <div className='city'>Астана, Казахстан</div>
            <a href="/policy" className='policy'>Политика конфиденциальности</a>
        </div>
    </footer>
  )
}

export default Footer;