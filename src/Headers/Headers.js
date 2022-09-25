
import React, {Fragment, useState} from 'react';
import '../Headers/Headers.css';


function Headers() {

  const [form, setForm] = useState("");

  var checked_gender = document.querySelector('input[name = "soma"]:checked');

  let [lista, setLista] = useState ([]);
  let [novoItem, setNovoItem] = useState("");


      return (
      <Fragment>
        <div className="app">
          <h2>CALCULADORA DE PISO</h2>
          <div>

            <input className='local'
              value={novoItem} onChange = {value => setNovoItem(value.target.value)}
              placeholder='Local'
              maxLength={10}
              type="text" /><br></br><br></br>

            <input className='input'
              onChange={handleChange}
              placeholder='Medida 1'
              type="number"
              name="input_1" />

              <label>  X  </label>

              <input className='input'
              onChange={handleChange}
              placeholder='Medida 2'
              type="number"
              name="input_2" /><br></br><br></br>

              <div className="radios">
                <input type="radio" value="soma" name="soma"/>Adicionar 10% do rodapé
              </div> <br></br>

              <button 
                onClick={()=> adicionarNovoItem()}
                className="btn">
                CALCULAR
              </button>
            
          </div>
            <div className='container_info_fora'>
               <div className='container'>
                  <ul className='lista'>
                    {lista.map((item, index) => (
                      <li key={index} className='item'>
                        {item}
                        <button onClick = {() => deletarItem(index)}>
                          <label className='deletar'>X</label>
                        </button>
                      </li>
                    ))}
                  </ul>  
               </div>
            </div>   
        </div>
      </Fragment>  
      );

      function adicionarNovoItem () {
        if (checked_gender !== null){
        console.log("com 10 %")
        const calc = (form.input_1 * form.input_2);
        setLista ([(novoItem)+(" ")+(form.input_1)+("")+("X")+(form.input_2)+("=")+(calc.toFixed(2))+("mts²"),...lista]);
        setNovoItem("");
        }else{
       const calc = (form.input_1 - form.input_2);
        setLista ([(novoItem)+(" ")+(form.input_1)+("")+("X")+(form.input_2)+("=")+(calc.toFixed(2))+("mts²"),...lista]);
        setNovoItem("");
        console.log("sem 10 %")
      }
      }

      function deletarItem (index) {
        let tempArray = [...lista];
        tempArray.splice(index, 1);
        setLista(tempArray);
      }

      function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
      }

}

export default Headers;