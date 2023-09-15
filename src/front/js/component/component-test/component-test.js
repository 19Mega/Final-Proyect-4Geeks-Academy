import React from "react";
import { Link } from "react-router-dom";
import "./component-test.css";


//component 1: Tarjeta de Producto
export const Component1 = () => {
  return (
    <div className="product-card">
      <img src="https://2.bp.blogspot.com/-sJM5cnB7NFs/UzHC6WiUIQI/AAAAAAAAABk/JLPlU_8WQPE/s1600/81cf366b114e8cc41d395ac373b79578_XL.jpg" alt="Nombre del Producto" />
      <h4>Componentify</h4>
      <p className="price">$20.00</p>
      <button className="buy-button">C</button>
    </div>
  )

}


export const Component2 = () => {
  return (
    <div>
      <div className="product-card">
        <img src="https://2.bp.blogspot.com/-sJM5cnB7NFs/UzHC6WiUIQI/AAAAAAAAABk/JLPlU_8WQPE/s1600/81cf366b114e8cc41d395ac373b79578_XL.jpg" alt="Nombre del Producto" />
        <h4>Componentify</h4>
        <p className="price">$20.00</p>
        <button className="buy-button">C</button>
      </div>
    </div>
  )
}


export const Component3 = () => {
  return (
    <div className="custom-card">
      <img src="https://th.bing.com/th/id/OIP.BMKDvs-tRi_8UXSbPW0fNgHaEd?w=289&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
      <h4>Componentify</h4>
      <p className="price">€20.00</p>
    </div>

  )
}


export const Component4 = () => {
  return (
    <div className="custom-card">
      <img src="https://th.bing.com/th/id/OIP.BMKDvs-tRi_8UXSbPW0fNgHaEd?w=289&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
      <h4>Componentify</h4>
      <p className="price">€20.00</p>
    </div>
  )
}


export const Component5 = () => {
  return (
    <div className="custom-card">
      <img src="https://th.bing.com/th/id/OIP.BMKDvs-tRi_8UXSbPW0fNgHaEd?w=289&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
      <h4>Componentify</h4>
      <p className="price">€20.00</p>
    </div>
  )
}


export const Component6 = () => {
  return (
    <div className="custom-card">
      <img src="https://th.bing.com/th/id/OIP.BMKDvs-tRi_8UXSbPW0fNgHaEd?w=289&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
      <h4>Componentify</h4>
      <p className="price">€20.00</p>
    </div>
  )
}


export const Component7 = () => {
  return (
    <div className="custom-card">
      <img src="https://th.bing.com/th/id/OIP.BMKDvs-tRi_8UXSbPW0fNgHaEd?w=289&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
      <h4>Componentify</h4>
      <p className="price">€20.00</p>
      <button>Botón</button>
    </div>

  )
}


export const Component8 = () => {
  return (
    <div className="custom-card">
      <h4>Título </h4>
      <p></p>
      <button className="custom-button"></button>
    </div>
  )
}


export const Component9 = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded border border-gray-300 shadow">
        <img src="ruta_de_la_imagen.jpg" alt="Nombre del Producto" className="w-full mb-4 rounded" />
        <h4 className="text-xl font-semibold mb-2">Componentify</h4>
        <p className="text-gray-700 text-sm mb-2">€20.00</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Comprar</button>
      </div>
    </div>

  )
}


export const Component10 = () => {
  return (
    <div className="product-card">
      <img src="ruta_de_la_imagen.jpg" alt="Nombre del Producto" className="product-image" />
      <h4 className="product-title">Componentify</h4>
      <p className="product-price">€20.00</p>
      <button className="buy-button">C</button>
    </div>

  )
}



export const Component11 = () => {
  return (
    <div className="simple-card">
      <p>Componentify</p>
    </div>

  )
}

export const Component12 = () => {
  return (
    <div className="simple-card">
      <p>Componentify</p>
    </div>

  )
}

export const Component13 = () => {
  return (
    <div className="border-box">
      <p>Componentify</p>
      <div className="text-card"><h3></h3>
        <p></p>
      </div>
    </div>
  )
}

export const Component14 = () => {
  return (
    <div className="shadow-card">
      <h3>Componente con Sombra</h3>
      <p>Contenido del componente.</p>
    </div>

  )
}


export const Component15 = () => {
  return (
    <div className="fancy-card">
      <img src="ruta_de_la_imagen.jpg" alt="Imagen del Producto" />
      <h3>Producto Especial</h3>
      <p className="description"></p>
      <button className="cta-button"></button>
    </div>

  )
}

export const Component16 = () => {
  return (
    <div className="surprise-card">
      <div className="image-container">
        <img src="ruta_de_la_imagen.jpg" alt="Imagen del Producto" />
      </div>
    </div>
  )
}

export const Component17 = () => {
  return (
    <div className="content">
      <h3>Producto Sorprendente</h3>
      <p className="description">¡No te pierdas esta oferta especial!</p>
      <button className="cta-button">Comprar Ahora</button>
    </div>

  )
}

export const Component18 = () => {
  return (
    <div className="unique-component">
      <h3>Título Único</h3>
      <p></p>
    </div>

  )
}


export const Component19 = () => {
  return (
    <div className="colorful-box">
      <h3>Componente Colorido</h3>
      <p>Un componente con colores vibrantes.</p>
      <button className="cta-button">¡Ver Más!</button>
    </div>

  )
}

export const Component20 = () => {
  return (
    <div className="tabs">
      <div className="tab" onClick="showTab('tab1')">Pestaña 1</div>
      <div className="tab" onClick="showTab('tab2')">Pestaña 2</div>
      <div className="tab" onClick="showTab('tab3')">Pestaña 3</div>
    </div>

  )
}

export const Component21 = () => {
  return (
    <div className="tab-content" id="tab1">
      Contenido de la Pestaña 1
    </div>

  )
}

export const Component22 = () => {
  return (
    <div className="tab-content" id="tab2" style={{ display: "none" }}>
      Contenido de la Pestaña 2
    </div>

  )
}


export const Component23 = () => {
  return (
    <div className="tab-content" id="tab3" style={{ display: "none" }}>
      Contenido de la Pestaña 3
    </div>

  )
}


export const Component24 = () => {
  return (
    <div className="image-gallery">
      <div className="image"><img src="imagen1.jpg" alt="Imagen 1" /></div>
      <div className="image"><img src="imagen2.jpg" alt="Imagen 2" /></div>
      <div className="image"><img src="imagen3.jpg" alt="Imagen 3" /></div>
      <div className="image"><img src="imagen4.jpg" alt="Imagen 4" /></div>
    </div>

  )
}


export const Component25 = () => {
  return (
    <div className="heart-icon">
      <div className="heart-body"></div>
    </div>

  )
}


export const Component26 = () => {
  return (
    <div className="testimonial">
      <p>"Recomiendo completamente sus servicios. ¡No puedo estar más contento!"</p>
      <p className="author">- Un Cliente Feliz</p>
    </div>

  )
}


export const Component27 = () => {
  return (
    <div className="testimonial">
      <p>"El equipo es muy profesional y atento a las necesidades de los clientes."</p>
      <p className="author">- Otra Persona</p>
    </div>

  )
}


export const Component28 = () => {
  return (
    <div className="testimonial-carousel">
      <div className="testimonial">
        <p>"¡Excelente servicio y productos de alta calidad!"</p>
        <p className="author">- Cliente Satisfecho</p>
      </div>
    </div>

  )
}


export const Component29 = () => {
  return (
    <div>
      <header className="simple-banner">
        <h1>¡Bienvenido a mi Sitio Web!</h1>
        <p>Explora nuestras increíbles ofertas</p>
      </header>

    </div>

  )
}

export const Component30 = () => {
  return (
    <div>
      <form className="simple-form">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export const Component31 = () => {
  return (
    <div className="puzzle-piece">
      <div className="top"></div>
      <div className="right"></div>
      <div className="bottom"></div>
      <div className="left"></div>
    </div>

  )
}

export const Component32 = () => {
  return (
    <div className="heart-icon">
      <div className="heart-body"></div>
    </div>

  )
}

export const Component33 = () => {
  return (
    <div className="puzzle-piece">
      <div className="top"></div>
      <div className="right"></div>
      <div className="bottom"></div>
      <div className="left"></div>
    </div>

  )
}

export const Component34 = () => {
  return (
    <div class="custom-card">
      <h4>Margined Component</h4>
      <p class="price">€25.00</p>
    </div>

  )
}

export const Component35 = () => {
  return (
    <nav class="simple-navbar">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>

  )
}

export const Component36 = () => {
  return (
    <form class="simple-form">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" />
      <button type="submit">Enviar</button>
    </form>
  )
}

// export const Component37 = () => {
//   return (
//     <header class="simple-banner">
//       <h1>¡Bienvenido !</h1>
//       <p>Explora nuestras increíbles ofertas</p
//       </header>

//   )
// }

export const Component38 = () => {
  return (
    <header class="simple-header">
      <h1>Bienvenido </h1>
      <p>Explora nuestras ofertas especiales</p>
    </header>

  )
}

export const Component39 = () => {
  return (
    <div class="map">
      <div class="marker"></div>
    </div>

  )
}

export const Component40 = () => {
  return (
    <form class="contact-form">
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Correo electrónico:</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Mensaje:</label>
      <textarea id="message" name="message" rows="4" required></textarea>

      <button type="submit">Enviar</button>
    </form>

  )
}

export const Component42 = () => {
  return (
    <div class="counter">
      <span id="count">0</span>
      <button id="increment">Incrementar</button>
    </div>
  )
}

// export const Component43 = () => {
//   return (
//     <form>
//       <label for="name">Nombre:</label>
//       <input type="text" id="name" name="name" required /><br></br>

//       <label for="email">Correo Electrónico:</label>
//       <input type="email" id="email" name="email" required /><br></br>

//       <label for="message">Mensaje:</label><br></br>
//       <textarea id="message" name="message" rows="5" cols="40" required></textarea><br>

//         <input type="submit" value="Enviar" />
//     </form>

//   )
// }

export const Component44 = () => {
  return (
    <div class="alert success">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
      <strong>Éxito!</strong> Este es un mensaje de éxito.
    </div>

  )
}


export const Component45 = () => {
  return (
    <div class="alert-box">
      <div class="alert-header">
        <h2>Alerta Importante</h2>
        <span class="close-alert" onclick="closeAlert()">&times;</span>
      </div>
      <p>Este es un mensaje de alerta importante. Por favor, presta atención.</p>
    </div>

  )
}

export const Component46 = () => {
  return (
    <div class="slider">
      <div class="slide" id="slide1"></div>
      <div class="slide" id="slide2"></div>
      <div class="slide" id="slide3"></div>
      <div class="slide" id="slide4"></div>
    </div>

  )
}

export const Component47 = () => {
  return (
    <div>
      <button id="open-modal">Abrir Ventana Modal</button>

      <div id="modal" class="modal">
        <div class="modal-content">
          <h2>Contenido de la Ventana Modal</h2>
          <p>Este es un ejemplo de una ventana modal simple.</p>
          <button id="close-modal">Cerrar</button>
        </div>
      </div>
    </div>




  )
}
export const Component48 = () => {
  return (

    <div class="gallery">
      <div class="image">
        <img src="imagen1.jpg" alt="Imagen 1" />
      </div>
      <div class="image">
        <img src="imagen2.jpg" alt="Imagen 2" />
      </div>
      <div class="image">
        <img src="imagen3.jpg" alt="Imagen 3" />
      </div>
      <div class="image">
        <img src="imagen4.jpg" alt="Imagen 4" />
      </div>
    </div>
  )
}

export const Component49 = () => {
  return (


    <body>
      <ul class="custom-list">
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
        <li>Elemento 4</li>
      </ul>
    </body>

  )
}


export const Component50 = () => {
  return (
    <nav class="navbar">
      <a href="#">Inicio</a>
      <a href="#">Acerca de</a>
      <a href="#">Servicios</a>
      <a href="#">Contacto</a>
    </nav>
  )
}


export const Component51 = () => {
  return (
    <nav class="navbar">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>

  )
}
































































