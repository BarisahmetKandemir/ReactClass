import React from 'react'
import Goal from './Goal'
import Garage from './Garage'

const Conditionals = () => {

   const cars = ["Ford","BMW","Audi","Opel"]

  return (
    <div>
        <Goal isGoal={true}/>
        <Garage cars={cars}/>
    </div>
  )
}

export default Conditionals