import { useContext } from "react";
import { PersonajesContext } from "../../Context/PersonajesContext";
import Personaje from "../personaje/Personaje";
import getPersonaje from "../../utils/filtrarPersonajes";

const Cards = () => {

    const {datas,nuevosPersonajes} = useContext(PersonajesContext);
    
    return (

        <div className="cards">

            { getPersonaje(datas,nuevosPersonajes).length > 0 
                ? getPersonaje(datas,nuevosPersonajes).map(data => (
                    <Personaje
                    key={data.id} 
                    data={data}
                    />  
                ))     
                : datas && datas.map(data => (
                    <Personaje
                    key={data.id} 
                    data={data}
                    />  
                )) 
            }
        </div>
     );
}
 
export default Cards;