import React from "react";
import "./Arrow.css";

const Arrow = ({ className, onClick}) => {
    return (
        <div
            className={className}    
            onClick={onClick}
        />
    );
};

export default Arrow;