import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [maximo, setMaximo ] = useState("0")
  const [minimo, setMinino ] = useState("0")
  const [resultado, setResultado ] = useState(0)

  
    let sort = Math.floor(Math.random()*Math.floor(Number(maximo)))
  
    while(sort<(Number(minimo))){
  
      sort = Math.floor(Math.random()*Math.floor(Number(maximo)));
    }
  
    useEffect(() => {
   setResultado(sort) 
    })
  
  return (
   <div>
   <p>Entre com o valor minimo
   <input type="number" name="minimo" id="minimo"  value={minimo} onChange={event => setMinino(event.target.value)} />
   </p>
    <p>Entre com o valor maximo
       <input type="number" name="maximo" id="maximo"  value={maximo} onChange={event => setMaximo (event.target.value)}/></p>
     
    <h1>{resultado}</h1>
   </div>
  )
}

export default App
