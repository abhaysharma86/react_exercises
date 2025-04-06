import React, { useState } from 'react'

import './CoffeeOrder.css';

const CoffeeOrder = () => {

    const [coffee, setCoffee] = useState(0);

    const orderCoffee = ()=>{
        setCoffee(coffee+1);
    }

  return (
    <div>
      <h1 className='wel_ms'>Welcome to the coffee our shop!</h1>
      <p>You've ordered <strong className='order_status'> {coffee} </strong> coffee's</p>
      <button className='order_buttion' onClick={orderCoffee}>Order</button>
    </div>
  )
}

export default CoffeeOrder
