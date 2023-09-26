import React, { useState } from 'react';
import "../../styles/global.css"; 
import "./global.js";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { SideBar } from '../component/sideBar';
import { FaCopy, FaCheck } from 'react-icons/fa';

export const BadgesView = () => {
  // define el estado local para rastrear si el codigo se ha copiado
  const [copied, setCopied] = useState({});

  // función para copiar el código al portapapeles
  const copyCode = async (codeKey) => {
    const code = codes[codeKey]; // agarra el codigo correspondiente a la codekey

    try {
 // va intentar copiar el código al portapapeles utilizando la  api navigator-clipboard
      await navigator.clipboard.writeText(code);
 // se va actulizar para marcar que el codigo se ha copiado 
      setCopied({...copied, [codeKey]: true});

// temporizador para desmarcar después de 3 segundos
      setTimeout(() => {
        setCopied({...copied, [codeKey]: false});
      }, 3000);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  // definimos los codigos que se mostrarán 

  const codes = [
  '<p>Example Text <span class="c-badge text-risk bg-risk">New</span></p>',
  '<p>Example Text <span class="c-badge text-caution bg-caution">New</span></p>',
  '<p>Example Text <span class="c-badge text-caution bg-caution">New</span></p>',
  ];


  return (
    <div className="container">
      <div className="row">
        <SideBar />
        <div className="col-10">
          <div className="container">
            <div className="row">
              <h1 className="mt-2 mb-2"><strong>badges</strong></h1> 
            </div>
            
            
         {/* mapeamos los codigos y  se crea una sección de codigo para cada uno */}

            {Object.keys(codes).map(codeKey => (
              <CodeSection 
                key={codeKey} 
                code={codes[codeKey]}
                copied={copied[codeKey]}
                style={codeKey}
                onCopy={() => copyCode(codeKey)}
              />
            ))}
          </div>
        </div>  
      </div>
    </div>
  );
};

const CodeSection = ({code, copied, onCopy, style}) => {

  return (
    <div className="row">


      {/* crea un botón con un estilo específico basado en el valor de 'style' */}

      <div className="col-lg-2 col-md-3 col-sm-3 col-12">
      {/* <span className={`c-badge text-${color} bg-${color}`}>
          {style.charAt(0).toUpperCase() + style.slice(1)}
        </span>  */}
      </div>

      {/* se muestra el código con resaltado de sintaxis */}

      <div className="col-lg-8 col-md-8 col-sm-8 col-12">
        <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
          {code}
        </SyntaxHighlighter>
      </div>

      {/* se crea un boton de copia que muestra un ícono de copia o un ícono de verificación */}

      <div className="col-lg-2 col-md-2 col-sm-2 col-12">
        <button type="button" className={`c-btn c-btn-silver`} onClick={onCopy}>
          {copied ? <FaCheck /> : <FaCopy />}
        </button>
      </div>
    </div>
  );
};


