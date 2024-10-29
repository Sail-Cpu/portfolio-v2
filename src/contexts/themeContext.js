import { createContext, useState } from "react";

export const themeContext = createContext()

const ThemeContextProvider = ({children}) => {

    const [language, setLanguage] = useState(null);

    return(
        <themeContext.Provider value={{language, setLanguage}}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider;