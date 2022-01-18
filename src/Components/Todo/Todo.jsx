import React from 'react'
import './Todo.scss'
var subhanalloh = "Subhanalloh"
var allohuakbar = "Allohuakbar"
function Tasbih ({count , setCount, disabled, setDisabled}) {
  if (count >= 33) {
    alert("Alloh sizni panohida asrasin! " + subhanalloh + " Alhamdurillah " +  allohuakbar )
  }
  return (
    <>
    <div className='tasbih'>
    <span className='tasbih__span'>
    {count}
    </span>
    
    <ul className='list'>
    <li className='item'>
    <button className='item__buttn' onClick={() => setCount(count - 1)} disabled = {disabled}>
    ↩️
    </button>

    </li>
    <li className='item'>
    <button className='item__buttn' onClick={(evt) => setDisabled(!disabled)}>
    🔒
    </button>

    </li>
    <li className='item'>
    <button className='item__buttn' onClick={() => setCount(0)} disabled = {disabled}>
    ⏹️
    </button>
    </li>
    </ul> 

    <button className='btn' onClick={() => setCount (count + 1)} disabled = {disabled}>
      boss</button>  
    </div>
    </>
    )
  }
  
  export default Tasbih