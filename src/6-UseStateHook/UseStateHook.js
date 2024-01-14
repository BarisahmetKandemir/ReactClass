import React, { useState } from 'react'

const UseStateHook = () => {

   const [color,setColor] = useState("orange")

//    const [car,setCar] = useState({
//     brand:"Ford",
//     model:"Mustang",
//     year:1964,
//     color:"red"
//    })

   const updateColor = () => {
     
   }

  return (
    <div>
        <h1>UseStateHook</h1>
        <h1>My favorite color is {color}</h1>
        <button type="buton" onClick={() =>setColor("blue")}>Blue buttom</button>

         {/* <h1>It is a {car.color} {car.model} from {car.year}</h1>
         <button type="button" onClick={() => {setCar({year:"1980",model:"")}}>Change car</button> */}

         
    </div>
  )
}

export default UseStateHook