import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Admin = () => {
  const [quoteData, setQuoteData] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch(process.env.BACKEND_URL + "/api/quotes");
      const data = await response.json();
      setQuoteData(data.results);
      console.log("All Quotes: ", data.results);
    };

    fetchQuotes();
  }, []);

  // Función para convertir datos hexadecimales en una URL de imagen
  const hexToImageUrl = (hex) => {
    const buffer = hexToBuffer(hex);
    const blob = new Blob([buffer], { type: 'image/jpeg' });
    return URL.createObjectURL(blob);
  };

  // Función para convertir datos hexadecimales en un ArrayBuffer
  const hexToBuffer = (hex) => {
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);

    for (let i = 0; i < hex.length; i += 2) {
      view.setUint8(i / 2, parseInt(hex.substr(i, 2), 16));
    }

    return buffer;
  };

  return (
    <div className="container">
      {quoteData.map((quote, index) => (
        <div key={index} className="card my-3">
          <img
            className="card-img-top p-3" style={{height:"200px", width:"300px"}}
            src={hexToImageUrl(quote.image)}
            alt="Imagen"
          />
          <div className="card-body">
            <h5 className="card-title">{quote.name}</h5>
            <p className="card-text">{quote.email}</p>
            <p className="card-text">{quote.message}</p>
          </div>
        </div>
      ))}
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