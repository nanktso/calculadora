import React, { useState } from 'react';

import './App.css';

function App() {

  let [num1,setnum1] = useState("")
  let [num2,setnum2] = useState("")
  let [res,setRes] = useState([])

   const HandleClick = (e) =>{
      
    var idButton = "";
      idButton = e.target.id;

      switch (idButton){
        case 'soma' :
          res= num1 + num2;
          break;
        case 'sub' :
          res= num1 - num2;
          break;
        case 'mult' :
          res= num1*num2;
          break;
        case 'div' :
          res= num1/num2;
          break;
        }

  setRes(res.concat([{
    resultado:res
  }]))

  setnum1('')
  setnum2('')
  e.preventDefault();
  }

 const handleSubmit = (e) =>{

  var idButton = "";
  idButton = e.target.id;

  switch (idButton){
    case 'soma' :
      res= num1 + num2;
      break;
    case 'sub' :
      res= num1 - num2;
      break;
    case 'mult' :
      res= num1*num2;
      break;
    case 'div' :
      res= num1/num2;
      break;

      setnum1('')
      setnum2('')
      e.preventDefault();
    }

setRes(res.concat([{
res:res
}])) 
   
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

            [{res: 2}].map(item =>(  
          <p>
            {item.res}                    
          </p>))

          }         
        </div>




    </div>
  );
}

export default App;
