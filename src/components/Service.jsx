import React from 'react';
import ServicesCard from './ServiceCard';
import './Service.css';

const services = [
   {
     title: 'Edicion de fotos',
     description: 'Texto de ejemplo'
   },
  {
    title: 'Sesion de fotos',
    description: 'Texto de ejemplo'
  },
  {
    title: 'Eventos',
    description: 'Ofrecemos servicios de fotografía profesional para eventos, capturando momentos únicos y creando recuerdos duraderos.'
  }
];

const Service = () => {
  return (
    <div id='service' className="services">
      <h2>Nuestros Servicios</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <ServicesCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default Service;