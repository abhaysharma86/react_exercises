import React, { useState } from 'react'

const TogglingBoolean = () => {
    const [isOn, setIsOn] = useState(false); // Initial state is false

    const toggle = () => {
      setIsOn(!isOn); // Toggle the boolean value between true and false
    };
  
    return (
      <div>
        <p>The button is {isOn ? "ON" : "OFF"}</p>
        <button onClick={toggle}>{isOn ? "Turn OFF" : "Turn ON"}</button>
      </div>
    );
}

export default TogglingBoolean
