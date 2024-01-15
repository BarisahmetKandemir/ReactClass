import React, { useContext } from 'react'
import { UserContext } from './UseContext'

const Component3 = ({user}) => {
    const user2 = useContext(UserContext)
  return (
    <div>
        {/* <h1>Component3</h1>
        <h2>{`Hello ${user}`}</h2> */}


        <h2>{`Hello ${user2}`}</h2>
    </div>
  )
}

export default Component3