import React from 'react';
import './Info.css';
import placeholder from '../assets/images/placeholder.jpg';

const Info = () => {
    return (
        <div className="parent-container">
            <div className="image-container">
                <img className="img-logofondo" src={placeholder} alt="Logo Fondo" />
            </div>
            <div className="info-text">
                <h1>Humo Producciones</h1>
                <p>(aca me tienen q pasar una descripcion que quieran poner y una foto tipo banner capaz o la que quieran)</p>
            </div>
        </div>
    );
};

export default Info;

