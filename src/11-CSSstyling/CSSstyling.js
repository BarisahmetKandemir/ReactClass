import React from 'react'
import "./CSSstyling.css"
import styles from "./CSSstyling.module.css"
import Example from './Example/Example'
import Example2 from './Example/Example2'
import ExampleModule from './ExampleModule/ExampleModule'
import ExampleModule2 from './ExampleModule/ExampleModule2'

const CSSstyling = () => {
  const myStyle = {
    color:"white",
    backgroundColor:"black"
  }
  return (
    <div>
      <h1 style={{color:"red"}}>Hello style</h1>
      <h1 style={{backgroundColor:"yellow"}}>Hello Style</h1>
      <h1 style={myStyle}>Hello style</h1>
      <h1 className={styles.bigblue}>module css examples</h1>
      <Example/>
      <Example2/>
      <ExampleModule/>
      <ExampleModule2/>
    </div>
  )
}

export default CSSstyling