import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    //passing default values in start of context creation
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

//custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}