import { useContext } from "react";
import { PersonajesContext } from "../../Context/PersonajesContext";
import style from "./search.module.css";

const Search = () => {
  
   //guardo valor del input
   const {setNuevosPersonajes} = useContext(PersonajesContext);

    //funcion para filtrar los personajes del input
    const handleChange = e => {
     setNuevosPersonajes(e.target.value);
    }
 
    return ( 
        <div className={style.buscador}>
            <input 
              className={style.buscador__input}
              placeholder="ingrese el nombre"
              type="text"
              onChange={handleChange}
            />
        </div>
     );
}
 
export default Search;