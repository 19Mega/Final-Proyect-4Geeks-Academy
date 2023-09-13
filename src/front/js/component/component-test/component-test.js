import React from "react";
import { Link } from "react-router-dom";
import "./component-test.css";



export const Component1 = () => {
    return (
        <div>
            <div class="product-card">
                <img src="https://2.bp.blogspot.com/-sJM5cnB7NFs/UzHC6WiUIQI/AAAAAAAAABk/JLPlU_8WQPE/s1600/81cf366b114e8cc41d395ac373b79578_XL.jpg" alt="Nombre del Producto" />
                <h4>Componentify</h4>
                <p class="price">$20.00</p>
                <button class="buy-button">Comprar</button>
            </div>

            <div>
                <div class="product-card">
                    <img src="https://2.bp.blogspot.com/-sJM5cnB7NFs/UzHC6WiUIQI/AAAAAAAAABk/JLPlU_8WQPE/s1600/81cf366b114e8cc41d395ac373b79578_XL.jpg" alt="Nombre del Producto" />
                    <h4>Componentify</h4>
                    <p class="price">$20.00</p>
                    <button class="buy-button">Comprar</button>
                </div>


            </div>

            <div class="custom-card">
                <img src="https://th.bing.com/th/id/OIP.BMKDvs-tRi_8UXSbPW0fNgHaEd?w=289&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" />
                <h4>Componentify</h4>
                <p class="price">$20.00</p>
            </div>
            <div class="custom-card">
                <h4>Título de la Tarjeta</h4>
                <p>Descripción corta del contenido de la tarjeta.</p>
                <button class="custom-button">Ver Detalles</button>
            </div>


        </div>
    )
}



















