import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Admin = () => {
    const [imageData, setImageData] = useState('');

  // Convierte el valor hexadecimal en un ArrayBuffer
  const hexToBuffer = (hex) => {
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);

    for (let i = 0; i < hex.length; i += 2) {
      view.setUint8(i / 2, parseInt(hex.substr(i, 2), 16));
    }

    return buffer;
  };

  // Crea un Blob a partir del ArrayBuffer
  const buffer = hexToBuffer(imageData);
  const blob = new Blob([buffer], { type: 'image/jpeg' }); // Ajusta el tipo según el formato de imagen

  // Crea una URL a partir del Blob
  const imageUrl = URL.createObjectURL(blob);





  

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(process.env.BACKEND_URL + "/api/image/" + 1);
      const data = await response.json();
      setImageData(data.results);
      console.log("BY NAME: ", data.results);
    };
  
    fetchImage();
  }, []);






  return (
    <div>
      <img src={imageUrl} alt="Imagen" />
    </div>
  );

};




// const [imageData, setImageData] = useState('');

// useEffect(() => {
//   const fetchImage = async () => {
//     const response = await fetch(process.env.BACKEND_URL + "/api/image/" + 1);
//     const data = await response.json();
//     setImageData(data.results);
//     console.log("BY NAME: ", data.results);
//   };

//   fetchImage();
// }, []);