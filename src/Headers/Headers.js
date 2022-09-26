
import React, {Fragment, useState} from 'react';
import '../Headers/Headers.css';


function Headers() {

  const [form, setForm] = useState("");
  let [lista, setLista] = useState ([]);
  let [novoItem, setNovoItem] = useState("");
  
      return (
      <Fragment>
        <div className="app">
          <h2>CALCULADORA DE PISO</h2>
          <div>

            <input className='local'
              value={novoItem} onChange = {value => setNovoItem(value.target.value)}
              placeholder='Local da instalação'
              maxLength={10}
              type="text" /><br></br><br></br>

            <input className='input' 
              id='input1'
              onChange={handleChange} 
              placeholder='Medida 1'
              type="number"
              name="input_1" />

              <label>.  X  .</label>

              <input className='input'
              id='input2'
              onChange={handleChange}
              placeholder='Medida 2'
              type="number"
              name="input_2" /><br></br><br></br>

              <button
                onClick={()=> adicionarNovoItem1()}
                className="btn">
                COM 10% DO RODAPÉ
              </button><br></br>

              <button 
                onClick={()=> adicionarNovoItem2()}
                className="btn">
                SEM 10% DO RODAPÉ
              </button>
            
          </div>
            <div className='container_info_fora'>
               <div className='container'>
                  <ul className='lista'>
                    {lista.map((item, index) => (
                      <li key={index} className='item'>
                        {item}
                        <button className='btnDeletar' onClick = {() => deletarItem(index)}>
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


      //com redapé
      function adicionarNovoItem1 () {
        if (form.input_1 > 0 && form.input_2 > 0 ){       
        const calc = (form.input_1 * form.input_2);
        const calc1 = (calc)+(((calc) * 10)/100);
        setLista ([(novoItem)+(" ")+(form.input_1)+("")+("X")+(form.input_2)+("=")+(calc1.toFixed(2))+("mts²"),...lista]);
        
        //limpar input de medidas
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
        form.input_1 = "";
        form.input_2 = "";
        setNovoItem(""); 
        } else {
          return alert("MEDIDAS PRECISAM SER PREENCHIDAS CORRETAMENTE!!!")
        }
      }
      // sem rodapé
      function adicionarNovoItem2 () {
        if (form.input_1 > 0 && form.input_2 > 0 ){       
          const calc = (form.input_1 * form.input_2);
          setLista ([(novoItem)+(" ")+(form.input_1)+("")+("X")+(form.input_2)+("=")+(calc.toFixed(2))+("mts²"),...lista]);
          
          //limpar input de medidas
          document.getElementById("input1").value = "";
          document.getElementById("input2").value = "";
          form.input_1 = "";
          form.input_2 = "";
          setNovoItem(""); 
          } else {
            return alert("MEDIDAS PRECISAM SER PREENCHIDAS!!!")
          }
      }
      
      //deletar itens
      function deletarItem (index) {
        let tempArray = [...lista];
        tempArray.splice(index, 1);
        setLista(tempArray);
      }
      
      //pegando informações dos inputs
      function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
      }

}

export default Headers;