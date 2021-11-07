import { useContext } from "react";
import { PersonajesContext } from "../../Context/PersonajesContext";

const Search = () => {
  
   //guardo valor del input
   const {setNuevosPersonajes} = useContext(PersonajesContext);

    //funcion para filtrar los personajes del input
    const handleChange = e => {
     setNuevosPersonajes(e.target.value);
    }
 
    return ( 
        <div className="buscador">
            <input 
              className="buscador__input"
              placeholder="ingrese el nombre"
              type="text"
              onChange={handleChange}
            />
        </div>
     );
}
 
export default Search;