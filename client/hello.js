import React from 'react'
import { hot } from 'react-hot-loader'

const Hello = () => {
    return (
        <div>
          <h1>Hello beautiful world!</h1>
        </div>
      )
}

//We are hot exporting it so that get reloaded when changed
export default hot(module)(Hello)
