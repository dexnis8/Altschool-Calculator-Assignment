import React from 'react'
import Body from './Components/Body'
import { theme, ThemeContext } from './Contexts'
import CalcContextProvider from './Contexts/CalcContext'

const App = () => {
  return (
    <ThemeContext.Provider value={theme}> 
      <CalcContextProvider>
      <div className={`flex justify-center items-center h-[100vh] transition duration-500`}>
        <Body />
      </div>
      </CalcContextProvider>
    </ThemeContext.Provider>
  )
}

export default App