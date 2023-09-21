import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

const Contribute = () => {
  const { store, actions } = useContext(Context)

  const pagar = async () => {
    let precio = 100
    await actions.pagoMercadoPago(precio)

    let direccion = await store.mercadoPago.init_point
    window.location.replace(direccion)
  }
  return (
    <div className="container" id="plans" style={{ marginBottom: '150px', marginTop: '50px', textAlign: 'center' }}>
      <h1 className="my-4" style={{ fontSize: '3rem' }}>
        <strong> Contribute <span style={{ "color": "#FD5812" }}> always</span></strong>
      </h1>
      <h5>At Componentify, we're dedicated to making a difference. Through our innovative solutions and socially responsible initiatives, we're actively shaping a brighter future. Together, let's contribute to a better tomorrow.
      </h5>
      <h5>
        We're thrilled to offer you these high-quality components for free. However, maintaining and improving this platform takes time and resources.
      </h5>
      <h5>
        If you appreciate what we do and want to support our work, consider making a donation. Every small contribution helps us continue creating useful and functional tools for you.
      </h5>
      <h5>
        We greatly appreciate your support and trust in us!

        Thank you for being a part of the Componentify community!
      </h5>
      <div style={{ background: "linear-gradient(to right, #900C3F, #FD5812)" }}>
        <div className="container">
          <hr style={{ border: "1px solid #FFF" }} />
        </div>
      </div>
      <h5>
        **Ways to Donate:**
      </h5>

      <div className="row">
        <div className="col-md-4">
          <div className="card shadow" style={{ backgroundColor: '#FFDAB9',height:"300px" }}>
             <div className="card-header">
              <h5>Support Our Work!</h5>
                
            </div> 
            <div className="card-body">
            <p>
            Make a one-time payment or a recurring contribution.</p>
                 <hr/>
              <h6 className="card-subtitle mb-2 text-muted">$10.00/month</h6>
              
              <button className="btn btn-success"
                onClick={pagar}
              >Contribute</button>
            </div>
          </div>
        </div>
        {/* <div className='card card-large shadow' style={el estilo q tiene}> */}
        <div className="col-md-4">
          <div className="card shadow" style={{ backgroundColor: '#FFB93E' }}>
            <div className="card-header">
              <h5></h5>
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">$50.00/month</h6>

              <button className="btn btn-success">Contribute</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 height: 500px;">

          <div className="card shadow" style={{ backgroundColor: '#FFA55E' }}>
            <div className="card-header">


              <h5></h5>
              {/* <p>Descripción del Pro Componentify...</p> */}
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">$100.00/month</h6>
              <p></p>
              <button className="btn btn-success">Contribute</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
