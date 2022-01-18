import React  from 'react';
import './App.scss';

import Tasbih from './Components/Todo/Todo'

function App () {
    
    const [count, setCount] = React.useState(0)
    const [disabled, setDisabled] = React.useState(false)
    return (
        <>
        <div className='container' >
        <h2 className='heading'>Tasbih</h2>
        <Tasbih count = {count} setCount={setCount}  disabled ={disabled} setDisabled = {setDisabled}/>
        </div>
        
        </>
        );
    }
    
    export default App;
    