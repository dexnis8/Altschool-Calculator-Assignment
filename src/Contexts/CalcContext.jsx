import { createContext, useState } from 'react'

export const CalcContext = createContext();
const CalcContextProvider = ({children}) => {
    
    const [calc, setCalc] = useState({
        num: 0,
        res: 0,
        sign: "",
        num1: "",
        num2: "",
        displaySign: ""
      })

  return (
    <CalcContext.Provider value={{calc, setCalc}}>
        <div>{children}</div>
    </CalcContext.Provider>
  )
}

export default CalcContextProvider
