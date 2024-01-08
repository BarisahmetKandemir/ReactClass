import React from 'react'

const Car = (props) => {
  return (
    <li>
       {props.value + 1} {props.brand}
    </li>
  )
}

export default Car