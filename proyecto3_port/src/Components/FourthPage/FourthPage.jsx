import React from 'react';
import './FourthPage.css';

const FourthPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        alert("Correo enviado"); 
    };

    return (
        <div className="contact-container" id="contact">
            <h2 className="contact-title">Contact</h2>
            <div className="underline"></div>
            <p className="contact-description">Siéntete libre de contactarme enviando el formulario a continuación y te responderé lo antes posible</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Your Name" required />
                <input type="email" name="email" placeholder="Enter Your Email" required />
                <textarea name="message" placeholder="Enter Your Message" rows="5" required></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FourthPage;
