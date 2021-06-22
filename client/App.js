import React from 'react'


import LoggingIn from './components/LoggingIn'
import HomePage from './components/HomePage'
import NavigationBar from './components/NavigationBar'

const App = () => {
  return (
    <div id="app">
      <LoggingIn />
      <NavigationBar />
    </div>
  )
}

export default App
