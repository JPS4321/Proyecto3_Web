import React, { useState, useEffect } from 'react';
import './SecondPage.css';

const SecondPage = () => {
    // Estados para manejar la visibilidad de cada elemento
    const [isVisibleTitle, setIsVisibleTitle] = useState(false);
    const [isVisibleGetToKnowMe, setIsVisibleGetToKnowMe] = useState(false);
    const [isVisibleMySkills, setIsVisibleMySkills] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            // Posiciones de cada elemento para iniciar la animación cuando sean visibles en la pantalla
            const titlePosition = document.getElementById("about-me-title").offsetTop;
            const getToKnowMePosition = document.getElementById("get-to-know-me").offsetTop;
            const mySkillsPosition = document.getElementById("my-skills").offsetTop;
    
            // Control de visibilidad para el título
            if (scrollPosition > titlePosition) {
                setIsVisibleTitle(true);
            }
            // Control de visibilidad para la sección Get to Know Me
            if (scrollPosition > getToKnowMePosition) {
                setIsVisibleGetToKnowMe(true);
            }
            // Control de visibilidad para la sección My Skills
            if (scrollPosition > mySkillsPosition) {
                setIsVisibleMySkills(true);
            }
        };
    
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div className="second-page-wrapper" id="about">
            <div className="second-page-container">
                <h2 className={isVisibleTitle ? "second-page-title visible" : "second-page-title hidden"} id="about-me-title">ABOUT ME</h2>
                <div className="underline"></div>
                <p className="second-page-description">
                    Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales, principalmente en términos de programación y tecnología.
                </p>
            </div>

            <div className="profile-section">
                <div className={isVisibleGetToKnowMe ? "get-to-know-me visible" : "get-to-know-me hidden"} id="get-to-know-me">
                    <h2>Quien soy</h2>
                    <p>
                        Soy un <strong>estudiante de tercer año de ingeniería</strong> en la Universidad del Valle, dedicado a profundizar en los fundamentos teóricos y las aplicaciones prácticas de la ingeniería.
                    </p>
                    <p>
                        Además, me gusta compartir contenido relacionado con lo que he aprendido a lo largo de mis estudios en <strong>Ingeniería</strong>, con el objetivo de ayudar a otros estudiantes y profesionales del área.
                    </p>
                </div>

                <div className={isVisibleMySkills ? "my-skills visible" : "my-skills hidden"} id="my-skills">
                    <h2>My Skills</h2>
                    <div className="skills-grid">
                        <div className="skill">HTML</div>
                        <div className="skill">CSS</div>
                        <div className="skill">JavaScript</div>
                        <div className="skill">React</div>
                        <div className="skill">Java</div>
                        <div className="skill">Python</div>
                        <div className="skill">Github</div>
                        <div className="skill">Assembly</div>
                        <div className="skill">Figma</div>
                        <div className="skill">Lisp</div>
                        <div className="skill">MySQL</div>
                        <div className="skill">Postgresql</div>
                        <div className="skill">Kotlin</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondPage;
