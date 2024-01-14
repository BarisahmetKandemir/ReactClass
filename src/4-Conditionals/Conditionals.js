import React from 'react'
import Goal from './Goal'
import Garage from './Garage'

const Conditionals = () => {

   const cars = ["Ford","BMW","Audi","Opel"]

  return (
    <div>
        <h1>Conditionals</h1>
        <Goal isGoal={true}/>
        <Garage cars={cars}/>
    </div>
  )
}

export default Conditionals