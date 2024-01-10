import React, { useState } from "react";
import "./ContactForm.css";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        contactMethod: "",
    });

    const handleChange = (e) => {
        // (e) - объект события(изменение), которое автоматически передается React при возникновении события

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = async (e) => {
        // (e) - объект события, который автоматически передается при вызове функции в ответ на событие (отправку формы)
        e.preventDefault(); // предотвращает стандартное поведение браузера при отправке формы, которое заключается в перезагрузке страницы
        try {
            const response = await fetch("http://localhost:4345/api/user", {
                // Переменная response будет содержать ответ сервера на отправленный запрос
                method: "POST",
                headers: {
                    "Content-Type": "application/json", //  тело запроса содержит данные в формате JSON
                },
                body: JSON.stringify(formData), // преобразует данные формы (formData) в строку JSON, которая затем отправляется в теле запроса на сервер
            });

            if (response.ok) {
                // Обработка успешной регистрации
                console.log("Мы свяжемся с вами в ближайшее время");
            } else {
                // Обработка ошибок сервера
                console.error("Ошибка при отправки заявки");
            }
        } catch (error) {
            // Обработка ошибок сети
            console.error("Ошибка сети");
        }
    }; 

    return (
        <div className="form__container">
            <div className="left-side">
                <h1 className="form__title">
                    Давайте начнем разработку вашего сайта уже сегодня
                </h1>
            </div>
            <div className="right-side">
            <p className="leave-contacts">Просто оставьте свои контакты, и мы свяжемся с вами</p>
                <form onSubmit={handleSubmit} className="right-side__form"> 
                    <label for="name" className="userName">
                        <span>Ваше имя:</span>
                    <input
                        type="text"
                        name="name"
                        placeholder="Имя"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-userName"
                        required
                        
                    />
                    </label>
                    <label for="phoneNumber" className="userNumber">
                        <span style={{marginBottom: '20px'}}>Ваш номер телефона:</span>
                        <PhoneInput
                            country={"kz"}
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={(value) => {
                                setFormData((prev) => ({
                                    ...prev, // гарантия, что все остальные свойства останутся неизменными, и обновится только phoneNumber
                                    phoneNumber: value,
                                }));
                            }}
                            className="input-userNumber"
                            required
                        />
                    </label>
                   
                    <div className="feedback">
                        <span className="feedback-p">Как с вами связаться</span>
                        <label className="label-feedback">
                            <input
                                type="radio"
                                name="contactMethod"
                                value="WhatsApp"
                                checked={formData.contactMethod === "WhatsApp"}
                                onChange={handleChange}
                                className="checkmark"
                                required
                            />
                            <span className="feedback-wh">Написать на Whatsapp</span>
                        </label>
                        <label className="label-feedback">
                            <input
                                type="radio"
                                name="contactMethod"
                                value="Telegram"
                                checked={formData.contactMethod === "Telegram"}
                                onChange={handleChange}
                                className="checkmark"
                                required
                            />
                            <span className="feedback-tg">Написать в Telegram</span>
                        </label>
                        <label className="label-feedback">
                            <input
                                type="radio"
                                name="contactMethod"
                                value="Call"
                                checked={formData.contactMethod === "Call"}
                                onChange={handleChange}
                                className="checkmark"
                                required
                            />
                            <span className="feedback-call">Позвонить</span>
                        </label>
                    </div>
                    

                    <button type="submit" className="submit-form">Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
