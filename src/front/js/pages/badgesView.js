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
 // va intentar copiar el código al portapapeles utilizando la API navigator.clipboard
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

  const codes = {
    dark: '<button type="button" class="c-btn c-btn-dark">Dark</button>',
    win: '<button type="button" class="c-btn c-btn-win">Win</button>',
    mint: '<button type="button" class="c-btn c-btn-mint">Mint</button>',  
    azure: '<button type="button" class="c-btn c-btn-azure">Azure</button>',
  };

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

      <div className="col-lg-1 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
        <button type="button" className={`c-btn c-btn-${style}`}>
          {style.charAt(0).toUpperCase() + style.slice(1)}
        </button>
      </div>

      {/* se muestra el código con resaltado de sintaxis */}

      <div className="col-lg-9 col-md-10 col-sm-10 col-12">
        <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
          {code}
        </SyntaxHighlighter>
      </div>

      {/* se crea un boton de copia que muestra un ícono de copia o un ícono de verificación */}

      <div className="col-lg-2 col-md-10 col-sm-10 col-12">
        <button type="button" className={`c-btn c-btn-silver`} onClick={onCopy}>
          {copied ? <FaCheck /> : <FaCopy />}
        </button>
      </div>
    </div>
  );
};





// import React, { useState } from 'react';
// import "../../styles/global.css"
// import "./global.js"
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { SideBar } from '../component/sideBar';
// import { FaCopy, FaCheck } from 'react-icons/fa';

// export const BadgesView = () => {
//   // el hook de estado 'useState' para manejar el copiado
//   // // copiado se utiliza para rastrear si se ha copiado el codigo
//   const [copiado, setCopiado] = useState({});


//   // funcion para copiar el codigo al portapapeles
//   const copiarCodigo = (codigoKey) => {
//     // va obtener el código correspondiente a la codigoKey.
//     const codigo = codigos[codigoKey];

//   // se va a crear un espacio de texto temporal para poder copiar el codigo.
//     const textArea = document.createElement('textarea');
//     textArea.value = codigo;

//   // se va agregar el area de texto al cuerpo del documento
//     document.body.appendChild(textArea);

//   // selecciona el texto 
//     textArea.select();

//   // ejecuta el comando de copia en el documento
//     document.execCommand('copy');

//   // va a eliminar el área de texto temporal 
//     document.body.removeChild(textArea);


//   // actualiza el estado copiado para marcar que el código se ha copiado
//     setCopiado({ ...copiado, [codigoKey]: true });


//  // vamos establecer un temporizador para desmarcar el copiado después de 3 segundos....
//     setTimeout(() => {
//       setCopiado({ ...copiado, [codigoKey]: false });
//     }, 3000);
//   };



//   const codigos = {
//     dark: '<button type="button" class="c-btn c-btn-dark">Dark</button>',
//     win: '<button type="button" class="c-btn c-btn-win">Win</button>',
//     mint: '<button type="button" class="c-btn c-btn-mint">Mint</button>',
//     azure: '<button type="button" class="c-btn c-btn-azure">Azure</button>',

//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <SideBar />
//         <div className="col-10">
//           <div className="container">
//             <div className="row">
//               <h1 className="mt-2 mb-2"><strong>badges</strong></h1>
//             </div>


//             {/* mapea los códigos y crea una sección de código para cada uno. */}

//             {Object.keys(codigos).map((codigoKey) => (
//               <CodeSection key={codigoKey} codigo={codigos[codigoKey]} copiado={copiado[codigoKey]} estilo={codigoKey} onCopiar={() => copiarCodigo(codigoKey)} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // componente para cada sección de código
// const CodeSection = ({ codigo, copiado, onCopiar, estilo }) => {
//     // retorna la estructura de una sección de código.

//   return (
//     <div className="row">
//             {/* crea un botón con un estilo específico basado en el valor de 'estilo'. */}

//       <div className="col-lg-1 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
//         <button type="button" className={`c-btn c-btn-${estilo}`}>
//           {estilo.charAt(0).toUpperCase() + estilo.slice(1)}  {/* convierte la primera letra en mayúscula */}
//         </button>
//       </div>

//       {/* muestra el código con resaltado de sintaxis. */}

//       <div className="col-lg-9 col-md-10 col-sm-10 col-12">
//         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//           {codigo}
//         </SyntaxHighlighter>
//       </div>

//       {/* crea un botón de copia que muestra un icono de copia o un icono de verificación. */}

//       <div className="col-lg-2 col-md-10 col-sm-10 col-12">
//         <button type="button" className={`c-btn c-btn-silver`} onClick={onCopiar}>
//           {copiado ? <FaCheck /> : <FaCopy />}
//         </button>
//       </div>
//     </div>
//   );
// };

