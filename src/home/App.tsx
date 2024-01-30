import React from 'react'
import logo from '../resources/logo.svg'
import './App.css'

import ButtonTest from '../components/ButtonTest'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div>
            <p>Développeurs</p>
          </div>
          <ButtonTest />
        </header>
      </div>
  )
}

export default App
