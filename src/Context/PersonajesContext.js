import { createContext,useEffect,useState } from "react";
import getAllInfo from "../services/InfoApi";

export const PersonajesContext = createContext();

const PersonajesProvider = ({children}) =>{
    //datos de la api
    const [datas, setData] = useState([]);
    const [nuevosPersonajes, setNuevosPersonajes] = useState("");
    const [error, setError] = useState(false);
    
    //guardo los datos de la api al state
    const personajesDB = () =>  getAllInfo(setData);

    //peticion de datos a la api
    useEffect(() => {
    personajesDB();
    }, [])
    
    return (
        <PersonajesContext.Provider
            value={{datas,setData,setNuevosPersonajes,nuevosPersonajes,error,setError}}>
            {children}
        </PersonajesContext.Provider>
    )

}

export default PersonajesProvider;