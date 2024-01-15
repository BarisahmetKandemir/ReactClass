import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './Store'
import Counter from './Counter/Counter'

const ReduxToolkit = () => {
  return (
    <div>
        <Provider store={Store}>
           <Counter/>
        </Provider>
    </div>
  )
}

export default ReduxToolkit