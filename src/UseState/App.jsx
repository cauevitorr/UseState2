// Controle de estado com React.useState
import React from "react"

const App = () =>{
 // const []
 const [contador,setContador] = React.useState(1)
 const [items, setItems] = React.useState(['Item 0'])
  function HandleClick(){
   setContador(contador + 1)
   setItems([...items, `Item ${contador}`])
  }
  function RemoveItem(){
   const newArray = [...items]
   newArray.pop()
   setItems(newArray)
  }
  console.log(items)
  return(
   <>
   {items.map((item, index)=>(
    <li key={index}>{item}</li>
   ))}
   <button onClick={HandleClick}>Adicionar Item</button>
   <button onClick={RemoveItem} >Remover Item</button>
   </>
   )
 }

export default App
