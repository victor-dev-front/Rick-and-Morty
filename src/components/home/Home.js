import { useContext } from "react";
import { PersonajesContext } from "../../Context/PersonajesContext";
import Search from "../search/Search";
import Cards from "../cards/Cards";
import getPersonaje from "../../services/filtrarPersonajes";
import Error from "../error/Error";

const Home = () => {
    const {datas,nuevosPersonajes} = useContext(PersonajesContext);
    return ( 
        <>
            <Search />
            { getPersonaje(datas,nuevosPersonajes).length <= 0 
                ? <Error/>
                : <Cards/>
            }
        </>
     );
}
 
export default Home;