import React from 'react';
import { CiCamera } from "react-icons/ci";
import './ServiceCard.css';

const ServicesCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <div className="icon">
        <CiCamera size={64}/>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServicesCard;