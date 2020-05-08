import React, { useState } from 'react';

import './App.css';

function App() {

  let [num1,setnum1] = useState('')
  let [num2,setnum2] = useState('')
  let [res,setRes] = useState(0)

   const HandleClick = (e) =>{
      
    var idButton = "";
    idButton = e.target.id;
    let aux = 0;
      switch (idButton){
        case 'soma' :
          aux= parseFloat(num1) + parseFloat(num2);
          break;
        case 'sub' :
          aux= num1 - num2;
          break;
        case 'mult' :
          aux= num1*num2;
          break;
        case 'div' :
          aux= num1/num2;
          break;
        }

  setRes(aux)

  setnum1('')
  setnum2('')
  e.preventDefault();
  }

 const handleSubmit = (e) =>{

  var idButton = "";
  idButton = e.target.id;
  let aux = 0;
  switch (idButton){
    case 'soma' :
      aux= parseFloat(num1) + parseFloat(num2);
      break;
    case 'sub' :
      aux= parseFloat(num1) - parseFloat(num2);
      break;
    case 'mult' :
      aux= parseFloat(num1)*parseFloat(num2);
      break;
    case 'div' :
      aux= parseFloat(num1)/parseFloat(num2);
      break;

      setnum1('')
      setnum2('')
      e.preventDefault();
    }

setRes(aux) 
   
 }


  const handleChange1 = (e)=>{
    setnum1(e.target.value)
  }

  const handleChange2 = (e)=>{
    setnum2(e.target.value)
  }


  return (



    <div>

      <h1> Calculadora</h1>
      <form onSubmit={handleSubmit}>

        <div class="numeros">
        <input type='text' value={num1} onChange={handleChange1}></input>
        <input type='text' value={num2} onChange={handleChange2}></input>
        </div>

        <div class="botoes">
            <button onClick={HandleClick} id='soma' >+</button>
            <button onClick={HandleClick} id='sub'>-</button>
            <button onClick={HandleClick} id='mult'>x</button>
            <button onClick={HandleClick} id='div'>%</button>
        </div>
      
      </form> 
        <div class="resultado">
          <h2>Resultado:</h2>
          {

            
          <p>
            {res}                    
          </p>

          }         
        </div>




    </div>
  );
}

export default App;
