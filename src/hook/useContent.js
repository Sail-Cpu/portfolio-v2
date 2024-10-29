import { useContext, useEffect, useState } from "react";
import { themeContext } from "../contexts/themeContext";

const useContent = (userData, section, noLang) => {

    const {language} = useContext(themeContext);
    const [content, setContent] = useState(null);
    

    useEffect(() => {
        if(userData && language && section){
            if(!noLang){
                setContent(userData[section][language.name]);
            }else if(noLang){
                setContent(userData[section])
            }
        }
    }, [userData, language])

    return content;
}

export default useContent;