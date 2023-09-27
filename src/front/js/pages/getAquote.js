import React, { useEffect, useRef, useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
//import emailjs from '@emailjs/browser';
import "../../styles/suggest.css"
import "../../styles/global.css"
import { Context } from '../store/appContext';


export const GetAquote = () => {
  const navigate = useNavigate();
  const {store, actions} = useContext(Context);

//   let userName = localStorage.getItem("name");
//   useEffect(() => {
//     Verifica si el usuario está autenticado al cargar la página
//     const isAuthenticated = !!localStorage.getItem('token'); 

//     if (!isAuthenticated) {
//       Si el usuario no está autenticado, alert
//       Swal.fire({
//         icon: 'warning',
//         title: 'Acceso denegado',
//         text: 'Debes iniciar sesión para acceder a esta página.',
//         confirmButtonText: 'Ir a la página de inicio de sesión',
//         allowOutsideClick: false,
//       }).then(() => {
//         Redirige a la página de inicio de login
//         navigate('/login');
//       });
//     }
//   }, []);

  return (


  <div class="px-4 py-5 px-md-5 text-center text-lg-start h-100" style={{backgroundColor: "hsl(0, 0%, 100%)"}}>
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
        <h1 class="mb-5 display-3 fw-bold ls-tight mt-0">
            Request a Custom <span class="text-componentify">Component</span> Quote
          </h1>
          <h2 class="my-5 fw-bold ls-tight">
          Share your Ideas with  <br />
            <span class="text-componentify">Componentify</span>
          </h2>
          <p style={{color: "hsl(217, 10%, 50.8%)"}}>
          We're thrilled that you're interested in Componentify for your custom component needs! Let us know what you have in mind, 
          and we'll get back to you with a personalized quote. We're all about making your component dreams come true, 
          so don't hesitate to reach out. We're here to help!
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card shadow p-3" style={{ borderRadius: "1rem"}}>
            <div class="card-body py-5 px-md-5">
              <form >
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                    <label class="form-label" for="form3Example1">Name</label>
                      <input type="text" id="form3Example1" class="form-control" />
                      
                    </div>
                  </div>
                </div>

                
                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Email</label>
                  <input type="email"
                        name="email"
                        className="form-control"
                        required id="form3Example3" class="form-control" />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label" for="customFile">Your idea</label>
                    <input type="file" class="form-control" id="customFile" />
                </div>

                <div class="form-outline mb-4">
                <label htmlFor="message" className="form-label" style={{color: "hsl(217, 10%, 50.8%)"}}>
                Your message:
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="6"
                required
              ></textarea>
              </div>
                <button type="submit" class="c-btn c-btn-componentify c-btn-componentify-hover btn-block mb-4">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}