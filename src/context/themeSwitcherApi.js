
import { useContext } from "react";
import { createContext } from "react";

export const ThemeSwitcherContext = createContext({

    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {},
})

export const ThemeSwitcherProvider = ThemeSwitcherContext.Provider

export default  function useTheme (){
    return useContext(ThemeSwitcherContext)
}