import React, { useState, useEffect } from 'react';
import './ThirdPage.css';
import Carousel from '../Carousel/Carousel';
import imagenblog from '../../assets/BlogFoto.png';
import ImagenCss from '../../assets/FotoCss.png';
import ImagenHtml from '../../assets/FotoHtml.png';

const ThirdPage = () => {

    const cardsData = [
        { title: "Blog De Videojuegos", description: "Un blog de videojuegos el cual cuenta con una ruta admin y un dashboard CRUD para manejar las publicaciones", imageUrl: imagenblog,   onButtonClick: () => window.location.href = 'https://deft-rugelach-a00d62.netlify.app/'},
        { title: "Dibujo en CSS", description: "Este proyecto fue creado integramente en css, esto con el objetivo de demostrar las capacidades de las hojas de estilo", imageUrl: ImagenCss, onButtonClick: () => window.location.href = 'http://uwu-guate.site/lab4_css_drawing/22102/Lab4Web/html/index.html' },
        { title: "Historia HTML", description: "Descubre una corta historia creada con HTML y con un poco de CSS.", imageUrl: ImagenHtml, onButtonClick: () => window.location.href = 'http://3.13.174.55/lab3_html/22102/index.html' },
        
    ];
    const [isVisibleTitle, setIsVisibleTitle] = useState(false);
    const [isVisibleDescription, setIsVisibleDescription] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const titlePosition = document.querySelector(".third-page-title").offsetTop;
            const descriptionPosition = document.querySelector(".third-page-description").offsetTop;

            if (scrollPosition > titlePosition) {
                setIsVisibleTitle(true);
            }
            if (scrollPosition > descriptionPosition) {
                setIsVisibleDescription(true);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);




    return (
        <div className="third-page-wrapper" id="projects">
            <div className="third-page-container">
                <h2 className={isVisibleTitle ? "third-page-title visible" : "third-page-title hidden"}>PROJECTS</h2>
                <div className="third-underline"></div>
                <p className={isVisibleDescription ? "third-page-description visible" : "third-page-description hidden"}>
                    A continuación, presento una selección de proyectos en los que he trabajado, <br></br> los cuales reflejan mi habilidad para resolver problemas y mi compromiso con la excelencia en ingeniería.
                </p>
            </div>
            <div className="projects-section">
                <Carousel cards={cardsData} /> {/* El carrusel se mantiene sin efectos de fade */}
            </div>
        </div>
    );
};

export default ThirdPage;
