import { useEffect, useState } from "react";

const useContent = (userData, language, section) => {

    const [content, setContent] = useState(null);

    useEffect(() => {
        if(userData && language && section){
            setContent(userData[section][language.name]);
        }else if(userData && !language && section){
            setContent(userData[section])
        }
    }, [userData, language])

    return content;
}

export default useContent;