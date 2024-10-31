import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './Banner.css';
import { scrollToSection } from '../utilities/scrollToSection';

const Banner = () => {
    return (
        <div id='banner' className="banner custom-background-color text-white">
            <div className='text-center p-5'>
                <h1><strong>Bienvenido a Humo Producciones</strong></h1>
                <p>Bienvenido a Humo Producciones, donde transformamos tus momentos especiales en obras de arte visuales.</p>
                <a className="custom-button-color btn" onClick={(e) => scrollToSection(e, 'gallery')}>Ver Galeria</a>
                <a className="btn custom-button-color" onClick={(e) => scrollToSection(e, 'contact')}>Contacto</a>
            </div>
        </div>
    );
};

export default Banner;