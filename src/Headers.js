
import React from 'react';
import InputMask from "react-input-mask";
import "./Headers.css";

function Headers() {

  return (
    <form>
      <div className="container">
         <div className="form">
         <h1>CÁLCULO DE PISO</h1>
          <div className="containerInputLabel">
            <div className="childenContainerInputLabel">
             
              <InputMask 
                placeholder="ALTURA"
                name="altura" 
               
              />
            </div>
            <div className="childenContainerInputLabel">
             
              <InputMask 
                placeholder="LARGURA"
                name="largura"
               
              />
            </div>
          </div>
          <div className="containerButton">
            <button>CALCULAR</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Headers;