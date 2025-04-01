import React from 'react';

const IMG = ({src, alt="", className=""}) => {
    console.log("O que tem aqui" + className)

    return <img src={src} alt={alt} className={`rounded-lg shadow-md  ${className}`} ></img>
}

export default IMG;