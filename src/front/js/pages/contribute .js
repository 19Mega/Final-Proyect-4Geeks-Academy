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
    <div className="container" id="plans" style={{ marginBottom: '150px', marginTop: '150px' }}>
      <h1 className="my-4" style={{ fontSize: '3rem' }}>
        <strong> Contribute <span style={{ "color": "#FD5812" }}> always</span></strong>
      </h1>
      <h4>At Componentify, we're dedicated to making a difference. Through our innovative solutions and socially responsible initiatives, we're actively shaping a brighter future. Together, let's contribute to a better tomorrow.

</h4>
      <div className="row">
        <div className="col-md-4">
          <div className="card shadow" style={{ backgroundColor: '#FFDAB9' }}>
            <div className="card-header">
              <h5></h5>
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">$10.00/month</h6>
              <p></p>
              <button className="btn btn-success" 
              onClick={pagar}
              >Contribute</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow" style={{ backgroundColor: '#FFB93E' }}>
            <div className="card-header">
              <h5></h5>
            </div>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">$50.00/month</h6>
              <p>

We're thrilled to offer you these high-quality components for free. However, maintaining and improving this platform takes time and resources. If you appreciate what we do and want to support our work, consider making a donation. Every small contribution helps us continue creating useful and functional tools for you.

**Ways to Donate:**

- [PayPal](your-PayPal-link)
- [Bitcoin](your-Bitcoin-address)

We greatly appreciate your support and trust in us!

Thank you for being a part of the Componentify community!
</p>
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
