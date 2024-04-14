import './App.css'
import { useState } from 'react';
function App() {
  const [position, setPosition] = useState('top')
   const [flag, setFlag] = useState(false);
  const handleClick =(e)=>{
    setPosition(prevPosition=>{
      return prevPosition = e.target.value
    })
  }

  function handleMouseIn(){
    setFlag(true);
  }
  function handleMouseOut(){
    setFlag(false);
  }
  const visibility = {display:flag?"block":"none"};
  return (
   <div className='App'> 
      <div>
        <button onClick={handleClick} value="left">Left</button>
        <button onClick={handleClick} value="right">right</button>
        <button onClick={handleClick} value="top">Top</button>
        <button onClick={handleClick} value="bottom">Bottom</button>
      </div>

      <div>
        {/*if someone hover this button */}
        <button className='btn-hvr' onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>Hover over me</button>
        <div className={position}>
          I am {position} tip
        </div>
      </div>
   
   </div>
  )
}

export default App
