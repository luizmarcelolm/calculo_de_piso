
import React, {useState} from 'react';
import '../Headers/Headers.css';


function Headers() {

  const [form, setForm] = useState("");

  //função que armazena informações digitadas
  function handleChange(event) {
   
    setForm({ ...form, [event.target.name]: event.target.value });
  }


  //função para enviar
  function handleSubmit(event) {
        
            //validação dos input
            if (form.input_1 > 0 && form.input_2 > 0 ){
                const calc = (form.input_1) + (form.input_2);
                console.log(parseInt(calc));
                  return alert("deu certo");                  
            }  
    }
      return (
      <form onSubmit={handleSubmit}>
        <div className="app">
          <h2>CALCULADORA DE PISO</h2>
          <div className="search">

            <input className='local'
              placeholder='Local'
              type="local" /><br></br><br></br>

            <input className='input'
              placeholder='Medida 1'
              onChange={handleChange}
              type="number"
              name="input_1" />

              <label>  X  </label>

              <input className='input'
              placeholder='Medida 2'
              onChange={handleChange}
              type="number"
              name="input_2" /><br></br><br></br>

              <div className="radios">
                <input type="radio" value="soma" name="soma"/>Adicionar 10% do rodapé
              </div> <br></br>

              <button 
                className="btn">
                CALCULAR
              </button>
            
          </div>
          <div className='container_info_fora'>
              <div className="container">
                      
                  
              </div>
            </div>
        </div>
      </form>  
      );

}

export default Headers;