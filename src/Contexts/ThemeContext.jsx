import { createContext } from "react";

 const theme = {
    light: {
        background: '#f9f9f9',
        foreground: 'black',
        themeBg: '#000000',
        // bgButtons: 'lightgray',
        bgButtons: '#292d36',
        bgButton: '#f9f9f9',
    },
    dark: {
        background: '#22252d',
        foreground: 'white',
        themeBg: '#ffffff',
        bgButtons: 'lightgray',
        bgButton: '#292d36',
    }
}
const ThemeContext = createContext(theme)

export {theme, ThemeContext}